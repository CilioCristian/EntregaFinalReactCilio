
import React from 'react';
import '../ItemListContainer/ItemListContainer.css';

const ItemListContainer = ({ saludo }) => {
  return (
    <div className="ItemListContainer">
      <h2>{saludo}</h2>
    </div>
  );
};

export default ItemListContainer;
