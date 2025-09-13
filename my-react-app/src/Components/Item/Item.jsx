// src/components/Item/Item.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ producto }) {
  return (
    <div className="item-card">
      <img src={producto.imagen} alt={producto.titulo} className="item-imagen" />
      <h3 className="item-titulo">{producto.titulo}</h3>
      <p className="item-precio">${producto.precio}</p>
      <Link to={`/item/${producto.id}`} className="item-detalle">
        Comprar
      </Link>
    </div>
  );
}
