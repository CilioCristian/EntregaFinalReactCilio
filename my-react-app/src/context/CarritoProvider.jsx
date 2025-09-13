// src/context/CarritoProvider.jsx
import React, { useState, useEffect } from "react";
import CarritoContext from "./CarritoContextObject";

export default function CarritoProvider({ children }) {
  const [carritoItems, setCarritoItems] = useState(() => {
    try {
      const guardado = localStorage.getItem("mi_carrito");
      return guardado ? JSON.parse(guardado) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("mi_carrito", JSON.stringify(carritoItems));
    } catch (err) {
      console.error("Error guardando carrito en localStorage:", err);
    }
  }, [carritoItems]);

  const agregarAlCarrito = (producto, cantidad) => {
    setCarritoItems(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        return prev.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: Math.min(item.cantidad + cantidad, item.stock) }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: Math.min(cantidad, producto.stock) }];
    });
  };

  const eliminarDelCarrito = id =>
    setCarritoItems(prev => prev.filter(item => item.id !== id));

  const vaciarCarrito = () => setCarritoItems([]);

  // Función que calcula el total de unidades
  const obtenerTotalCantidad = () =>
    carritoItems.reduce((total, item) => total + item.cantidad, 0);

  // Función que calcula el total en precio
  const obtenerTotalPrecio = () =>
    carritoItems.reduce((total, item) => total + item.precio * item.cantidad, 0);
// Incrementar cantidad de un producto
const incrementar = (id) => {
  setCarritoItems(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, cantidad: Math.min(item.cantidad + 1, item.stock) }
        : item
    )
  );
};

// Decrementar cantidad de un producto
const decrementar = (id) => {
  setCarritoItems(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, cantidad: Math.max(item.cantidad - 1, 1) }
        : item
    )
  );
};
  return (
    <CarritoContext.Provider
      value={{
        carritoItems,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        obtenerTotalCantidad,
        obtenerTotalPrecio,
        incrementar,
        decrementar
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}