import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { brands } from '../data/storeData';

gsap.registerPlugin(ScrollTrigger);

export default function BrandsSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="brands" ref={sectionRef} id="marcas">
      <p className="section-label">Nuestras marcas</p>
      <h2 className="section-title">
        Las mejores <span>marcas</span> del mundo
      </h2>
      <div className="brands__grid">
        {brands.map((brand, i) => (
          <div
            key={brand.id}
            className="brand-card"
            ref={el => (cardsRef.current[i] = el)}
          >
            <img src={brand.logo} alt={brand.name} />
            <span>{brand.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
