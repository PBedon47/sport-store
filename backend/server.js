import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import { products, brands, sports } from "./data/storeData.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.AZURE_OPENAI_KEY,
  baseURL: process.env.AZURE_OPENAI_ENDPOINT
});

// ─── Normalización PRO ───────────────────────────────────────────────────────
const normalize = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // elimina tildes

// ─── Extractor de intención del usuario ──────────────────────────────────────
const extractIntent = (text) => {
  const normalized = normalize(text);

  // Fix 1: sin duplicados, con keywords completos
  const CATEGORY_KEYWORDS = {
    calzado:    ["calzado", "zapatilla", "zapato", "tenis", "deportiva"],
    ropa:       ["ropa", "camiseta", "polo", "short", "pantalon", "buzo", "chompa"],
    accesorios: ["accesorio", "balon", "canillera", "guante", "mochila",
                 "protector", "casco", "medias", "lentes", "cintillo"]
  };

  const sport    = sports.find(s => normalized.includes(normalize(s.name)))?.name || null;
  const brand    = brands.find(b => normalized.includes(normalize(b.name)))?.name || null;
  const category = Object.entries(CATEGORY_KEYWORDS).find(([, keywords]) =>
    keywords.some(kw => normalized.includes(kw))
  )?.[0] || null;

  return { sport, brand, category };
};

// ─── Filtro inteligente con sport lock + scoring ──────────────────────────────
const filterProducts = (message) => {
  const text      = normalize(message);
  const intent    = extractIntent(message);
  const hasIntent = intent.sport || intent.brand || intent.category;

  // Fix 1: helper con proteccion contra valores nulos/con espacios
  const norm = (v) => normalize((v || "").trim());

  // Fix 2: sport detectado desde texto aunque no venga de extractIntent
  const forcedSport = sports.find(s => text.includes(norm(s.name)))?.name || null;
  const sportToUse  = intent.sport || forcedSport;

  // Scoring por relevancia para el fallback sin intencion
  const score = (p) => {
    let s = 0;
    if (norm(p.name).includes(text)     || text.includes(norm(p.name)))     s += 3;
    if (norm(p.brand).includes(text)    || text.includes(norm(p.brand)))    s += 2;
    if (norm(p.sport).includes(text)    || text.includes(norm(p.sport)))    s += 2;
    if (norm(p.category).includes(text) || text.includes(norm(p.category))) s += 1;
    return s;
  };

  // Con intencion -> filtro estricto con sport lock seguro
  // Sin intencion -> scoring por relevancia
  const candidates = hasIntent
    ? products.filter(p => {
        if (sportToUse && norm(p.sport) !== norm(sportToUse)) return false;
        const matchBrand    = intent.brand    ? norm(p.brand)    === norm(intent.brand)    : true;
        const matchCategory = intent.category ? norm(p.category) === norm(intent.category) : true;
        return matchBrand && matchCategory;
      })
    : products
        .map(p => ({ p, s: score(p) }))
        .filter(x => x.s > 0)
        .sort((a, b) => b.s - a.s)
        .map(x => x.p);

  // Fix 3: orden UX — productos del deporte detectado primero
  return candidates
    .sort((a, b) => {
      if (sportToUse) {
        const aMatch = norm(a.sport) === norm(sportToUse) ? -1 : 1;
        const bMatch = norm(b.sport) === norm(sportToUse) ? -1 : 1;
        return aMatch - bMatch;
      }
      return 0;
    })
    .slice(0, 5);
};

// ─── Catálogo para el system prompt ─────────────────────────────────────────
const PRODUCT_CATALOG = products
  .map(
    p => `
Producto: ${p.name}
Marca: ${p.brand}
Precio: S/${p.price}
Categoría: ${p.category}
Deporte: ${p.sport}
Tallas: ${p.sizes.join(", ")}
Imagen: ${p.image}
Descripción: ${p.description}
`
  )
  .join("\n");

