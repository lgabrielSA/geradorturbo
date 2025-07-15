// Importa as funções necessárias do Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Para autenticação

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCuZF1y9mSTfW6oRo0UAZ-SDnE4dUkQKZk",
  authDomain: "aplicativo-magnata.firebaseapp.com",
  projectId: "aplicativo-magnata",
  storageBucket: "aplicativo-magnata.firebasestorage.app",
  messagingSenderId: "1036873396258",
  appId: "1:1036873396258:web:4997f5a56c75158db55a7b",
  measurementId: "G-8LGZBWZYWY"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Instância de autenticação

// Exporte a instância de autenticação para ser utilizada em outros arquivos
export { auth };
