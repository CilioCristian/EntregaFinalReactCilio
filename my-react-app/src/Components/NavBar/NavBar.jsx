import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"; 

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Onlyplast</Link>

      <div className="nav-links">
        <Link to="/productos/oscuro" className="nav-link">Oscuros</Link>
        <Link to="/productos/claro" className="nav-link">Claros</Link>
        <Link to="/" className="nav-link">Volver</Link>
        <CartWidget />
      </div>
    </nav>
  );
}