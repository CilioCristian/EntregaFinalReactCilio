import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Carrito from "./Components/Carrito/Carrito";
import Checkout from "./Components/Checkout/Checkout";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemlistContainer";
import CarritoProvider from "./context/CarritoProvider";
import "./index.css";

export default function App() {
  return (
    // Pongo el proveedor del carrito para que todos los componentes puedan usarlo
    <CarritoProvider>
      {/* Barra de navegación con logo y carrito */}
      <NavBar />
      {/* Configuro las rutas de la app */}
      <Routes>
        {/* Página principal con la lista de productos */}
        <Route path="/" element={<ItemListContainer />} />
        {/* Página de detalle de un producto */}
        <Route path="/item/:idProducto" element={<ItemDetailContainer />} />
        {/* Página del carrito */}
        <Route path="/carrito" element={<Carrito />} />
        {/* Página de checkout para confirmar compra */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CarritoProvider>
  );
}
