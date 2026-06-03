import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Eye, Plus, Star, X, ChevronRight, ShoppingBag } from 'lucide-react';
import { products, filterCategories } from '../data/storeData';

gsap.registerPlugin(ScrollTrigger);

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[1,2,3,4,5].map(s => (
        <i key={s} className={`fa-${s <= Math.floor(rating) ? 'solid' : s - 0.5 <= rating ? 'solid fa-star-half-stroke' : 'regular'} fa-star`} style={{ color: s <= rating ? '#f5a623' : '#444', fontSize: '0.65rem' }} />
      ))}
      <span className="rating-count">({rating})</span>
    </div>
  );
}

function ProductModal({ product, onClose, onAddToCart, wishlist, onToggleWishlist }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleAdd = () => {
    onAddToCart({ ...product, size: selectedSize, color: selectedColor }, qty);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={18} /></button>
        <div className="modal-grid">
          <div className="modal-img-wrap">
            <img src={product.image} alt={product.name} />
            {product.badge && <span className={`product-card__badge ${product.badge === 'NEW' ? 'new' : 'sale'}`}>{product.badge}</span>}
          </div>
          <div className="modal-info">
            <p className="modal-brand"><i className="fa-solid fa-tag" /> {product.brand}</p>
            <h2 className="modal-name">{product.name}</h2>
            <StarRating rating={product.rating} />
            <p className="modal-reviews">{product.reviews} reseñas</p>
            <div className="modal-price">
              {product.originalPrice && <s>S/. {product.originalPrice}</s>}
              <span>S/. {product.price}</span>
              {product.originalPrice && <span className="discount-badge">-{Math.round((1 - product.price/product.originalPrice)*100)}%</span>}
            </div>
            <p className="modal-desc">{product.description}</p>
            <div className="modal-divider" />

            <p className="modal-label">Talla <span className="modal-label-val">{selectedSize}</span></p>
            <div className="size-grid">
              {product.sizes.map(s => (
                <button key={s} className={`size-btn ${selectedSize === s ? 'active' : ''}`} onClick={() => setSelectedSize(s)}>{s}</button>
              ))}
            </div>

            {product.colors && product.colors.length > 1 && (
              <>
                <p className="modal-label" style={{ marginTop: '1rem' }}>Color</p>
                <div className="color-selector">
                  {product.colors.map(c => (
                    <button key={c} className={`color-swatch ${selectedColor === c ? 'active' : ''}`} style={{ background: c }} onClick={() => setSelectedColor(c)} />
                  ))}
                </div>
              </>
            )}

            <div className="modal-divider" />
            <div className="modal-actions">
              <div className="qty-control-big">
                <button onClick={() => setQty(q => Math.max(1,q-1))}>-</button>
                <span>{qty}</span>
                <button onClick={() => setQty(q => q+1)}>+</button>
              </div>
              <button className="btn-primary modal-add-btn" onClick={handleAdd}>
                <ShoppingBag size={16} />
                Agregar al Carrito
              </button>
              <button
                className={`wishlist-btn-big ${wishlist.includes(product.id) ? 'active' : ''}`}
                onClick={() => onToggleWishlist(product.id)}
              >
                <i className={`fa-${wishlist.includes(product.id) ? 'solid' : 'regular'} fa-heart`} />
              </button>
            </div>
            <p className="modal-shipping">
              <i className="fa-solid fa-truck-fast" style={{ color: '#00c851' }} />
              Envío gratis en Lima · Llega en 24h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection({ onAddToCart, wishlist, onToggleWishlist, onNotify }) {
  const [active, setActive] = useState('Todos');
  const [modal, setModal] = useState(null);
  const [visible, setVisible] = useState(8);
  const sectionRef = useRef(null);

  const filtered = (() => {
    switch(active) {
      case 'Nuevos': return products.filter(p => p.badge === 'NEW');
      case 'Ofertas': return products.filter(p => p.badge === 'SALE' || p.originalPrice);
      case 'Calzado': return products.filter(p => p.category === 'Calzado');
      case 'Ropa': return products.filter(p => p.category === 'Ropa');
      case 'Accesorios': return products.filter(p => p.category === 'Accesorios');
      case 'Fútbol': return products.filter(p => p.sport === 'Fútbol');
      case 'Running': return products.filter(p => p.sport === 'Running');
      case 'Basketball': return products.filter(p => p.sport === 'Basketball');
      default: return products;
    }
  })();

  const shown = filtered.slice(0, visible);

  useEffect(() => { setVisible(8); }, [active]);

  const handleQuickAdd = (e, product) => {
    e.stopPropagation();
    onAddToCart({ ...product, size: product.sizes[0], color: product.colors[0] }, 1);
    onNotify(`${product.name} agregado al carrito`);
  };

  return (
    <section className="products" ref={sectionRef} id="tienda">
      <div className="products__header">
        <div>
          <p className="section-label">Catálogo</p>
          <h2 className="section-title">Productos <span>destacados</span></h2>
        </div>
      </div>

      <div className="products__filters" style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {filterCategories.map(f => (
          <button key={f} className={`filter-btn ${active === f ? 'active' : ''}`} onClick={() => setActive(f)}>{f}</button>
        ))}
      </div>

      <div className="products__grid">
        {shown.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-card__img-wrap" onClick={() => setModal(product)} style={{ cursor: 'pointer' }}>
              <img src={product.image} alt={product.name} className="product-card__img" loading="lazy" />
              {product.badge && (
                <span className={`product-card__badge ${product.badge === 'NEW' ? 'new' : 'sale'}`}>{product.badge}</span>
              )}
              <div className="product-card__actions">
                <button className="product-card__action" aria-label="Favorito" onClick={e => { e.stopPropagation(); onToggleWishlist(product.id); }}>
                  <i className={`fa-${wishlist.includes(product.id) ? 'solid' : 'regular'} fa-heart`} style={{ color: wishlist.includes(product.id) ? 'var(--accent)' : 'inherit' }} />
                </button>
                <button className="product-card__action" aria-label="Ver detalle" onClick={e => { e.stopPropagation(); setModal(product); }}>
                  <Eye size={14} />
                </button>
              </div>
            </div>
            <div className="product-card__info">
              <p className="product-card__brand">{product.brand}</p>
              <h3 className="product-card__name" onClick={() => setModal(product)} style={{ cursor: 'pointer' }}>{product.name}</h3>
              <StarRating rating={product.rating} />
              <div className="product-card__bottom">
                <div className="product-card__price">
                  {product.originalPrice && <s>S/. {product.originalPrice}</s>}
                  S/. {product.price}
                </div>
                <button className="product-card__add" aria-label="Agregar" onClick={e => handleQuickAdd(e, product)}>
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visible < filtered.length && (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn-outline load-more-btn" onClick={() => setVisible(v => v + 8)}>
            <i className="fa-solid fa-arrow-down" />
            Ver más productos ({filtered.length - visible} restantes)
          </button>
        </div>
      )}

      {modal && (
        <ProductModal
          product={modal}
          onClose={() => setModal(null)}
          onAddToCart={(p, qty) => { onAddToCart(p, qty); onNotify(`${p.name} agregado al carrito`); }}
          wishlist={wishlist}
          onToggleWishlist={onToggleWishlist}
        />
      )}
    </section>
  );
}
