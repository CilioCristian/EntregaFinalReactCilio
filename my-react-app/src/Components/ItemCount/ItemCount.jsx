// src/components/ItemCount/ItemCount.jsx
import React, { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ stock, inicial = 1, onAgregar }) {
  const [cantidad, setCantidad] = useState(inicial);

  const incrementar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div className="itemcount-container">
      <div className="contador">
        <button onClick={decrementar} disabled={cantidad <= 1}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementar} disabled={cantidad >= stock}>+</button>
      </div>
      <button
        className="agregar-btn"
        onClick={() => onAgregar(cantidad)}
        disabled={stock === 0}
      >
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>
  );
}
