import React, { useState } from 'react';

const footerLinks = {
  Tienda: ['Novedades','Ofertas','Más vendidos','Marcas','Deportes','Outlet'],
  Ayuda: ['Mi cuenta','Rastrear pedido','Devoluciones','Guía de tallas','FAQ','Contacto'],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
  };

  const scrollTo = (section) => {
    const map = { 'Novedades': 'tienda', 'Ofertas': 'ofertas', 'Más vendidos': 'tienda', 'Marcas': 'marcas', 'Deportes': 'deportes', 'Outlet': 'ofertas' };
    const id = map[section];
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <h3>SPORT<span>ZONE</span></h3>
          <p>Tu destino deportivo premium en Perú. Las mejores marcas del mundo al alcance de todos.</p>
          <div className="footer__social">
            {[
              { icon: 'fa-brands fa-instagram', href: 'https://instagram.com', label: 'Instagram' },
              { icon: 'fa-brands fa-tiktok', href: 'https://tiktok.com', label: 'TikTok' },
              { icon: 'fa-brands fa-facebook-f', href: 'https://facebook.com', label: 'Facebook' },
              { icon: 'fa-brands fa-x-twitter', href: 'https://twitter.com', label: 'Twitter' },
              { icon: 'fa-brands fa-youtube', href: 'https://youtube.com', label: 'YouTube' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={s.label}>
                <i className={s.icon} />
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="newsletter-wrap">
            <p className="newsletter-label"><i className="fa-solid fa-envelope" /> Suscríbete y obtén 10% OFF</p>
            {subscribed ? (
              <p className="newsletter-thanks"><i className="fa-solid fa-circle-check" /> ¡Gracias! Revisa tu correo.</p>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input type="email" placeholder="tu@correo.com" value={email} onChange={e => setEmail(e.target.value)} className="newsletter-input" required />
                <button type="submit" className="newsletter-btn"><i className="fa-solid fa-paper-plane" /></button>
              </form>
            )}
          </div>
        </div>

        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section} className="footer__col">
            <h4>{section}</h4>
            <ul>
              {links.map(link => (
                <li key={link}>
                  <button className="footer-link-btn" onClick={() => scrollTo(link)}>
                    <i className="fa-solid fa-chevron-right" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__col">
          <h4>Contacto</h4>
          <ul>
            <li>
              <a href="https://maps.google.com/?q=Av+Javier+Prado+Este+1234+San+Isidro+Lima" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-location-dot" />
                Av. Javier Prado Este 1234, San Isidro
              </a>
            </li>
            <li>
              <a href="https://wa.me/51999888777" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp" />
                +51 999 888 777
              </a>
            </li>
            <li>
              <a href="mailto:hola@sportzone.pe">
                <i className="fa-solid fa-envelope" />
                hola@sportzone.pe
              </a>
            </li>
            <li>
              <span>
                <i className="fa-solid fa-clock" />
                Lun–Sáb 9am–9pm
              </span>
            </li>
          </ul>
          {/* Payment icons */}
          <div className="footer__payments">
            <p className="payment-label">Métodos de pago</p>
            <div className="payment-icons">
              {['fa-brands fa-cc-visa','fa-brands fa-cc-mastercard','fa-brands fa-cc-amex','fa-brands fa-paypal'].map(ic => (
                <i key={ic} className={ic} style={{ fontSize: '1.8rem', color: 'var(--gray-3)' }} />
              ))}
              <span className="yape-badge">YAPE</span>
              <span className="plin-badge">PLIN</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 SportZone. Todos los derechos reservados.</p>
        <div className="footer__bottom-links">
          <button className="footer-link-btn" onClick={() => alert('Política de Privacidad — SportZone')}>Privacidad</button>
          <button className="footer-link-btn" onClick={() => alert('Términos y Condiciones — SportZone')}>Términos</button>
          <button className="footer-link-btn" onClick={() => alert('Política de Cookies — SportZone')}>Cookies</button>
        </div>
      </div>
    </footer>
  );
}
