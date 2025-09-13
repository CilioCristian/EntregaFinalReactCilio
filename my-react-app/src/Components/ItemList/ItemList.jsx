import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList({ productos }) {
  return (
    <div className="itemlist-container">
      {/* Recorro todos los productos que recibo y los muestro con el componente Item */}
      {productos.map(producto => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
}