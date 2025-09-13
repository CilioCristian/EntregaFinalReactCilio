import { useContext } from "react";
import CarritoContext from "./CarritoContextObject";

// Este hook sirve para usar el carrito en cualquier componente
// en vez de tener que importar useContext y el contexto cada vez
export const useCarrito = () => useContext(CarritoContext);
