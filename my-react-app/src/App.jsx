import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Carrito from "./Components/Carrito/Carrito";
import Checkout from "./Components/Checkout/Checkout";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer"; // ojo: corregido ItemlistContainer → ItemListContainer
import CarritoProvider from "./context/CarritoProvider";
import "./index.css";

export default function App() {
  return (
    <CarritoProvider>
      <NavBar />
      <Routes>
        {/* Página principal con todos los productos */}
        <Route path="/" element={<ItemListContainer />} />

        {/* Página de productos filtrados por tipo: claro / oscuro */}
        <Route path="/productos/:tipo" element={<ItemListContainer />} />

        {/* Página de detalle de un producto */}
        <Route path="/item/:idProducto" element={<ItemDetailContainer />} />

        {/* Página del carrito */}
        <Route path="/carrito" element={<Carrito />} />

        {/* Página de checkout */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CarritoProvider>
  );
}
