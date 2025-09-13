// src/firebase/firestoreService.js
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
  serverTimestamp,
  orderBy,
  limit
} from "firebase/firestore";
import { baseDeDatos } from "./firebaseConfig";

/**
 * Estructura esperada de cada documento en la colección "productos":
 * {
 *  titulo: string,
 *  descripcion: string,
 *  precio: number,
 *  stock: number,
 *  categoria: string,
 *  imagen: string
 * }
 */ 

const coleccionProductos = collection(baseDeDatos, "productos");
const coleccionOrdenes = collection(baseDeDatos, "ordenes");

export async function obtenerProductos() {
  try {
    const snapshot = await getDocs(coleccionProductos);
    return snapshot.docs.map(docu => ({ id: docu.id, ...docu.data() }));
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    throw error;
  }
}

export async function obtenerProductoPorId(idProducto) {
  try {
    const docRef = doc(baseDeDatos, "productos", idProducto);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) return null;
    return { id: docSnap.id, ...docSnap.data() };
  } catch (error) {
    console.error("Error obteniendo producto por id:", error);
    throw error;
  }
}

export async function obtenerProductosPorCategoria(categoria) {
  try {
    const q = query(coleccionProductos, where("categoria", "==", categoria));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(docu => ({ id: docu.id, ...docu.data() }));
  } catch (error) {
    console.error("Error obteniendo productos por categoria:", error);
    throw error;
  }
}

/**
 * Crear orden:
 * orderObj:
 *  {
 *    comprador: { nombre, email, telefono },
 *    items: [{ id, titulo, precio, cantidad }],
 *    total: number
 *  }
 *
 * Devuelve el id de la orden creada.
 */
export async function crearOrden(orderObj) {
  try {
    const nuevaOrden = {
      ...orderObj,
      fecha: serverTimestamp()
    };
    const docRef = await addDoc(coleccionOrdenes, nuevaOrden);
    return docRef.id;
  } catch (error) {
    console.error("Error creando orden:", error);
    throw error;
  }
}

/**
 * Helper: obtener últimas N ordenes (opcional)
 */
export async function obtenerUltimasOrdenes(n = 10) {
  try {
    const q = query(coleccionOrdenes, orderBy("fecha", "desc"), limit(n));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (error) {
    console.error("Error obteniendo ordenes:", error);
    throw error;
  }
}