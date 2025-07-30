
import React from 'react';
import '../CartWidget/CartWidget.css';

const CartWidget = () => {
  const cantidad = 2;

  return (
    <div className="CartWidget">
      🛒
      <span>{cantidad}</span>
    </div>
  );
};

export default CartWidget;

