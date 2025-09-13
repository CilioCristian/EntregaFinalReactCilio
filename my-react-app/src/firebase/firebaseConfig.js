import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfE0MbpJPZY6KhWpPvZbfL5B5lw2lKoo8",
    authDomain: "proyectofinalcilio.firebaseapp.com",
    projectId: "proyectofinalcilio",
    storageBucket: "proyectofinalcilio.firebasestorage.app",
    messagingSenderId: "81561294600",
    appId: "1:81561294600:web:76b8ca59d2556ba0b37ebd"
};

const app = initializeApp(firebaseConfig);
const baseDeDatos = getFirestore(app);

export { baseDeDatos };
