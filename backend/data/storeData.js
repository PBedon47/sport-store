export const brands = [
  { id: 1, name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg', slug: 'nike' },
  { id: 2, name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg', slug: 'adidas' },
  { id: 3, name: 'Puma', logo: 'https://images.seeklogo.com/logo-png/44/2/puma-logo-png_seeklogo-449783.png', slug: 'puma' },
  { id: 4, name: 'Under Armour', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Under_armour_logo.svg', slug: 'under-armour' },
  { id: 5, name: 'New Balance', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/New_Balance_logo.svg', slug: 'new-balance' },
  { id: 6, name: 'Reebok', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Reebok-Logo.svg', slug: 'reebok' },
];

export const sports = [
  { id: 1, name: 'Fútbol', icon: 'fa-solid fa-futbol', count: '340+ productos', image: 'https://objetos-xlk.estaticos-marca.com/uploads/2025/04/07/67f41c0a78b26.jpeg' },
  { id: 2, name: 'Basketball', icon: 'fa-solid fa-basketball', count: '220+ productos', image: 'https://www.top10listas.com/archivos/listas/8-1537525753.jpg' },
  { id: 3, name: 'Running', icon: 'fa-solid fa-person-running', count: '380+ productos', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdn1xmCuuEzK9s1U9lMCh8khp4aYVehc_1oA&s' },
  { id: 4, name: 'Tenis', icon: 'fa-solid fa-baseball', count: '180+ productos', image: 'https://img.redbull.com/images/q_auto,f_auto/redbullcom/2025/7/19/vq1camqyf2bf68gb7but/stefanos-tsitsipas-monte-carlo-country-club' },
  { id: 5, name: 'Voleibol', icon: 'fa-solid fa-volleyball', count: '95+ productos', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp2rx6Uaw_iNQT0wbXlJueTKFjLYYa-bR6Lw&s' },
  { id: 6, name: 'Futsal', icon: 'fa-solid fa-shield-halved', count: '150+ productos', image: 'https://estaticos-cdn.prensaiberica.es/clip/457373fb-8c66-4b7e-8d33-eeefe5573fc7_alta-libre-aspect-ratio_default_0.jpg' },
];

export const products = [

  // ═══════════════════════════════════════
  // CALZADO — BOTINES FÚTBOL
  // ═══════════════════════════════════════
  {
    id: 1, brand: 'Adidas', name: 'Predator Elite FG', price: 849, originalPrice: null,
    badge: 'NEW', category: 'Calzado', subcategory: 'Botines', sport: 'Fútbol',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a125cca720e4437698512358f7540c76_9366/PREDATOR_ELITE_FT_FG_UNLOCKED_Football_Boots_Red_JR4429_HM1.jpg',
    sizes: ['38','39','40','41','42','43'],
    colors: ['#111','#ff3d00'],
    rating: 4.9, reviews: 187,
    description: 'Botín de élite para grass natural con suela AG de carbono y upper Controlskin.',
  },
  {
    id: 2, brand: 'Nike', name: 'Mercurial Vapor 16 FG', price: 479, originalPrice: null,
    badge: null, category: 'Calzado', subcategory: 'Botines', sport: 'Fútbol',
    image: 'https://cdn.palbincdn.com/users/15480/images/1045721_Main_2103661_11zon-1771590444.jpg.thumb',
    sizes: ['38','39','40','41','42','43'],
    colors: ['#ff3d00','#fff','#111'],
    rating: 4.8, reviews: 267,
    description: 'El botín más veloz de Nike con upper de malla ACC y placa de carbono.',
  },
  {
    id: 3, brand: 'Puma', name: 'Future 7 Ultimate FG', price: 699, originalPrice: 849,
    badge: 'SALE', category: 'Calzado', subcategory: 'Botines', sport: 'Fútbol',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkRgTyrZLsv7p2FyMZGeQvhpioFSqJ1d_aKLwwCKimgw&s',
    sizes: ['38','39','40','41','42','43','44'],
    colors: ['#ff3d00','#111','#fff'],
    rating: 4.7, reviews: 142,
    description: 'Botín adaptable con upper FUZIONFIT+ que se moldea al pie para máximo control.',
  },
  {
    id: 4, brand: 'Nike', name: 'Phantom GX II Elite FG', price: 749, originalPrice: null,
    badge: 'NEW', category: 'Calzado', subcategory: 'Botines', sport: 'Fútbol',
    image: 'https://www.prodirectsport.ie/cdn/shop/files/1012909_main.jpg?v=1778075408',
    sizes: ['39','40','41','42','43','44'],
    colors: ['#111','#fff','#00c851'],
    rating: 4.8, reviews: 203,
    description: 'Botín de precisión con upper Gripknit ACC para máximo control del balón.',
  },
  {
    id: 5, brand: 'Adidas', name: 'Copa Pure II Elite FG', price: 649, originalPrice: null,
    badge: null, category: 'Calzado', subcategory: 'Botines', sport: 'Fútbol',
    image: 'https://www.futbolemotion.com/imagesarticulos/217305/grandes/bota-adidas-copa-pure-2-elite-fg-rojo-0.webp',
    sizes: ['38','39','40','41','42','43'],
    colors: ['#fff','#d4a017','#111'],
    rating: 4.7, reviews: 118,
    description: 'Botín clásico de cuero K-Leather con suela Primeknit para jugadores técnicos.',
  },
  {
    id: 6, brand: 'Under Armour', name: 'Magnetico Pro 3 FG', price: 389, originalPrice: 499,
    badge: 'SALE', category: 'Calzado', subcategory: 'Botines', sport: 'Fútbol',
    image: 'https://www.footballshirtculture.com/images/2018/under_armour_magnetico_pro_fg_metallic_faded_gold_black.jpg',
    sizes: ['38','39','40','41','42','43','44'],
    colors: ['#0040a8','#ff3d00','#111'],
    rating: 4.5, reviews: 89,
    description: 'Botín con upper de microfibra y suela TriBase para mayor estabilidad.',
  },

  // ═══════════════════════════════════════
  // CALZADO — ZAPATILLAS RUNNING
  // ═══════════════════════════════════════
  {
    id: 7, brand: 'Nike', name: 'Air Zoom Pegasus 41', price: 549, originalPrice: 699,
    badge: 'SALE', category: 'Calzado', subcategory: 'Zapatillas', sport: 'Running',
    image: 'https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_363,c_limit/e9381da2-3e10-47c7-9e08-129db0925160/nike-unveils-technological-advances-in-the-pegasus-41.jpg',
    sizes: ['38','39','40','41','42','43','44'],
    colors: ['#111','#fff','#ff3d00'],
    rating: 4.8, reviews: 312,
    description: 'Zapatilla de running con amortiguación React y soporte dinámico para entrenamientos frecuentes.',
  },
  {
    id: 8, brand: 'Puma', name: 'Nitro Elite 2', price: 399, originalPrice: 520,
    badge: 'SALE', category: 'Calzado', subcategory: 'Zapatillas', sport: 'Running',
    image: 'https://www.runningshoesguru.com/wp-content/uploads/2024/03/Puma-Fast-R-Nitro-Elite-2-5.jpeg',
    sizes: ['38','39','40','41','42','43','44'],
    colors: ['#fff','#00c851','#111'],
    rating: 4.6, reviews: 211,
    description: 'Espuma NITRO para máxima energía en cada zancada con suela de carbono.',
  },
  {
    id: 9, brand: 'New Balance', name: 'Fresh Foam X 1080v13', price: 589, originalPrice: null,
    badge: 'NEW', category: 'Calzado', subcategory: 'Zapatillas', sport: 'Running',
    image: 'https://www.runningshoesguru.com/wp-content/uploads/2023/11/New-Balance-Fresh-Foam-X-1080-v13-7-1.jpeg',
    sizes: ['39','40','41','42','43','44'],
    colors: ['#aaa','#111','#0040a8'],
    rating: 4.8, reviews: 156,
    description: 'Máxima amortiguación para rodadas largas y ultra maratones con espuma Fresh Foam X.',
  },
  {
    id: 10, brand: 'Adidas', name: 'Ultraboost 24', price: 629, originalPrice: null,
    badge: 'NEW', category: 'Calzado', subcategory: 'Zapatillas', sport: 'Running',
    image: 'https://hips.hearstapps.com/hmg-prod/images/h22732-ub21-innovation-ss21-hero-outfit-one-female-pre-run-fy0401-246-688585-1610641223.jpg?crop=0.9851957975167144xw:1xh;center,top&resize=640:*',
    sizes: ['38','39','40','41','42','43','44'],
    colors: ['#fff','#111','#0040a8'],
    rating: 4.9, reviews: 445,
    description: 'Zapatilla icónica con boost de 6mm y upper Primeknit+ para retorno de energía superior.',
  },
  {
    id: 11, brand: 'Under Armour', name: 'HOVR Machina 3', price: 449, originalPrice: 549,
    badge: 'SALE', category: 'Calzado', subcategory: 'Zapatillas', sport: 'Running',
    image: 'https://arenamalaysia.asia/wp-content/uploads/2022/07/Machina-3-1-1024x640.png',
    sizes: ['39','40','41','42','43','44'],
    colors: ['#111','#ff3d00','#fff'],
    rating: 4.6, reviews: 178,
    description: 'Tecnología HOVR con placa de carbono para corredores que buscan velocidad y retorno de energía.',
  },
  {
    id: 12, brand: 'Reebok', name: 'Floatride Energy 5', price: 349, originalPrice: null,
    badge: null, category: 'Calzado', subcategory: 'Zapatillas', sport: 'Running',
    image: 'https://storage.googleapis.com/bitr-cdn/wp-content/uploads/2023/10/reebok-floatride-energy-5-adventure-toe-819x1024.jpg',
    sizes: ['38','39','40','41','42','43'],
    colors: ['#fff','#111','#ff3d00'],
    rating: 4.5, reviews: 134,
    description: 'Zapatilla ligera con espuma Floatride Energy para entrenamientos diarios de alto rendimiento.',
  },

  // ═══════════════════════════════════════
  // CALZADO — ZAPATILLAS BASKETBALL
  // ═══════════════════════════════════════
  {
    id: 13, brand: 'Nike', name: 'LeBron XXII', price: 749, originalPrice: null,
    badge: 'NEW', category: 'Calzado', subcategory: 'Zapatillas Basketball', sport: 'Basketball',
    image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/d4d2b0c0-3edd-492c-ae6b-beb59fb7ab88/los-lebron-xxii-est%C3%A1n-confeccionados-para-manejar-la-presi%C3%B3n-y-los-movimientos-potentes.jpg',
    sizes: ['40','41','42','43','44','45'],
    colors: ['#111','#8b0000','#d4a017'],
    rating: 4.7, reviews: 94,
    description: 'La zapatilla de LeBron con Air Max 360 y tracción multidireccional para dominar la cancha.',
  },
  {
    id: 14, brand: 'Under Armour', name: 'Curry 12 Splash', price: 650, originalPrice: null,
    badge: null, category: 'Calzado', subcategory: 'Zapatillas Basketball', sport: 'Basketball',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8YefzlfYqdOghsU_PQMsYyxJyoEQ4Kh33QA&s',
    sizes: ['40','41','42','43','44','45'],
    colors: ['#0040a8','#d4a017','#111'],
    rating: 4.7, reviews: 88,
    description: 'Firma de Stephen Curry con tecnología Flow y HOVR para máxima respuesta en cancha.',
  },
  {
    id: 15, brand: 'Adidas', name: 'Harden Vol. 8', price: 589, originalPrice: 699,
    badge: 'SALE', category: 'Calzado', subcategory: 'Zapatillas Basketball', sport: 'Basketball',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5hRlSLBv8d3EEvT4BSZ_q8G9iiyXn7o5ylQ&s',
    sizes: ['40','41','42','43','44','45'],
    colors: ['#111','#ff3d00','#fff'],
    rating: 4.6, reviews: 112,
    description: 'Zapatilla de James Harden con Lightstrike Pro y suela Stealth para máximo agarre.',
  },
  {
    id: 16, brand: 'Nike', name: 'Zoom Freak 5', price: 499, originalPrice: null,
    badge: 'NEW', category: 'Calzado', subcategory: 'Zapatillas Basketball', sport: 'Basketball',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQ-HPSID1fYwPD4Z-JOOYPV9MAB1lG38-iA&s',
    sizes: ['40','41','42','43','44','45','46'],
    colors: ['#0040a8','#fff','#d4a017'],
    rating: 4.7, reviews: 76,
    description: 'La zapatilla de Giannis Antetokounmpo con Zoom Air y tracción herringbone.',
  },

  // ═══════════════════════════════════════
  // CALZADO — ZAPATILLAS FUTSAL
  // ═══════════════════════════════════════
  {
    id: 17, brand: 'Adidas', name: 'X Speedportal.1 IN', price: 299, originalPrice: 389,
    badge: 'SALE', category: 'Calzado', subcategory: 'Zapatillas Futsal', sport: 'Futsal',
    image: 'https://i.pinimg.com/736x/d9/0a/fa/d90afaabdecdc357bfccab523037e33f.jpg',
    sizes: ['37','38','39','40','41','42','43'],
    colors: ['#ff3d00','#111'],
    rating: 4.7, reviews: 143,
    description: 'Suela plana para máximo agarre en canchas indoor con upper Speedskin.',
  },
  {
    id: 18, brand: 'Nike', name: 'Mercurial Superfly 9 IN', price: 349, originalPrice: null,
    badge: 'NEW', category: 'Calzado', subcategory: 'Zapatillas Futsal', sport: 'Futsal',
    image: 'https://santkicks.com/cdn/shop/files/fb12c058.jpg?v=1753742729',
    sizes: ['37','38','39','40','41','42','43'],
    colors: ['#ff3d00','#fff','#111'],
    rating: 4.8, reviews: 98,
    description: 'Upper ACC y suela rubber court para velocidad explosiva en canchas sintéticas.',
  },
  {
    id: 19, brand: 'Puma', name: 'King Pro IT', price: 249, originalPrice: 319,
    badge: 'SALE', category: 'Calzado', subcategory: 'Zapatillas Futsal', sport: 'Futsal',
    image: 'https://thumblr.uniid.it/product/223904/0e87bead892f.jpg?width=3840&format=webp&q=75',
    sizes: ['37','38','39','40','41','42','43','44'],
    colors: ['#111','#fff'],
    rating: 4.5, reviews: 87,
    description: 'Upper de cuero suave para máximo control del balón en espacios reducidos.',
  },

  // ═══════════════════════════════════════
  // ROPA — CAMISETAS
  // ═══════════════════════════════════════
  {
    id: 20, brand: 'Adidas', name: 'Camiseta Real Madrid 24/25 Local', price: 320, originalPrice: null,
    badge: 'NEW', category: 'Ropa', subcategory: 'Camisetas', sport: 'Fútbol',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4d2aba30dea24adb8300bceb8f0650f7_9366/Camiseta_local_Real_Madrid_24-25_Authentic_Blanco_IX8095_DM1.jpg',
    sizes: ['XS','S','M','L','XL','XXL'],
    colors: ['#fff'],
    rating: 4.9, reviews: 504,
    description: 'Réplica oficial del Real Madrid con tecnología AEROREADY y escudo bordado.',
  },
  {
    id: 21, brand: 'Nike', name: 'Camiseta FC Barcelona 24/25', price: 335, originalPrice: null,
    badge: 'NEW', category: 'Ropa', subcategory: 'Camisetas', sport: 'Fútbol',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK2TjgrdzCL3gLsYOJGtbJ4wcBfWyw0GardIXlexnl1eZam-rGEclI6dD5zoppHRetmCLHB4aT6DzMrH_2S5bGQTBtemHIcuNBVooyW-DEtt2hUbkhCtfMo3dRS7mU3GdozRCwkdcjfbTkJLapOec9c3zCrQ_XAFGs303SUBAsPNt7Zxk9bGLsILpukbc/s1600/lanzamiento-de-la-camiseta-local-del-fc-barcelona-24-25.jpg',
    sizes: ['XS','S','M','L','XL','XXL'],
    colors: ['#1a3a6b','#a50044'],
    rating: 4.8, reviews: 441,
    description: 'Camiseta oficial Barça con Dri-FIT ADV y corte slim para máximo rendimiento.',
  },
  {
    id: 22, brand: 'Adidas', name: 'Camiseta Selección Peruana 2024', price: 289, originalPrice: null,
    badge: 'NEW', category: 'Ropa', subcategory: 'Camisetas', sport: 'Fútbol',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj8YVK7h3YFxv5I9IBea-pEN7mik7OmdKcZg&s',
    sizes: ['S','M','L','XL','XXL'],
    colors: ['#fff','#d4000f'],
    rating: 4.9, reviews: 892,
    description: 'La bicolor oficial de la Blanquirroja con AEROREADY y parche FPF.',
  },
  {
    id: 23, brand: 'Nike', name: 'Camiseta PSG 24/25 Local', price: 349, originalPrice: null,
    badge: 'NEW', category: 'Ropa', subcategory: 'Camisetas', sport: 'Fútbol',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMWR1tRPDe8OQ2xuPxayNRoGFIzusVv4-ZBQ&s',
    sizes: ['XS','S','M','L','XL','XXL'],
    colors: ['#111','#ff3d00'],
    rating: 4.8, reviews: 321,
    description: 'Camiseta oficial del PSG con Dri-FIT ADV y diseño haussmannien.',
  },
  {
    id: 24, brand: 'Adidas', name: 'Camiseta Manchester United 24/25', price: 329, originalPrice: 389,
    badge: 'SALE', category: 'Ropa', subcategory: 'Camisetas', sport: 'Fútbol',
    image: 'https://f.fcdn.app/imgs/1aaefb/www.fitpoint.com.uy/fitpuy/4d36/original/catalogo/ADJI7428_4407_1/2000-2000/camiseta-adidas-primera-equipacion-manchester-united-25-26-rojo.jpg',
    sizes: ['XS','S','M','L','XL','XXL'],
    colors: ['#8b0000','#fff'],
    rating: 4.7, reviews: 267,
    description: 'Réplica oficial del Manchester United con AEROREADY y escudo bordado.',
  },

  // ═══════════════════════════════════════
  // ROPA — POLOS
  // ═══════════════════════════════════════
  {
    id: 25, brand: 'Nike', name: 'Polo Dri-FIT Academy', price: 129, originalPrice: 169,
    badge: 'SALE', category: 'Ropa', subcategory: 'Polos', sport: 'Fútbol',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdwSCvsI-RUZ85G_dteb3RWJ2iuJhIt0grw&s',
    sizes: ['XS','S','M','L','XL','XXL'],
    colors: ['#111','#0040a8','#ff3d00','#fff'],
    rating: 4.5, reviews: 223,
    description: 'Polo de entrenamiento con tela Dri-FIT que absorbe el sudor para mayor comodidad.',
  },
  {
    id: 26, brand: 'Puma', name: 'Polo teamFINAL Training', price: 119, originalPrice: 159,
    badge: 'SALE', category: 'Ropa', subcategory: 'Polos', sport: 'Fútbol',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVZiap216M5ZRpuRlLJanUPVydUBI6ypObg&s',
    sizes: ['S','M','L','XL','XXL'],
    colors: ['#111','#ff3d00','#1a6b1a'],
    rating: 4.4, reviews: 176,
    description: 'Polo dryCELL de entrenamiento, ligero y transpirable con diseño ergonómico.',
  },
  {
    id: 27, brand: 'Adidas', name: 'Polo Condivo 22 Training', price: 109, originalPrice: null,
    badge: null, category: 'Ropa', subcategory: 'Polos', sport: 'Fútbol',
    image: 'https://soccerpost.com/cdn/shop/files/H44105_b2b010_plp_clipped_rev_1.png?v=1704396912',
    sizes: ['XS','S','M','L','XL','XXL'],
    colors: ['#111','#0040a8','#1a6b1a'],
    rating: 4.4, reviews: 143,
    description: 'Polo de entrenamiento AEROREADY con tejido reciclado y fit regular.',
  },
  {
    id: 28, brand: 'Under Armour', name: 'Polo Challenger Training', price: 139, originalPrice: 179,
    badge: 'SALE', category: 'Ropa', subcategory: 'Polos', sport: 'Running',
    image: 'https://cdn.sportshop.com/catalog/product/1500/1500/1/7/172951_1.jpg',
    sizes: ['S','M','L','XL','XXL'],
    colors: ['#111','#ff3d00','#0040a8'],
    rating: 4.5, reviews: 198,
    description: 'Polo HeatGear con tecnología anti-olor y UPF 30+ para entrenamientos al aire libre.',
  },

  // ═══════════════════════════════════════
  // ROPA — SUDADERAS
  // ═══════════════════════════════════════
  {
    id: 29, brand: 'Nike', name: 'Sudadera Tech Fleece Full-Zip', price: 459, originalPrice: 579,
    badge: 'SALE', category: 'Ropa', subcategory: 'Sudaderas', sport: 'Running',
    image: 'https://i8.amplience.net/i/jpl/jd_773856_a?qlt=92&w=600&h=765&v=1&fmt=auto',
    sizes: ['XS','S','M','L','XL','XXL'],
    colors: ['#111','#333','#0040a8'],
    rating: 4.8, reviews: 334,
    description: 'Sudadera con capucha Tech Fleece ultrasuave, cierre YKK y bolsillos con cremallera.',
  },
  {
    id: 30, brand: 'Adidas', name: 'Hoodie Essentials Trefoil', price: 279, originalPrice: null,
    badge: null, category: 'Ropa', subcategory: 'Sudaderas', sport: 'Running',
    image: 'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/F84005s.jpg?im=Resize,width=750',
    sizes: ['XS','S','M','L','XL','XXL'],
    colors: ['#111','#fff','#ff3d00'],
    rating: 4.6, reviews: 187,
    description: 'Hoodie clásico de Adidas Originals en algodón premium con logo Trefoil bordado.',
  },
  {
    id: 31, brand: 'Under Armour', name: 'Sudadera Rival Fleece', price: 319, originalPrice: null,
    badge: null, category: 'Ropa', subcategory: 'Sudaderas', sport: 'Basketball',
    image: 'https://www.innovasport.com/medias/sudadera-under-armour-rival-fleece-is-1379758-390-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDMyMTl8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzFZeTlvTTJNdk1USXpOamt5T0RZME5qTTFNVGd1YW5CbnxlZmU5MjRiNmNkZGZmZjMyNGUyZmFhMjc3ZDQxOTRmMzA5YTRiMGIyNjI2NGZjNWEzYTZkOGFkYWIxYTk4MWQ0',
    sizes: ['S','M','L','XL','XXL'],
    colors: ['#111','#333','#8b0000'],
    rating: 4.7, reviews: 98,
    description: 'Sudadera de algodón cepillado con capucha ajustable para calentamiento y descanso.',
  },
  {
    id: 32, brand: 'Puma', name: 'Hoodie Essentials Logo', price: 219, originalPrice: 279,
    badge: 'SALE', category: 'Ropa', subcategory: 'Sudaderas', sport: 'Running',
    image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/682574/01/mod01/fnd/PNA/fmt/png/PUMA-Essentials-Men',
    sizes: ['XS','S','M','L','XL','XXL'],
    colors: ['#111','#1a6b1a','#0040a8'],
    rating: 4.5, reviews: 156,
    description: 'Hoodie de algodón con capucha doble capa y bolsillo canguro de gran capacidad.',
  },

  // ═══════════════════════════════════════
  // ROPA — CASACAS
  // ═══════════════════════════════════════
  {
    id: 33, brand: 'Puma', name: 'Casaca teamLIGA Woven', price: 239, originalPrice: 299,
    badge: 'SALE', category: 'Ropa', subcategory: 'Casacas', sport: 'Fútbol',
    image: 'https://home.ripley.com.pe/Attachment/WOP_5/2020307244790/2020307244790_2.jpg',
    sizes: ['S','M','L','XL','XXL'],
    colors: ['#111','#0040a8','#1a6b1a'],
    rating: 4.5, reviews: 121,
    description: 'Casaca de entrenamiento 100% reciclada con diseño aerodinámico y bolsillos laterales.',
  },
  {
    id: 34, brand: 'Nike', name: 'Casaca Windrunner', price: 379, originalPrice: null,
    badge: 'NEW', category: 'Ropa', subcategory: 'Casacas', sport: 'Running',
    image: 'https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw21acbe34/images/hi-res/197596543124_1_20240819-mrtPeru.jpg',
    sizes: ['XS','S','M','L','XL','XXL'],
    colors: ['#111','#ff3d00','#0040a8'],
    rating: 4.7, reviews: 189,
    description: 'Casaca cortaviento con capucha plegable, ideal para running en días fríos.',
  },
  {
    id: 35, brand: 'Adidas', name: 'Casaca Tiro 24 Competition', price: 289, originalPrice: null,
    badge: 'NEW', category: 'Ropa', subcategory: 'Casacas', sport: 'Fútbol',
    image: 'https://thumblr.uniid.it/product/345206/d0bdbb897619.jpg?width=3840&format=webp&q=75',
    sizes: ['S','M','L','XL','XXL'],
    colors: ['#111','#fff','#0040a8'],
    rating: 4.6, reviews: 134,
    description: 'Casaca AEROREADY con insertes de malla para máxima ventilación en competencia.',
  },

  // ═══════════════════════════════════════
  // ROPA — SHORTS
  // ═══════════════════════════════════════
  {
    id: 36, brand: 'Nike', name: 'Short Dri-FIT Stride 7"', price: 159, originalPrice: 199,
    badge: 'SALE', category: 'Ropa', subcategory: 'Shorts', sport: 'Running',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-QThOG_xPIZ8j85HHb_pYZ7en77eFmMNmQ&s',
    sizes: ['XS','S','M','L','XL','XXL'],
    colors: ['#111','#0040a8','#ff3d00','#333'],
    rating: 4.6, reviews: 278,
    description: 'Short de running con bolsillo trasero con cremallera y forro interior Dri-FIT.',
  },
  {
    id: 37, brand: 'Adidas', name: 'Short Tiro 24 Training', price: 129, originalPrice: null,
    badge: null, category: 'Ropa', subcategory: 'Shorts', sport: 'Fútbol',
    image: 'https://images.podos.io/b788c1a3962b5bbe03491dcb090be25de2e4e094279d14c2.jpg.png?w=1080&h=auto&project=kitlocker-main-site-364199',
    sizes: ['XS','S','M','L','XL','XXL'],
    colors: ['#111','#0040a8','#1a6b1a'],
    rating: 4.5, reviews: 201,
    description: 'Short AEROREADY con bolsillos laterales y corte regular para entrenamientos.',
  },
  {
    id: 38, brand: 'Puma', name: 'Short teamFINAL Sideline', price: 99, originalPrice: 139,
    badge: 'SALE', category: 'Ropa', subcategory: 'Shorts', sport: 'Fútbol',
    image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/705743/03/mod01/fnd/PNA/fmt/png/Shorts-de-f%C3%BAtbol-teamFINAL-para-hombre',
    sizes: ['S','M','L','XL','XXL'],
    colors: ['#111','#ff3d00'],
    rating: 4.3, reviews: 112,
    description: 'Short dryCELL con cintura elástica y cordón ajustable para mayor comodidad.',
  },
  {
    id: 39, brand: 'Under Armour', name: 'Short Launch 5"', price: 149, originalPrice: null,
    badge: null, category: 'Ropa', subcategory: 'Shorts', sport: 'Running',
    image: 'https://d3fvqmu2193zmz.cloudfront.net/items_2/uid_commerces.1/uid_items_2.FDM0GBIP38XT/1500x1500/66EC38EA30EB9-Short-Training-Hombre-Launch-2-En-1---5-In.webp',
    sizes: ['S','M','L','XL','XXL'],
    colors: ['#111','#ff3d00','#0040a8'],
    rating: 4.5, reviews: 167,
    description: 'Short HeatGear de 5 pulgadas con tecnología anti-olor y bolsillo trasero.',
  },

  // ═══════════════════════════════════════
  // ROPA — PANTALONES
  // ═══════════════════════════════════════
  {
    id: 40, brand: 'Adidas', name: 'Pantalón Tiro 24 Jogger', price: 199, originalPrice: null,
    badge: 'NEW', category: 'Ropa', subcategory: 'Pantalones', sport: 'Fútbol',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/b1c2e2e1bca64453b226071c8a2bc031_9366/Pantalon_de_Entrenamiento_Tiro_24_Negro_IP1952_25_model.jpg',
    sizes: ['XS','S','M','L','XL','XXL'],
    colors: ['#111','#333'],
    rating: 4.7, reviews: 214,
    description: 'Jogger Tiro con 3 rayas icónicas y tela AEROREADY adaptada al movimiento.',
  },
  {
    id: 41, brand: 'Nike', name: 'Pantalón Dri-FIT Academy Pro', price: 219, originalPrice: 269,
    badge: 'SALE', category: 'Ropa', subcategory: 'Pantalones', sport: 'Fútbol',
    image: 'https://static.nike.com/a/images/t_default/6297e422-fb4c-491a-a3e8-b4faf6249ae8/M+NK+TF+ACD+PNT+KPZ+WW.png',
    sizes: ['XS','S','M','L','XL','XXL'],
    colors: ['#111','#0040a8','#ff3d00'],
    rating: 4.6, reviews: 189,
    description: 'Pantalón de entrenamiento Dri-FIT con bolsillos laterales y tobillo elástico.',
  },
  {
    id: 42, brand: 'Puma', name: 'Pantalón teamLIGA Training', price: 169, originalPrice: null,
    badge: null, category: 'Ropa', subcategory: 'Pantalones', sport: 'Fútbol',
    image: 'https://assets.myntassets.com/assets/images/27156944/2024/2/19/ab309b71-387d-434f-8274-eacbae8552d11708339203526-teamLIGA-Training-Mens-Football-Pants-3731708339202964-1.jpg',
    sizes: ['S','M','L','XL','XXL'],
    colors: ['#111','#1a6b1a','#0040a8'],
    rating: 4.4, reviews: 98,
    description: 'Pantalón dryCELL con fit tapered y bolsillos con cremallera.',
  },

  // ═══════════════════════════════════════
  // ACCESORIOS — BALONES
  // ═══════════════════════════════════════
  {
    id: 43, brand: 'Nike', name: 'Balón Premier League Flight', price: 299, originalPrice: null,
    badge: 'NEW', category: 'Accesorios', subcategory: 'Balones', sport: 'Fútbol',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpaRQYlh9-VL3YVtLlFpesEjq4K9GYNEGCzg&s',
    sizes: ['N°4','N°5'],
    colors: ['#fff'],
    rating: 4.9, reviews: 376,
    description: 'Balón oficial Nike Flight con AerowTrac para mayor precisión y trayectoria estable.',
  },
  {
    id: 44, brand: 'Adidas', name: 'Balón Champions League 2024', price: 349, originalPrice: null,
    badge: 'NEW', category: 'Accesorios', subcategory: 'Balones', sport: 'Fútbol',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNsgkf9ghPuuWrf-_ie4VYqYF8VvGdvu2Ng&s',
    sizes: ['N°4','N°5'],
    colors: ['#fff','#0040a8'],
    rating: 4.9, reviews: 289,
    description: 'Balón oficial de la UEFA Champions League con textura 3D y cámara de látex.',
  },
  {
    id: 45, brand: 'Puma', name: 'Balón Orbita LaLiga 2024', price: 279, originalPrice: 329,
    badge: 'SALE', category: 'Accesorios', subcategory: 'Balones', sport: 'Fútbol',
    image: 'https://www.marketingregistrado.com/img/noticias/big/laliga-puma-anunciaron-pelota-temporada-202425.webp',
    sizes: ['N°4','N°5'],
    colors: ['#ff3d00','#111','#fff'],
    rating: 4.7, reviews: 167,
    description: 'Balón oficial de LaLiga con panel de 20 piezas y tratamiento hidrofóbico.',
  },

  // ═══════════════════════════════════════
  // ACCESORIOS — CANILLERAS
  // ═══════════════════════════════════════
  {
    id: 46, brand: 'Nike', name: 'Canilleras Charge 2.0', price: 59, originalPrice: 79,
    badge: 'SALE', category: 'Accesorios', subcategory: 'Canilleras', sport: 'Fútbol',
    image: 'https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw30591519/images/hi-res/196604978880_1_20240129120000-mrtPeru.jpeg',
    sizes: ['S','M','L','XL'],
    colors: ['#111','#fff','#ff3d00'],
    rating: 4.5, reviews: 432,
    description: 'Canilleras ligeras con banda elástica y protección reforzada de alta densidad.',
  },
  {
    id: 47, brand: 'Adidas', name: 'Canilleras Predator Pro', price: 89, originalPrice: null,
    badge: 'NEW', category: 'Accesorios', subcategory: 'Canilleras', sport: 'Fútbol',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/69f8fc976a7e419ea91876fa901a8833_9366/Canilleras_Predator_League_Blanco_IA0855_01_standard.jpg',
    sizes: ['S','M','L','XL'],
    colors: ['#111','#ff3d00'],
    rating: 4.6, reviews: 213,
    description: 'Canilleras con carcasa EVA y espuma interna para máxima protección y comodidad.',
  },
  {
    id: 48, brand: 'Puma', name: 'Canilleras Ultra Light', price: 49, originalPrice: 69,
    badge: 'SALE', category: 'Accesorios', subcategory: 'Canilleras', sport: 'Fútbol',
    image: 'https://d3fvqmu2193zmz.cloudfront.net/items_2/uid_commerces.1/uid_items_2.2025082120153856526/1500x1500/68A88B592F481-Canilleras-Deportiva-Unisex-Ultra-Flex-Sleeve.webp',
    sizes: ['S','M','L','XL'],
    colors: ['#ff3d00','#111'],
    rating: 4.4, reviews: 178,
    description: 'Canilleras ultraligeras de 80g con perfil anatómico y sistema de sujeción incluido.',
  },

  // ═══════════════════════════════════════
  // ACCESORIOS — GUANTES
  // ═══════════════════════════════════════
  {
    id: 49, brand: 'Adidas', name: 'Guantes de Portero Predator', price: 189, originalPrice: 239,
    badge: 'SALE', category: 'Accesorios', subcategory: 'Guantes', sport: 'Fútbol',
    image: 'https://cloud.mideporte.pe/wp-content/uploads/2025/09/guantes-de-arquero-adidas-predator-pro-fingersave_IA0853_1.webp',
    sizes: ['6','7','8','9','10','11'],
    colors: ['#111','#ff3d00'],
    rating: 4.6, reviews: 98,
    description: 'Guantes con espuma Contact y cierres ajustables para máximo agarre bajo lluvia.',
  },
  {
    id: 50, brand: 'Nike', name: 'Guantes Vapor Grip 3', price: 219, originalPrice: null,
    badge: 'NEW', category: 'Accesorios', subcategory: 'Guantes', sport: 'Fútbol',
    image: 'https://solopeloteros.com/11820-home_default/guantes-nike-vapor-grip3-bright-crimson-royal-tint-ref-nihq0304-635.jpg',
    sizes: ['6','7','8','9','10','11'],
    colors: ['#ff3d00','#111'],
    rating: 4.7, reviews: 134,
    description: 'Guantes con palma Grip3 de látex y reborde plano para mayor área de contacto.',
  },
  {
    id: 51, brand: 'Puma', name: 'Guantes Ultra Grip 4 RC', price: 159, originalPrice: 199,
    badge: 'SALE', category: 'Accesorios', subcategory: 'Guantes', sport: 'Fútbol',
    image: 'https://resources.sanborns.com.mx/products/cdn/product-channel/35310/2026/3/12/77454566c1e605264bf173241b6c453f.jpg?scale=500&qlty=75',
    sizes: ['6','7','8','9','10','11'],
    colors: ['#fff','#1a6b1a'],
    rating: 4.5, reviews: 87,
    description: 'Guantes con corte negative y espuma ULTRAGRIP para porteros exigentes.',
  },

  // ═══════════════════════════════════════
  // ACCESORIOS — MEDIAS
  // ═══════════════════════════════════════
  {
    id: 52, brand: 'Adidas', name: 'Medias Alphaskin 3-Pack', price: 89, originalPrice: null,
    badge: null, category: 'Accesorios', subcategory: 'Medias', sport: 'Fútbol',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/32a522154aa94ff6b80caf27009e4690_9366/Medias_a_Media_Pantorrilla_Acolchadas_3_Pares_Negro_IC1310_03_standard.jpg',
    sizes: ['S (35-38)','M (39-42)','L (43-46)'],
    colors: ['#111','#fff','#ff3d00'],
    rating: 4.7, reviews: 561,
    description: 'Pack 3 pares de medias de compresión con zona de amortiguación en planta.',
  },
  {
    id: 53, brand: 'Nike', name: 'Medias Strike Football Crew', price: 69, originalPrice: 89,
    badge: 'SALE', category: 'Accesorios', subcategory: 'Medias', sport: 'Fútbol',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZB4anpI9pH-mkln7BGQQ_WB5SITU1LyKHVg&s',
    sizes: ['S (35-38)','M (39-42)','L (43-46)'],
    colors: ['#111','#fff','#0040a8'],
    rating: 4.5, reviews: 312,
    description: 'Medias de fútbol Dri-FIT con acolchado en planta y punta reforzada.',
  },

  // ═══════════════════════════════════════
  // ACCESORIOS — MOCHILAS
  // ═══════════════════════════════════════
  {
    id: 54, brand: 'Nike', name: 'Mochila Academy Team 2.0', price: 169, originalPrice: null,
    badge: null, category: 'Accesorios', subcategory: 'Mochilas', sport: 'Fútbol',
    image: 'https://soccerpost.com/cdn/shop/products/DV0761-011-PHSYM001_clipped_rev_1.png?v=1673298508&width=1440',
    sizes: ['30L'],
    colors: ['#111','#0040a8','#ff3d00'],
    rating: 4.6, reviews: 213,
    description: 'Mochila 30L con compartimiento para balón, bolsillo húmedo y correas acolchadas.',
  },
  {
    id: 55, brand: 'Adidas', name: 'Mochila Tiro League', price: 149, originalPrice: 189,
    badge: 'SALE', category: 'Accesorios', subcategory: 'Mochilas', sport: 'Fútbol',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/d4830c986d84481391b2a00e6b99578f_9366/Mochila_Tiro_23_League_Azul_IB8646_27_model.jpg',
    sizes: ['25L','30L'],
    colors: ['#111','#0040a8'],
    rating: 4.5, reviews: 178,
    description: 'Mochila AEROREADY con compartimiento principal amplio y bolsillo frontal organizado.',
  },
  {
    id: 56, brand: 'Under Armour', name: 'Mochila Hustle 5.0', price: 199, originalPrice: null,
    badge: 'NEW', category: 'Accesorios', subcategory: 'Mochilas', sport: 'Basketball',
    image: 'https://d3fvqmu2193zmz.cloudfront.net/items_2/uid_commerces.1/uid_items_2.FDL8LEIGTJJ9/1500x1500/65B92EB709DE2-Mochila-Training-Unisex-Adulto-Hustle-Lite.webp',
    sizes: ['29L'],
    colors: ['#111','#8b0000'],
    rating: 4.7, reviews: 234,
    description: 'Mochila con compartimiento para laptop 15", bolsillos laterales para botellas y fondo reforzado.',
  },

  // ═══════════════════════════════════════
  // ACCESORIOS — LENTES
  // ═══════════════════════════════════════
  {
    id: 57, brand: 'Oakley', name: 'Lentes Sutro Lite Sweep', price: 459, originalPrice: null,
    badge: 'NEW', category: 'Accesorios', subcategory: 'Lentes', sport: 'Running',
    image: 'https://bigheadstores.com/cdn/shop/products/OO9465-0139.jpg?v=1662508802',
    sizes: ['Única'],
    colors: ['#111','#c0c0c0','#ff3d00'],
    rating: 4.8, reviews: 134,
    description: 'Lentes deportivos con lente Prizm Road y montura ultraligera O-Matter.',
  },
  {
    id: 58, brand: 'Oakley', name: 'Lentes Radar EV Path', price: 529, originalPrice: 629,
    badge: 'SALE', category: 'Accesorios', subcategory: 'Lentes', sport: 'Running',
    image: 'https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwc73b294e/images/full/10004287_O/2019/10004287_Oakley_Radar_EV_Path.jpg?sw=543&sfrm=png&q=90&bgcolor=F2F2F2',
    sizes: ['Única'],
    colors: ['#111','#0040a8'],
    rating: 4.9, reviews: 98,
    description: 'Lentes con lente intercambiable Prizm y ventilación perimetral para máxima claridad.',
  },

  // ═══════════════════════════════════════
  // ACCESORIOS — CINTILLOS Y LIGAS
  // ═══════════════════════════════════════
  {
    id: 59, brand: 'Under Armour', name: 'Cintillo Run Pivot Lite', price: 39, originalPrice: 59,
    badge: 'SALE', category: 'Accesorios', subcategory: 'Cintillos', sport: 'Running',
    image: 'https://media-ecommerce.sfo3.cdn.digitaloceanspaces.com/media/products/2026/04/shopify_178900be.jpg',
    sizes: ['Única'],
    colors: ['#111','#fff','#ff3d00'],
    rating: 4.3, reviews: 167,
    description: 'Cintillo ArmourDry que absorbe el sudor en entrenamientos intensos al aire libre.',
  },
  {
    id: 60, brand: 'Nike', name: 'Ligas de compresión Nike Pro', price: 49, originalPrice: 69,
    badge: 'SALE', category: 'Accesorios', subcategory: 'Ligas', sport: 'Fútbol',
    image: 'https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwf0107925/images/hi-res/887791336880_1_20240522120000-mrtPeru.jpg',
    sizes: ['Única'],
    colors: ['#111','#fff'],
    rating: 4.4, reviews: 289,
    description: 'Ligas elásticas de silicona para sujetar medias durante todo el partido.',
  },

  // ═══════════════════════════════════════
  // ACCESORIOS — TOBILLERAS
  // ═══════════════════════════════════════
  {
    id: 61, brand: 'Adidas', name: 'Tobilleras Cushioned 3-Pack', price: 69, originalPrice: null,
    badge: null, category: 'Accesorios', subcategory: 'Tobilleras', sport: 'Running',
    image: 'https://media.falabella.com/falabellaPE/19493892_1/w=1500,h=1500,fit=cover',
    sizes: ['S (35-38)','M (39-42)','L (43-46)'],
    colors: ['#fff','#111'],
    rating: 4.5, reviews: 342,
    description: 'Pack de 3 tobilleras con acolchado extra en planta y talón para mayor confort.',
  },
  {
    id: 62, brand: 'Nike', name: 'Tobilleras Everyday Plus 3-Pack', price: 59, originalPrice: 79,
    badge: 'SALE', category: 'Accesorios', subcategory: 'Tobilleras', sport: 'Running',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-w2cxVvDzeKW9YSk9XygxZmM4uwRN1OqHQ&s',
    sizes: ['S (35-38)','M (39-42)','L (43-46)'],
    colors: ['#fff','#111','#0040a8'],
    rating: 4.6, reviews: 278,
    description: 'Pack de 3 tobilleras Dri-FIT con arco de soporte y talón acolchado.',
  },
];

export const filterCategories = ['Todos', 'Calzado', 'Ropa', 'Accesorios', 'Fútbol', 'Running', 'Basketball', 'Nuevos', 'Ofertas'];

export const heroImages = [
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1600&q=85',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&q=85',
];