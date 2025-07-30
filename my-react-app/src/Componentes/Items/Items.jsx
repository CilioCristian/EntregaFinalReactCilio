
import React from 'react';
import '../Items/Items.css';

const Items = ({ saludo }) => {
  return (
    <div className="items-container">
      <h2>{saludo}</h2>
    </div>
  );
};

export default Items;
