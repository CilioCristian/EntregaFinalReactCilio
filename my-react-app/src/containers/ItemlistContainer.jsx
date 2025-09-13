import React, { useEffect, useState } from "react";
import ItemList from "../Components/ItemList/ItemList";
import { obtenerProductos } from "../firebase/firestoreService";
import "./ItemListContainer.css";

export default function ItemListContainer() {
  // Estado para guardar todos los productos
  const [productos, setProductos] = useState([]);
  // Estado para saber si todavía estoy cargando los productos
  const [cargando, setCargando] = useState(true);

  // Al iniciar el componente, traigo todos los productos de Firestore
  useEffect(() => {
    setCargando(true); // mientras carga, muestro cargando
    obtenerProductos()
      .then(data => setProductos(data)) // guardo los productos en el estado
      .catch(err => console.error("Error al obtener productos:", err)) // si falla, muestro error
      .finally(() => setCargando(false)); // dejo de mostrar cargando
  }, []);

  // Mensaje mientras carga
  if (cargando) return <p style={{ padding: 20 }}>Cargando productos...</p>;
  // Mensaje si no hay productos
  if (productos.length === 0) return <p style={{ padding: 20 }}>No hay productos disponibles.</p>;

  // Muestro la lista de productos con el componente ItemList
  return <ItemList productos={productos} />;
}