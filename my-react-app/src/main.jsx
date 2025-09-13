import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CarritoProvider from "./context/CarritoProvider";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarritoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CarritoProvider>
  </React.StrictMode>
);
