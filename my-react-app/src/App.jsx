import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Carrito from "./Components/Carrito/Carrito";
import Checkout from "./Components/Checkout/Checkout";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer";
import CarritoProvider from "./context/CarritoProvider";
import "./index.css";

export default function App() {
  return (
    <CarritoProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:idProducto" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CarritoProvider>
  );
}
