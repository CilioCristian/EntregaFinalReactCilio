import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export default function ItemDetail({ producto, onAgregar }) {
  // Estado para saber si ya agregué el producto al carrito
  const [agregado, setAgregado] = useState(false);

  // Función que se llama cuando el usuario agrega el producto
  const handleAgregar = (cantidad) => {
    onAgregar(cantidad);       // Llama a la función que suma al carrito
    setAgregado(true);         // Cambia el estado para ocultar el ItemCount
  };

  return (
    <div className="itemdetail-container">
      {/* Imagen del producto */}
      <img src={producto.imagen} alt={producto.titulo} className="detalle-imagen" />
      <div className="detalle-info">
        {/* Título, descripción y precio */}
        <h2>{producto.titulo}</h2>
        <p>{producto.descripcion}</p>
        <p className="detalle-precio">Precio: ${producto.precio}</p>
        {/* Muestro el stock disponible */}
        <p>Stock disponible: {producto.stock}</p>
        {/* Si no agregué el producto, muestro el contador para elegir cantidad */}
        {!agregado && (
          <ItemCount stock={producto.stock} inicial={1} onAgregar={handleAgregar} />
        )}
        {/* Si ya agregué el producto, muestro un mensaje de confirmación */}
        {agregado && <p style={{ color: "green" }}>Producto agregado al carrito ✅</p>}
      </div>
    </div>
  );
}