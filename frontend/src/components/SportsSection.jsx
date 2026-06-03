import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sports } from '../data/storeData';

gsap.registerPlugin(ScrollTrigger);

export default function SportsSection({ onFilterSport }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: i * 0.07,
            scrollTrigger: { trigger: card, start: 'top 88%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleClick = (sportName) => {
    onFilterSport(sportName);
    document.getElementById('tienda')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="sports" ref={sectionRef} id="deportes">
      <p className="section-label">Categorías</p>
      <h2 className="section-title">Elige tu <span>deporte</span></h2>
      <div className="sports__grid">
        {sports.map((sport, i) => (
          <div key={sport.id} className="sport-card" ref={el => cardsRef.current[i] = el}
               onClick={() => handleClick(sport.name)} style={{ cursor: 'pointer' }}>
            <img src={sport.image} alt={sport.name} className="sport-card__img" />
            <div className="sport-card__overlay" />
            <div className="sport-card__content">
              <i className={`${sport.icon} sport-card__icon`} />
              <h3 className="sport-card__title">{sport.name}</h3>
              <p className="sport-card__count">{sport.count}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
