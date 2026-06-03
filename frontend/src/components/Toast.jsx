import React, { useEffect } from 'react';

export default function Toast({ message, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3000);
    return () => clearTimeout(t);
  }, [message, onDone]);

  return (
    <div className="toast">
      <i className="fa-solid fa-circle-check" style={{ color: '#00c851' }} />
      {message}
    </div>
  );
}
