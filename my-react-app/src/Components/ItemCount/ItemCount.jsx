import React, { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ stock, inicial = 1, onAgregar }) {
  // Estado para manejar cuántos productos se van a agregar
  const [cantidad, setCantidad] = useState(inicial);

  // Función para sumar 1, sin pasarse del stock disponible
  const incrementar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  // Función para restar 1, sin bajar de 1
  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div className="itemcount-container">
      <div className="contador">
        {/* Botón para restar */}
        <button onClick={decrementar} disabled={cantidad <= 1}>-</button>
        {/* Muestro la cantidad actual */}
        <span>{cantidad}</span>
        {/* Botón para sumar */}
        <button onClick={incrementar} disabled={cantidad >= stock}>+</button>
      </div>
      {/* Botón para agregar al carrito */}
      <button
        className="agregar-btn"
        onClick={() => onAgregar(cantidad)}
        disabled={stock === 0} // si no hay stock, no se puede agregar
      >
        {/* Cambio el texto según si hay stock o no */}
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>
  );
}