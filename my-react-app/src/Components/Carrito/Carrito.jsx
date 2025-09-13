// src/components/Carrito/Carrito.jsx
import React from "react";
import { useCarrito } from "../../context/useCarrito";
import { Link } from "react-router-dom";
import "./Carrito.css";

export default function Carrito() {
  const { carritoItems, eliminarDelCarrito, vaciarCarrito, obtenerTotalPrecio, incrementar, decrementar} = useCarrito();

  if (carritoItems.length === 0)
    return (
      <div className="carrito-container">
        <h2>Tu carrito está vacío 🛒</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );

  return (
    <div className="carrito-container">
      <h2>Mi Carrito</h2>
      <table className="carrito-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Subtotal</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {carritoItems.map(item => (
            <tr key={item.id}>
              <td>{item.titulo}{item.descripcion}</td>
              <td>{item.cantidad}</td>
              <td>${item.precio}</td>
              <td>${item.cantidad * item.precio}</td>
              <td >  
                <button onClick={() => incrementar(item.id)} disabled={item.cantidad >= item.stock}>Sumar</button>
                <button onClick={() => decrementar(item.id)} disabled={item.cantidad <= 1}>Restar</button>
                <button onClick={() => eliminarDelCarrito(item.id)}>Quitar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: ${obtenerTotalPrecio()}</h3>
      <div className="carrito-buttons">
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
        <Link to="/checkout" className="checkout-btn">Ir a Checkout</Link>
      </div>
    </div>
  );
}
