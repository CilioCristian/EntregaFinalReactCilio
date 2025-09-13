// src/assets/componentes/NavBar/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"; 

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Onlyplast</Link>
      <div className="nav-links">
        <Link to="/">Volver</Link>  
        <span></span>
        <CartWidget />
      </div>
    </nav>
  );
}


