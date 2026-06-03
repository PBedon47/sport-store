import React from 'react';
import { Truck, RotateCcw, Shield, Headphones } from 'lucide-react';

const features = [
  {
    icon: <Truck size={22} />,
    faIcon: 'fa-solid fa-truck-fast',
    title: 'Envío Rápido',
    desc: 'Lima 24 horas, provincias 3-5 días. Gratis en compras desde S/. 299.',
  },
  {
    faIcon: 'fa-solid fa-rotate-left',
    title: 'Devoluciones 30 días',
    desc: 'Cambios y devoluciones sin complicaciones. Proceso 100% online.',
  },
  {
    faIcon: 'fa-solid fa-shield-halved',
    title: 'Compra Segura',
    desc: 'Todos tus pagos protegidos con cifrado SSL. 100% garantizado.',
  },
  {
    faIcon: 'fa-solid fa-headset',
    title: 'Soporte 24/7',
    desc: 'Whatsapp, chat y correo. Siempre disponibles para ayudarte.',
  },
];

export default function Features() {
  return (
    <div className="features">
      {features.map((f, i) => (
        <div key={i} className="feature-item">
          <div className="feature-item__icon">
            <i className={f.faIcon}></i>
          </div>
          <div>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
