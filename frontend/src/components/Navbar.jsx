import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Search, User, X, ChevronRight, Trash2, Plus, Minus } from 'lucide-react';

export default function Navbar({ cart, onRemoveFromCart, onUpdateQty, onClearCart, onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const cartRef = useRef(null);
  const userRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) setCartOpen(false);
      if (userRef.current && !userRef.current.contains(e.target)) setUserOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Tienda', href: '#tienda' },
    { label: 'Marcas', href: '#marcas' },
    { label: 'Deportes', href: '#deportes' },
    { label: 'Ofertas', href: '#ofertas' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#inicio" className="navbar__logo">
        <i className="fa-solid fa-bolt" />
        SPORT<span>ZONE</span>
      </a>

      <ul className="navbar__nav">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a href={href} onClick={() => {}}>{label}</a>
          </li>
        ))}
      </ul>

      <div className="navbar__actions">
        {/* Search */}
        <button aria-label="Buscar" onClick={onOpenSearch} className="nav-icon-btn">
          <Search size={18} />
        </button>

        {/* User dropdown */}
        <div ref={userRef} style={{ position: 'relative' }}>
          <button aria-label="Cuenta" className="nav-icon-btn" onClick={() => { setUserOpen(o => !o); setCartOpen(false); }}>
            <User size={18} />
          </button>
          {userOpen && (
            <div className="dropdown-panel user-panel">
              <div className="dropdown-header">
                <div className="user-avatar-big"><i className="fa-solid fa-user" /></div>
                <div>
                  <p className="dropdown-title">Mi Cuenta</p>
                  <p className="dropdown-sub">Inicia sesión para más beneficios</p>
                </div>
              </div>
              <div className="dropdown-divider" />
              {[
                { icon: 'fa-solid fa-right-to-bracket', label: 'Iniciar Sesión' },
                { icon: 'fa-solid fa-user-plus', label: 'Crear Cuenta' },
                { icon: 'fa-solid fa-box', label: 'Mis Pedidos' },
                { icon: 'fa-solid fa-heart', label: 'Lista de Deseos' },
                { icon: 'fa-solid fa-rotate-left', label: 'Devoluciones' },
              ].map(item => (
                <button key={item.label} className="dropdown-item" onClick={() => setUserOpen(false)}>
                  <i className={item.icon} />
                  {item.label}
                  <ChevronRight size={13} style={{ marginLeft: 'auto', opacity: 0.4 }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Cart dropdown */}
        <div ref={cartRef} style={{ position: 'relative' }}>
          <button aria-label="Carrito" className="nav-icon-btn" onClick={() => { setCartOpen(o => !o); setUserOpen(false); }}>
            <ShoppingBag size={18} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          {cartOpen && (
            <div className="dropdown-panel cart-panel">
              <div className="dropdown-header">
                <p className="dropdown-title">
                  <i className="fa-solid fa-bag-shopping" style={{ color: 'var(--accent)', marginRight: 8 }} />
                  Mi Carrito
                </p>
                {cart.length > 0 && (
                  <button className="clear-cart-btn" onClick={onClearCart}>
                    <Trash2 size={13} /> Vaciar
                  </button>
                )}
              </div>
              <div className="dropdown-divider" />
              {cart.length === 0 ? (
                <div className="cart-empty">
                  <i className="fa-solid fa-bag-shopping" style={{ fontSize: '2.5rem', opacity: 0.2 }} />
                  <p>Tu carrito está vacío</p>
                  <button className="btn-primary btn-sm" onClick={() => { setCartOpen(false); document.getElementById('tienda')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    Ver Productos
                  </button>
                </div>
              ) : (
                <>
                  <div className="cart-items">
                    {cart.map(item => (
                      <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-img" />
                        <div className="cart-item-info">
                          <p className="cart-item-brand">{item.brand}</p>
                          <p className="cart-item-name">{item.name}</p>
                          <p className="cart-item-size">Talla: {item.size} · {item.color ? <span className="cart-color-dot" style={{ background: item.color }} /> : null}</p>
                          <div className="cart-item-bottom">
                            <div className="qty-control">
                              <button onClick={() => onUpdateQty(item.id, item.size, item.qty - 1)}><Minus size={11} /></button>
                              <span>{item.qty}</span>
                              <button onClick={() => onUpdateQty(item.id, item.size, item.qty + 1)}><Plus size={11} /></button>
                            </div>
                            <span className="cart-item-price">S/. {(item.price * item.qty).toFixed(0)}</span>
                          </div>
                        </div>
                        <button className="cart-item-remove" onClick={() => onRemoveFromCart(item.id, item.size)}>
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="cart-footer">
                    <div className="cart-total">
                      <span>Total</span>
                      <span>S/. {cartTotal.toFixed(0)}</span>
                    </div>
                    <button className="btn-primary btn-full" onClick={() => { setCartOpen(false); alert('¡Función de checkout próximamente! 🛒'); }}>
                      <i className="fa-solid fa-lock" />
                      Ir a Pagar
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
