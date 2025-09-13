import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Components/ItemList/ItemList";
import { obtenerProductos } from "../firebase/firestoreService";
import "./ItemListContainer.css";

export default function ItemListContainer() {
  const { tipo } = useParams(); // 'claro' o 'oscuro' o undefined
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);
    obtenerProductos()
      .then(data => {
        // Filtramos solo si tipo existe
        const filtrados = tipo
          ? data.filter(prod => prod.tipoColor?.toLowerCase() === tipo.toLowerCase())
          : data;
        setProductos(filtrados);
      })
      .catch(err => console.error("Error al obtener productos:", err))
      .finally(() => setCargando(false));
  }, [tipo]);

  if (cargando) return <p style={{ padding: 20 }}>Cargando productos...</p>;
  if (productos.length === 0) return <p style={{ padding: 20 }}>No hay productos disponibles.</p>;

  return <ItemList productos={productos} />;
}