const SYSTEM_PROMPT = `
Eres SportBot, el asistente virtual oficial de SportZone, una tienda especializada en productos deportivos de alto rendimiento.

Tu objetivo es brindar asesoría personalizada, ayudar a los clientes a encontrar los productos más adecuados para sus necesidades y ofrecer información precisa sobre el catálogo, envíos, pagos y disponibilidad.

INSTRUCCIONES GENERALES:

* Responde siempre en español.
* Mantén un tono profesional, amigable y orientado al cliente.
* Ofrece respuestas claras, organizadas y fáciles de leer.
* Actúa como un especialista en artículos deportivos.
* Utiliza únicamente la información disponible en el catálogo.
* Nunca inventes productos, marcas, precios, tallas, colores o características.
* Si el usuario solicita algo que no existe en el catálogo, ofrece alternativas similares.
* Prioriza siempre la satisfacción y orientación del cliente.

ASESORÍA DE PRODUCTOS:

Antes de recomendar productos, considera:

* Deporte que practica el cliente.
* Nivel de experiencia (principiante, intermedio o avanzado).
* Presupuesto disponible.
* Categoría de producto buscada.
* Preferencias de marca.
* Necesidades específicas de rendimiento o comodidad.

RECOMENDACIONES:

Cuando recomiendes productos:

* Indica nombre del producto.
* Marca.
* Categoría.
* Deporte.
* Precio.
* Razón de la recomendación.
* Ventajas principales.

Si existen varias opciones adecuadas, compáralas de forma breve.

Ejemplo de formato:

• Producto: Nike Air Zoom Pegasus 41
• Marca: Nike
• Deporte: Running
• Precio: S/549
• Recomendado porque ofrece excelente amortiguación, comodidad y rendimiento para entrenamientos frecuentes.

CATÁLOGO DISPONIBLE:

${PRODUCT_CATALOG}

MARCAS DISPONIBLES:

${brands.map(b => b.name).join(", ")}

DEPORTES DISPONIBLES:

${sports.map(s => s.name).join(", ")}

INFORMACIÓN DE SPORTZONE

Métodos de pago:

* Visa
* Mastercard
* Yape
* Plin
* Transferencia bancaria

Envíos:

* Lima Metropolitana: 24 horas.
* Provincias: 3 a 5 días hábiles.

Horario de atención:

* Lunes a sábado: 9:00 am a 9:00 pm.
* Domingo: 10:00 am a 7:00 pm.

WhatsApp:
+51 999 888 777

Dirección:
Av. Javier Prado Este 1234
San Isidro
Lima, Perú

REGLAS IMPORTANTES:

* Si el usuario menciona un presupuesto, respétalo.
* Si pregunta por tallas o colores, utiliza los datos del catálogo.
* Si pregunta por una marca, muestra las mejores opciones disponibles.
* Si pregunta por un deporte, recomienda productos relacionados con ese deporte.
* Si pregunta por ofertas, prioriza productos con badge "SALE".
* Si pregunta por novedades, prioriza productos con badge "NEW".
* Si no tienes suficiente información para recomendar un producto, realiza preguntas adicionales antes de responder.
* Cuando el usuario solicite recomendaciones, muestra máximo 5 productos para evitar respuestas demasiado largas.

IMPORTANTE:

- Cuando recomiendes productos, menciona siempre el nombre completo exacto del producto tal como aparece en el catálogo.
- Tiene que aparecer solo los productos que diga el cliente, ejemplo: si el cliente dice botin de futbol tu le muestras 
  solo los botines no más cosas.
- Tu objetivo principal es ayudar al cliente a tomar la mejor decisión de compra posible.
`;

// ─── Endpoint principal ──────────────────────────────────────────────────────
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    const completion = await client.chat.completions.create({
      model: process.env.AZURE_DEPLOYMENT_NAME,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...history,
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    const reply =
      completion.choices?.[0]?.message?.content ||
      "No pude generar una respuesta.";

    const recommendedProducts = filterProducts(message);

    res.json({
      success: true,
      reply,
      products: recommendedProducts,
      _intent: extractIntent(message) // eliminar en producción
    });

  } catch (error) {
    console.error("AZURE ERROR:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get("/", (_req, res) => res.send("SportZone Backend Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`)
);