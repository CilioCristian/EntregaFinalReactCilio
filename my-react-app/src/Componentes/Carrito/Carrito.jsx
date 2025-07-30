
import React from 'react';
import '../Carrito/Carrito.css';

const Carrito = () => {
  const cantidad = 2;

  return (
    <div className="carrito">
      🛒
      <span>{cantidad}</span>
    </div>
  );
};

export default Carrito;

