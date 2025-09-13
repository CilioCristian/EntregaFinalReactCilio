// src/containers/ItemDetailContainer.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import { obtenerProductoPorId } from "../firebase/firestoreService";
import { useCarrito } from "../context/useCarrito";

export default function ItemDetailContainer() { 
  const { idProducto } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    setCargando(true);
    obtenerProductoPorId(idProducto)
      .then(data => setProducto(data))
      .catch(err => console.error("Error al obtener producto:", err))
      .finally(() => setCargando(false));
  }, [idProducto]);
 
  if (cargando) return <p style={{ padding: 20 }}>Cargando producto...</p>;
  if (!producto) return <p style={{ padding: 20 }}>Producto no encontrado.</p>;

  const handleAgregar = (cantidad) => {
    agregarAlCarrito(producto, cantidad);
  }; 

  return <ItemDetail producto={producto} onAgregar={handleAgregar} />;
}
