import React, { useState, useEffect, useCallback } from 'react';
import './styles/global.css';
import useCursor from './hooks/useCursor';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import BrandsSection from './components/BrandsSection';
import ParallaxSection from './components/ParallaxSection';
import SportsSection from './components/SportsSection';
import ProductsSection from './components/ProductsSection';
import PromoBanner from './components/PromoBanner';
import Features from './components/Features';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import SearchModal from './components/SearchModal';
import Toast from './components/Toast';

function AppLoader({ onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 2000); return () => clearTimeout(t); }, [onDone]);
  return (
    <div className="app-loader">
      <div className="app-loader__logo">SPORT<span>ZONE</span></div>
      <div className="app-loader__bar"><div className="app-loader__fill" /></div>
      <p className="app-loader__text">Cargando experiencia deportiva</p>
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [sportFilter, setSportFilter] = useState(null);
  useCursor();

  // Keyboard shortcut for search
  useEffect(() => {
    const handler = (e) => { if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(true); } };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const addToCart = useCallback((product, qty = 1) => {
    setCart(prev => {
      const key = `${product.id}-${product.size}`;
      const existing = prev.find(i => `${i.id}-${i.size}` === key);
      if (existing) return prev.map(i => `${i.id}-${i.size}` === key ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { ...product, qty }];
    });
  }, []);

  const removeFromCart = useCallback((id, size) => {
    setCart(prev => prev.filter(i => !(i.id === id && i.size === size)));
  }, []);

  const updateQty = useCallback((id, size, qty) => {
    if (qty < 1) { removeFromCart(id, size); return; }
    setCart(prev => prev.map(i => i.id === id && i.size === size ? { ...i, qty } : i));
  }, [removeFromCart]);

  const toggleWishlist = useCallback((id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  }, []);

  const notify = useCallback((msg) => { setToast(msg); }, []);

  const handleFilterSport = useCallback((sport) => {
    setSportFilter(sport);
    // ProductsSection will pick this up
    window.dispatchEvent(new CustomEvent('sportFilter', { detail: sport }));
  }, []);

  const goToOffers = () => {
    window.dispatchEvent(new CustomEvent('sportFilter', { detail: 'Ofertas' }));
    document.getElementById('tienda')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="cursor" />
      <div className="cursor-follower" />

      {!loaded && <AppLoader onDone={() => setLoaded(true)} />}

      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s' }}>
        <Navbar
          cart={cart}
          onRemoveFromCart={removeFromCart}
          onUpdateQty={updateQty}
          onClearCart={() => setCart([])}
          onOpenSearch={() => setSearchOpen(true)}
        />
        <main>
          <Hero onShop={() => document.getElementById('tienda')?.scrollIntoView({ behavior: 'smooth' })} />
          <Ticker />
          <BrandsSection />

          <ParallaxSection
            image="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1400&q=85"
            title="EL ARTE" titleAccent="DEL FÚTBOL"
            subtitle="Botines, camisetas de equipos y accesorios para cada posición."
            overlayColor="rgba(20,40,0,0.65)"
          >
            <button className="btn-primary" style={{ margin: '0 auto' }}
              onClick={() => { handleFilterSport('Fútbol'); document.getElementById('tienda')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <i className="fa-solid fa-futbol" />
              Ver Fútbol
            </button>
          </ParallaxSection>

          <SportsSection onFilterSport={handleFilterSport} />

          <ParallaxSection
            image="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1400&q=85"
            title="CORRE" titleAccent="MÁS RÁPIDO"
            subtitle="Zapatillas, ropa técnica y accesorios para batir tus propios records."
            overlayColor="rgba(0,20,60,0.6)"
          >
            <button className="btn-primary" style={{ margin: '0 auto' }}
              onClick={() => { handleFilterSport('Running'); document.getElementById('tienda')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <i className="fa-solid fa-person-running" />
              Ver Running
            </button>
          </ParallaxSection>

          <ProductsSection
            onAddToCart={addToCart}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
            onNotify={notify}
          />
          <PromoBanner onGoToOffers={goToOffers} />

          <ParallaxSection
            image="https://images.unsplash.com/photo-1546519638405-a4bdd0ad37bd?w=1400&q=85"
            title="DOMINA" titleAccent="LA CANCHA"
            subtitle="Zapatillas y ropa de basketball para jugar al más alto nivel."
            overlayColor="rgba(60,20,0,0.6)"
          >
            <button className="btn-primary" style={{ margin: '0 auto' }}
              onClick={() => { handleFilterSport('Basketball'); document.getElementById('tienda')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <i className="fa-solid fa-basketball" />
              Ver Basketball
            </button>
          </ParallaxSection>

          <Features />
        </main>
        <Footer />
        <Chatbot />
      </div>

      {searchOpen && (
        <SearchModal
          onClose={() => setSearchOpen(false)}
          onAddToCart={addToCart}
          onNotify={notify}
        />
      )}

      {toast && <Toast message={toast} onDone={() => setToast(null)} />}
    </>
  );
}
