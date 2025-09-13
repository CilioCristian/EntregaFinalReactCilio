// src/containers/ItemListContainer.jsx
import React, { useEffect, useState } from "react";
import ItemList from "../Components/ItemList/ItemList";
import { obtenerProductos } from "../firebase/firestoreService";
import "./ItemListContainer.css";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);
    obtenerProductos()
      .then(data => setProductos(data))
      .catch(err => console.error("Error al obtener productos:", err))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p style={{ padding: 20 }}>Cargando productos...</p>;
  if (productos.length === 0) return <p style={{ padding: 20 }}>No hay productos disponibles.</p>;

  return <ItemList productos={productos} />;
}
