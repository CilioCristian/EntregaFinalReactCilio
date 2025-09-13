import { createContext } from "react";

// Creo un contexto para el carrito, que después voy a usar para pasar datos
// como productos, total y funciones de agregar o quitar sin tener que pasar props
const CarritoContext = createContext();

export default CarritoContext;