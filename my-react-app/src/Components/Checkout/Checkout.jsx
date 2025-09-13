import React, { useState } from "react";
import { useCarrito } from "../../context/useCarrito";
import { crearOrden } from "../../firebase/firestoreService";
import "./Checkout.css";

export default function Checkout() {
  // Traigo del carrito lo que necesito: los productos, vaciar el carrito y calcular el total
  const { carritoItems, vaciarCarrito, obtenerTotalPrecio } = useCarrito();

  // Estados para guardar los datos que escribe el usuario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  // Estado para guardar el id de la orden después de comprar
  const [ordenId, setOrdenId] = useState(null);
  // Estado para mostrar errores (por ejemplo si faltan campos)
  const [error, setError] = useState("");

  // Función que se ejecuta cuando se manda el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Si falta algún campo, muestro error y no sigo
    if (!nombre || !email || !telefono) {
      setError("Completa todos los campos");
      return;
    }

    // Creo el objeto de la orden con los datos del comprador, los productos, total y fecha
    const orden = {
      comprador: { nombre, email, telefono },
      items: carritoItems.map(item => ({
        id: item.id,
        titulo: item.titulo,
        descripcion: item.descripcion,
        categoria: item.categoria,
        cantidad: item.cantidad,
        precio: item.precio
      })),
      total: obtenerTotalPrecio(),
      fecha: new Date()
    };

    try {
      // Mando la orden a Firestore y me guardo el id
      const id = await crearOrden(orden);
      setOrdenId(id);
      // Vacío el carrito después de confirmar la compra
      vaciarCarrito();
    } catch (err) {
      console.error("Error al crear orden:", err);
      setError("Hubo un error al procesar la orden");
    }
  };

  // Si ya se generó la orden, muestro un mensaje de gracias y el número de orden
  if (ordenId) {
    return (
      <div className="checkout-container">
        <h2>¡Gracias por tu compra! 🎉</h2>
        <p>Tu número de orden es: <strong>{ordenId}</strong></p>
      </div>
    );
  }

  // Si el carrito está vacío, aviso que no hay nada
  if (carritoItems.length === 0) {
    return (
      <div className="checkout-container">
        <h2>Tu carrito está vacío 🛒</h2>
      </div>
    );
  }

  // Si no pasó nada de lo anterior, muestro el formulario para completar los datos
  return (
    <div className="checkout-container">
      <h1>Confirmacion de Compra</h1>
      <h4>Rellene con sus datos asi podra recibir un mail con su compra detallada</h4>
      {/* Muestro mensaje de error si falta algo */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Teléfono:
          <input type="tel" value={telefono} onChange={e => setTelefono(e.target.value)} />
        </label>
        {/* Botón para confirmar la compra */}
        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
}