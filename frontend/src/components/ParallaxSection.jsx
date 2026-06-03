import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSection({
  image,
  title,
  titleAccent,
  subtitle,
  overlayColor = 'rgba(0,0,0,0.55)',
  children,
}) {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax — moves slower than scroll
      gsap.fromTo(
        imgRef.current,
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Image scale reveal on enter
      gsap.fromTo(
        imgRef.current,
        { scale: 1.1 },
        {
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Content fade in
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="parallax-section" ref={sectionRef}>
      <img
        ref={imgRef}
        src={image}
        alt={title}
        className="parallax-section__bg"
      />
      <div
        className="parallax-section__overlay"
        style={{
          background: `linear-gradient(to bottom, ${overlayColor} 0%, rgba(0,0,0,0.7) 100%)`,
        }}
      />
      <div className="parallax-section__content" ref={contentRef}>
        <h2>
          {title} <em>{titleAccent}</em>
        </h2>
        {subtitle && <p>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
