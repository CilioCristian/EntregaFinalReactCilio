// src/context/useCarrito.jsx
import { useContext } from "react";
import CarritoContext from "./CarritoContextObject";

export const useCarrito = () => useContext(CarritoContext);
