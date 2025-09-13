import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ producto }) {
  return (
    <div className="item-card">
      {/* Muestro la imagen del producto */}
      <img src={producto.imagen} alt={producto.titulo} className="item-imagen" />
      {/* Muestro el título del producto */}
      <h3 className="item-titulo">{producto.titulo}</h3>
      {/* Muestro el precio */}
      <p className="item-precio">${producto.precio}</p>
      {/* Link que lleva al detalle del producto para poder comprarlo */}
      <Link to={`/item/${producto.id}`} className="item-detalle">
        Comprar
      </Link>
    </div>
  );
}