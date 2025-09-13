// src/components/ItemDetail/ItemDetail.jsx
import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export default function ItemDetail({ producto, onAgregar }) {
  const [agregado, setAgregado] = useState(false);

  const handleAgregar = (cantidad) => {
    onAgregar(cantidad);
    setAgregado(true); // ocultar ItemCount
  };

  return (
    <div className="itemdetail-container">
      <img src={producto.imagen} alt={producto.titulo} className="detalle-imagen" />
      <div className="detalle-info">
        <h2>{producto.titulo}</h2>
        <p>{producto.descripcion}</p>
        <p className="detalle-precio">Precio: ${producto.precio}</p>
        <p>Stock disponible: {producto.stock}</p>
        {!agregado && (
          <ItemCount stock={producto.stock} inicial={1} onAgregar={handleAgregar} />
        )}
        {agregado && <p style={{ color: "green" }}>Producto agregado al carrito ✅</p>}
      </div>
    </div>
  );
}
