// src/components/Checkout/Checkout.jsx
import React, { useState } from "react";
import { useCarrito } from "../../context/useCarrito";
import { crearOrden } from "../../firebase/firestoreService";
import "./Checkout.css";

export default function Checkout() {
  const { carritoItems, vaciarCarrito, obtenerTotalPrecio } = useCarrito();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ordenId, setOrdenId] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !email || !telefono) {
      setError("Completa todos los campos");
      return;
    }

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
      const id = await crearOrden(orden);
      setOrdenId(id);
      vaciarCarrito();
    } catch (err) {
      console.error("Error al crear orden:", err);
      setError("Hubo un error al procesar la orden");
    }
  };

  if (ordenId) {
    return (
      <div className="checkout-container">
        <h2>¡Gracias por tu compra! 🎉</h2>
        <p>Tu número de orden es: <strong>{ordenId}</strong></p>
      </div>
    );
  }

  if (carritoItems.length === 0) {
    return (
      <div className="checkout-container">
        <h2>Tu carrito está vacío 🛒</h2>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Confirmacion de Compra</h1>
      <h4>Rellene con sus datos asi podra recibir un mail con su compra detallada</h4>
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
        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
}
