import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"; 

export default function NavBar() {
  return (
    <nav className="navbar">
      {/* Logo de la página, que al hacer clic lleva al inicio */}
      <Link to="/" className="nav-logo">Onlyplast</Link>
      
      <div className="nav-links">
        {/* Link para volver al inicio o catálogo */}
        <Link to="/">Volver</Link>  
        <span></span>
        {/* Componente que muestra el carrito y la cantidad de productos */}
        <CartWidget />
      </div>
    </nav>
  );
}
