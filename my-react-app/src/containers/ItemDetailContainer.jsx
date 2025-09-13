import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import { obtenerProductoPorId } from "../firebase/firestoreService";
import { useCarrito } from "../context/useCarrito";

export default function ItemDetailContainer() { 
  // Tomo el id del producto de la URL
  const { idProducto } = useParams();
  // Estado para guardar el producto que voy a mostrar
  const [producto, setProducto] = useState(null);
  // Estado para saber si todavía estoy cargando el producto
  const [cargando, setCargando] = useState(true);

  // Función para agregar productos al carrito
  const { agregarAlCarrito } = useCarrito();

  // Cada vez que cambie el id del producto, traigo los datos desde Firestore
  useEffect(() => {
    setCargando(true); // mientras tanto muestro cargando
    obtenerProductoPorId(idProducto)
      .then(data => setProducto(data)) // guardo el producto en el estado
      .catch(err => console.error("Error al obtener producto:", err)) // muestro error si falla
      .finally(() => setCargando(false)); // dejo de mostrar cargando
  }, [idProducto]);
 
  // Mensaje mientras carga
  if (cargando) return <p style={{ padding: 20 }}>Cargando producto...</p>;
  // Mensaje si no se encuentra el producto
  if (!producto) return <p style={{ padding: 20 }}>Producto no encontrado.</p>;

  // Función que pasa la cantidad al carrito
  const handleAgregar = (cantidad) => {
    agregarAlCarrito(producto, cantidad);
  }; 

  // Muestro el detalle del producto con la opción de agregar al carrito
  return <ItemDetail producto={producto} onAgregar={handleAgregar} />;
}