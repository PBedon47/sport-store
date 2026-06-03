import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero({ onShop }) {
  const bgRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const subtitleRef = useRef(null);
  const ctasRef = useRef(null);

  useEffect(() => {
    const onScroll = () => { if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`; };
    window.addEventListener('scroll', onScroll, { passive: true });
    const tl = gsap.timeline({ delay: 2 });
    tl.to([line1Ref.current, line2Ref.current, line3Ref.current], { y: '0%', stagger: 0.12, duration: 0.9, ease: 'power4.out' })
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .to(ctasRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4');
    gsap.set(subtitleRef.current, { y: 20 });
    gsap.set(ctasRef.current, { y: 20 });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg">
        <img ref={bgRef} src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&q=85" alt="Hero" className="hero__bg-image" />
      </div>
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__eyebrow"><i className="fa-solid fa-bolt" /> Nueva temporada 2026</p>
        <h1 className="hero__title">
          <span ref={line1Ref} className="hero__title-line">JUEGA</span>
          <span ref={line2Ref} className="hero__title-line accent">SIN</span>
          <span ref={line3Ref} className="hero__title-line">LÍMITES</span>
        </h1>
        <p ref={subtitleRef} className="hero__subtitle">
          Equípate con lo mejor del deporte. Zapatillas, camisetas de equipos, canilleras, sudaderas y más de Nike, Adidas, Puma y más.
        </p>
        <div ref={ctasRef} className="hero__ctas">
          <button className="btn-primary" onClick={onShop}>
            <i className="fa-solid fa-bag-shopping" />
            Ver Colección
            <ChevronRight size={16} />
          </button>
          <button className="btn-outline" onClick={() => document.getElementById('deportes')?.scrollIntoView({ behavior: 'smooth' })}>
            <i className="fa-solid fa-futbol" />
            Por Deporte
          </button>
        </div>
      </div>
      <div className="hero__scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
