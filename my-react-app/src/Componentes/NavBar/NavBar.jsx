
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Onlyplast</h1>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
