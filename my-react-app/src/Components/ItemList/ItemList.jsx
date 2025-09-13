// src/components/ItemList/ItemList.jsx
import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList({ productos }) {
  return (
    <div className="itemlist-container">
      {productos.map(producto => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
}
