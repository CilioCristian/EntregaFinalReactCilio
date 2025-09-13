import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CarritoProvider from "./context/CarritoProvider";
import "./index.css";

// Creo el root de React y renderizo la app
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Pongo el proveedor del carrito para que toda la app pueda usarlo */}
    <CarritoProvider>
      {/* Pongo el BrowserRouter para poder usar rutas en la app */}
      <BrowserRouter>
        {/* Aquí va el componente principal */}
        <App />
      </BrowserRouter>
    </CarritoProvider>
  </React.StrictMode>
);