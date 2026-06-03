import React from 'react';

const items = [
  { text: 'Envío gratis en compras +S/.299', icon: 'fa-solid fa-truck-fast' },
  { text: 'Nike Air Max — Nueva colección', icon: 'fa-solid fa-star' },
  { text: 'Adidas Ultraboost 24 disponible', icon: 'fa-solid fa-bolt' },
  { text: 'Hasta 30% OFF en running', icon: 'fa-solid fa-tag' },
  { text: 'Cambios y devoluciones 30 días', icon: 'fa-solid fa-rotate-left' },
  { text: 'Puma x Scudería Ferrari — Colección', icon: 'fa-solid fa-flag-checkered' },
  { text: 'Pago con Yape, Plin y tarjeta', icon: 'fa-solid fa-credit-card' },
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker__track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker__item">
            <i className={item.icon}></i>
            {item.text}
            <i className="fa-solid fa-circle" style={{ fontSize: '4px', opacity: 0.5 }}></i>
          </span>
        ))}
      </div>
    </div>
  );
}
