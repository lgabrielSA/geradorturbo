import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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

// Inicializa Firebase uma única vez
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (e) {
  console.error("Erro ao inicializar Firebase:", e);
}

// Inicializa o Auth
const auth = getAuth(app);

/**
 * Verifica se o usuário está autenticado
 */
export function checkAuth() {
  console.log("[AuthGuard] Verificando autenticação...");

  try {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.warn("[AuthGuard] Usuário não autenticado. Redirecionando...");
        window.location.href = "login.html";
      } else {
        console.log("[AuthGuard] Usuário autenticado:", user.email);
        document.body.style.visibility = "visible";
      }
    });
  } catch (error) {
    console.error("[AuthGuard] Erro ao verificar autenticação:", error);
    document.body.style.visibility = "visible"; // Libera visualização mesmo com erro
  }
}