import React from "react";
import { useCarrito } from "../../context/useCarrito";
import { Link } from "react-router-dom";
import "./Carrito.css";

export default function Carrito() {
  // Acá traigo lo que necesito del contexto del carrito:
  // - carritoItems: lo que hay dentro del carrito
  // - eliminarDelCarrito: saca un producto
  // - vaciarCarrito: vacía todo el carrito
  // - obtenerTotalPrecio: suma el precio total
  // - incrementar y decrementar: para sumar o restar cantidades
  const { carritoItems, eliminarDelCarrito, vaciarCarrito, obtenerTotalPrecio, incrementar, decrementar} = useCarrito();

  // Si el carrito está vacío, muestro un mensajito y un link para volver
  if (carritoItems.length === 0)
    return (
      <div className="carrito-container">
        <h2>Tu carrito está vacío 🛒</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );

  // Si hay productos en el carrito, muestro la tabla con la info
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
              {/* Muestro nombre, cantidad, precio y subtotal */}
              <td>{item.descripcion}</td>
              <td>{item.cantidad}</td>
              <td>${item.precio}</td>
              <td>${item.cantidad * item.precio}</td>
              <td>  
                {/* Botón para sumar uno (no deja pasar el stock) */}
                <button onClick={() => incrementar(item.id)} disabled={item.cantidad >= item.stock}>Sumar</button>
                {/* Botón para restar uno (no deja bajar de 1) */}
                <button onClick={() => decrementar(item.id)} disabled={item.cantidad <= 1}>Restar</button>
                {/* Botón para quitar el producto entero */}
                <button onClick={() => eliminarDelCarrito(item.id)}>Quitar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Muestro el total de la compra */}
      <h3>Total: ${obtenerTotalPrecio()}</h3>
      <div className="carrito-buttons">
        {/* Botón para vaciar todo el carrito */}
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
        {/* Link para ir al checkout y terminar la compra */}
        <Link to="/checkout" className="checkout-btn">Ir a Checkout</Link>
      </div>
    </div>
  );
}