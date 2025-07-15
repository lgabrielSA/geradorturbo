// Importa as funções necessárias do Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Para autenticação

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDZsUJazxUFX_E968XskCB70dCYd8EqP9s",
  authDomain: "gerador-turbo.firebaseapp.com",
  projectId: "gerador-turbo",
  storageBucket: "gerador-turbo.firebasestorage.app",
  messagingSenderId: "322571240877",
  appId: "1:322571240877:web:86b4a9387e6172ee9b4d24",
  measurementId: "G-8N5NPG262P"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Instância de autenticação

// Exporte a instância de autenticação para ser utilizada em outros arquivos
export { auth };
