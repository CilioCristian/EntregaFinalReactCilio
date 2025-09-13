import React, { useState, useEffect } from "react";
import CarritoContext from "./CarritoContextObject";

export default function CarritoProvider({ children }) {
  // Estado para guardar los productos del carrito
  // Lo inicializo con lo que haya en localStorage (si hay algo guardado)
  const [carritoItems, setCarritoItems] = useState(() => {
    try {
      const guardado = localStorage.getItem("mi_carrito");
      return guardado ? JSON.parse(guardado) : [];
    } catch {
      return [];
    }
  });

  // Cada vez que cambie el carrito, lo guardo en localStorage
  useEffect(() => {
    try {
      localStorage.setItem("mi_carrito", JSON.stringify(carritoItems));
    } catch (err) {
      console.error("Error guardando carrito en localStorage:", err);
    }
  }, [carritoItems]);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto, cantidad) => {
    setCarritoItems(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        // Si ya existe, solo sumo la cantidad (sin pasar el stock)
        return prev.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: Math.min(item.cantidad + cantidad, item.stock) }
            : item
        );
      }
      // Si no existe, lo agrego con la cantidad indicada (sin pasar stock)
      return [...prev, { ...producto, cantidad: Math.min(cantidad, producto.stock) }];
    });
  };

  // Función para eliminar un producto del carrito
  const eliminarDelCarrito = id =>
    setCarritoItems(prev => prev.filter(item => item.id !== id));

  // Función para vaciar todo el carrito
  const vaciarCarrito = () => setCarritoItems([]);

  // Función que calcula el total de unidades en el carrito
  const obtenerTotalCantidad = () =>
    carritoItems.reduce((total, item) => total + item.cantidad, 0);

  // Función que calcula el total en precio
  const obtenerTotalPrecio = () =>
    carritoItems.reduce((total, item) => total + item.precio * item.cantidad, 0);

  // Función para aumentar en 1 la cantidad de un producto (sin pasar stock)
  const incrementar = (id) => {
    setCarritoItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, cantidad: Math.min(item.cantidad + 1, item.stock) }
          : item
      )
    );
  };

  // Función para disminuir en 1 la cantidad de un producto (no baja de 1)
  const decrementar = (id) => {
    setCarritoItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, cantidad: Math.max(item.cantidad - 1, 1) }
          : item
      )
    );
  };

  // Paso todo lo del carrito por el contexto para que cualquier componente lo use
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