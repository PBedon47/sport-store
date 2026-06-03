import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { products } from '../data/storeData';

export default function SearchModal({ onClose, onAddToCart, onNotify }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const results = query.length > 1
    ? products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.brand.toLowerCase().includes(query.toLowerCase()) ||
        p.sport.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  const popular = ['Nike', 'Adidas', 'Running', 'Fútbol', 'Canilleras', 'Sudaderas', 'Basketball'];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-input-wrap">
          <Search size={20} className="search-icon" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar productos, marcas, deportes..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="search-input-big"
          />
          <button onClick={onClose} className="search-close"><X size={20} /></button>
        </div>

        {query.length <= 1 && (
          <div className="search-popular">
            <p className="search-label">Búsquedas populares</p>
            <div className="search-chips">
              {popular.map(t => (
                <button key={t} className="suggestion-chip" onClick={() => setQuery(t)}>{t}</button>
              ))}
            </div>
          </div>
        )}

        {results.length > 0 && (
          <div className="search-results">
            <p className="search-label">{results.length} resultados para "{query}"</p>
            {results.map(p => (
              <div key={p.id} className="search-result-item">
                <img src={p.image} alt={p.name} className="search-result-img" />
                <div className="search-result-info">
                  <p className="search-result-brand">{p.brand}</p>
                  <p className="search-result-name">{p.name}</p>
                  <p className="search-result-cat">{p.category} · {p.sport}</p>
                </div>
                <div className="search-result-right">
                  <p className="search-result-price">S/. {p.price}</p>
                  <button className="btn-primary btn-sm" onClick={() => {
                    onAddToCart({ ...p, size: p.sizes[0], color: p.colors[0] }, 1);
                    onNotify(`${p.name} agregado`);
                    onClose();
                  }}>
                    Agregar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {query.length > 1 && results.length === 0 && (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--gray-3)' }}>
            <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '2rem', opacity: 0.3, marginBottom: '1rem', display: 'block' }} />
            <p>No encontramos resultados para "{query}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
