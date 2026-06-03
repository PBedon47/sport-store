import React, { useState, useRef, useEffect } from 'react';
import { X, Minimize2, Send, MessageCircle } from 'lucide-react';
import { sendMessageToAzure } from '../services/azureChatbot';

const WELCOME_MSG = {
  id: 1,
  role: 'bot',
  text: '¡Hola! Soy **SportBot**, el asistente virtual de SportZone con IA de Azure. ¿En qué puedo ayudarte hoy?',
  time: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' }),
};

const SUGGESTIONS = [
  'Ver ofertas',
  'Zapatillas running',
  'Botines fútbol',
  'Guía de tallas',
  'Rastrear pedido',
];

function formatText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n{3,}/g, '\n\n')                          // máx 2 saltos seguidos
    .replace(/(\d+)\.\s*•/g, '<br/><strong>$1.</strong> •') // "1. •" en misma línea
    .replace(/(\d+)\.\s*\n/g, '<br/><strong>$1.</strong> ') // "1.\n" sin bullet
    .replace(/\n•/g, '<br/>•')                           // bullets en nueva línea
    .replace(/ •/g, '<br/>•')                            // bullets inline → nueva línea
    .replace(/^(<br\/>)+/, '');                          // elimina saltos al inicio
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MSG]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const msgEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;
    const userText = text.trim();
    setInput('');

    const userMsg = {
      id: Date.now(),
      role: 'user',
      text: userText,
      time: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    try {
      const response = await sendMessageToAzure(
        userText,
        history
      );

      console.log(response);
      const reply = response.reply;
      const recommendedProducts = response.products;
      const botMsg = {
        id: Date.now() + 1,
        role: 'bot',
        text: reply,
        products: recommendedProducts,
        time: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, botMsg]);
      setHistory(prev => [
        ...prev,
        { role: 'user', content: userText },
        { role: 'assistant', content: reply },
      ]);
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'bot',
          text: 'Disculpa, tuve un problema de conexión. Por favor intenta de nuevo.',
          time: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      <button
        className="chatbot-trigger"
        onClick={() => setOpen(o => !o)}
        aria-label="Abrir chat"
        style={{ cursor: 'pointer' }}
      >
        <span className="pulse" />
        {open
          ? <X size={22} />
          : <MessageCircle size={22} />
        }
      </button>

      {/* Chat window */}
      <div className={`chatbot-window ${open ? 'open' : ''}`} role="dialog" aria-label="Chat SportBot">
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-avatar">
            <i className="fa-solid fa-robot"></i>
          </div>
          <div className="chatbot-header-info">
            <h4>SportBot</h4>
            <p>Asistente IA · En línea</p>
          </div>
          <div className="chatbot-header-actions">
            <button onClick={() => setOpen(false)} aria-label="Minimizar" style={{ cursor: 'pointer' }}>
              <Minimize2 size={13} />
            </button>
            <button onClick={() => setOpen(false)} aria-label="Cerrar" style={{ cursor: 'pointer' }}>
              <X size={13} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map(msg => (
            <div key={msg.id} className={`chat-msg ${msg.role === 'user' ? 'user' : ''}`}>
              <div className="chat-msg-avatar">
                <i className={msg.role === 'bot' ? 'fa-solid fa-robot' : 'fa-solid fa-user'}></i>
              </div>
              <div>
                <div
                  className="chat-msg-bubble"
                  style={{ whiteSpace: 'pre-line', lineHeight: '1.7', fontSize: '0.88rem' }}
                  dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
                />

                {msg.products?.length > 0 && (
                <div className="chat-products">
                  {msg.products.map(product => (
                    <div
                      key={product.id}
                      className="chat-product-card"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="chat-product-image"
                      />

                      <h4>{product.name}</h4>

                      <p>{product.brand}</p>

                      <strong> S/. {product.price} </strong>
                    </div>
                  ))}
                </div>
              )}
               {/* Hora */}
                <div className="chat-msg-time">{msg.time}</div>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="chat-msg">
              <div className="chat-msg-avatar">
                <i className="fa-solid fa-robot"></i>
              </div>
              <div className="typing-indicator">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          )}
          <div ref={msgEndRef} />
        </div>

        {/* Quick suggestions */}
        {messages.length <= 2 && !loading && (
          <div className="chatbot-suggestions">
            {SUGGESTIONS.map(s => (
              <button
                key={s}
                className="suggestion-chip"
                onClick={() => sendMessage(s)}
                style={{ cursor: 'pointer' }}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Azure powered label */}
        <div className="chatbot-powered">
          <i className="fa-brands fa-microsoft"></i>
          Powered by Azure OpenAI
        </div>

        {/* Input area */}
       <div className="chatbot-input-area">
          <input
            id="chat-input"
            name="message"
            ref={inputRef}
            type="text"
            className="chatbot-input"
            placeholder="Escribe tu pregunta..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
          />
          <button
            className="chatbot-send"
            onClick={() => sendMessage(input)}
            disabled={loading || !input.trim()}
            aria-label="Enviar"
            style={{ cursor: 'pointer', opacity: (!input.trim() || loading) ? 0.5 : 1 }}
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
