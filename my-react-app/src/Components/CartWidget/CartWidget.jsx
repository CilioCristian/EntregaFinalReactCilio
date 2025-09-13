// src/components/CartWidget/CartWidget.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "../../context/useCarrito";
import "./CartWidget.css";

export default function CartWidget() {
  const { obtenerTotalCantidad } = useCarrito();
  const totalUnidades = obtenerTotalCantidad();

  return (
    <Link to="/carrito" className="cartwidget-link">
      <img src="/cart.ico" alt="Carrito" className="cartwidget-icon" />
      {totalUnidades > 0 && <span className="cartwidget-badge">  {totalUnidades}</span>}
    </Link>
  );
}
