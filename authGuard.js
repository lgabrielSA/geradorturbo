import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAy3lnmXY4rt5fRLHvh0emvqqbjKiddckI",
  authDomain: "gerador-turbo-shot.firebaseapp.com",
  projectId: "gerador-turbo-shot",
  storageBucket: "gerador-turbo-shot.firebasestorage.app",
  messagingSenderId: "961554334939",
  appId: "1:961554334939:web:8f383bfc4952133f94f8fe",
  measurementId: "G-2DKCFTCRGG"
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