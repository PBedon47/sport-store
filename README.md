# SportZone 🏃⚡

Tienda deportiva premium con React, GSAP ScrollTrigger y chatbot IA con Azure OpenAI.

---

## 🚀 Instalación y Setup

### 1. Clonar / Abrir el proyecto en VS Code

```bash
# Si ya tienes los archivos, solo entra a la carpeta:
cd sport-store

# Si vas a clonar desde GitHub:
git clone https://github.com/TU_USUARIO/sport-store.git
cd sport-store
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar Azure OpenAI

```bash
# Copia el template de variables de entorno
cp .env.example .env
```

Luego edita `.env` con tus credenciales de Azure:

```
REACT_APP_AZURE_OPENAI_ENDPOINT=https://TU-RESOURCE.openai.azure.com
REACT_APP_AZURE_OPENAI_KEY=TU_API_KEY
REACT_APP_AZURE_DEPLOYMENT_NAME=gpt-35-turbo
```

### 4. Iniciar en desarrollo

```bash
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 5. Build para producción

```bash
npm run build
```

---

## 📦 Dependencias instaladas

| Paquete | Uso |
|---------|-----|
| `react` + `react-dom` | Framework UI |
| `gsap` | Animaciones y parallax |
| `lucide-react` | Iconos SVG |
| `axios` | HTTP requests (opcional) |

---

## 🤖 Configurar Azure OpenAI

1. Ve a [portal.azure.com](https://portal.azure.com)
2. Crea un recurso **Azure OpenAI Service**
3. En el recurso ve a **Model Deployments** → Deploy `gpt-35-turbo`
4. Copia el **Endpoint** y la **API Key** de la sección "Keys and Endpoint"
5. Pégalos en tu archivo `.env`

> **Sin Azure configurado:** el chatbot funciona igual con respuestas predefinidas inteligentes sobre la tienda (modo demo).

---

## 📁 Estructura

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Ticker.jsx
│   ├── BrandsSection.jsx
│   ├── ParallaxSection.jsx   ← GSAP ScrollTrigger parallax
│   ├── SportsSection.jsx
│   ├── ProductsSection.jsx
│   ├── PromoBanner.jsx
│   ├── Features.jsx
│   ├── Footer.jsx
│   └── Chatbot.jsx           ← Azure OpenAI chatbot
├── services/
│   └── azureChatbot.js       ← Lógica Azure + fallback
├── data/
│   └── storeData.js          ← Marcas, productos, deportes
├── hooks/
│   └── useCursor.js          ← Cursor personalizado
├── styles/
│   └── global.css
└── App.jsx
```

---

## 🎯 Características

- ✅ Parallax con GSAP ScrollTrigger (3 secciones)
- ✅ Animaciones de entrada al scroll
- ✅ Chatbot IA con Azure OpenAI
- ✅ Fallback inteligente sin Azure
- ✅ Custom cursor animado
- ✅ Ticker animado de ofertas
- ✅ Grilla de marcas con logos SVG
- ✅ Filtros de productos interactivos
- ✅ Diseño dark premium responsive
- ✅ Font Awesome 6 para iconos

---

## 🚀 Subir a GitHub

```bash
git init
git add .
git commit -m "feat: SportZone - tienda deportiva con Azure AI"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/sport-store.git
git push -u origin main
```
