import React from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "../../context/useCarrito";
import "./CartWidget.css";

export default function CartWidget() {
  // Traigo la función que me dice cuántas unidades tengo en el carrito
  const { obtenerTotalCantidad } = useCarrito();
  // Guardo ese número en una variable
  const totalUnidades = obtenerTotalCantidad();

  return (
    // El icono del carrito es un link que me lleva a la página del carrito
    <Link to="/carrito" className="cartwidget-link">
      {/* Imagen del carrito */}
      <img src="/cart.ico" alt="Carrito" className="cartwidget-icon" />
      {/* Si hay al menos 1 producto, muestro el numerito encima del carrito */}
      {totalUnidades > 0 && (
        <span className="cartwidget-badge">{totalUnidades}</span>
      )}
    </Link>
  );
}