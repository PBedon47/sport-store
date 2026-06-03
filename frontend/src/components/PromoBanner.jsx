import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PromoBanner({ onGoToOffers }) {
  const bannerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.promo-banner__text', { x: -60, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: bannerRef.current, start: 'top 80%' } });
      gsap.from('.promo-banner img', { x: 60, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: bannerRef.current, start: 'top 80%' } });
    }, bannerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="promo-banner" ref={bannerRef} id="ofertas">
      <div className="promo-banner__text">
        <h2>HASTA<br />30% OFF<br />EN RUNNING</h2>
        <p>Liquidación de temporada en las mejores zapatillas para correr. Nike, Adidas, New Balance y más con descuentos exclusivos.</p>
        <button className="btn-outline" style={{ display: 'inline-flex', border: '2px solid rgba(255,255,255,0.6)' }} onClick={onGoToOffers}>
          <i className="fa-solid fa-tag" />
          Ver Ofertas
          <ChevronRight size={16} />
        </button>
      </div>
      <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" alt="Oferta running" />
    </div>
  );
}
