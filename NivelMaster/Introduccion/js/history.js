// 🧭 Mostramos el estado actual del historial
const info = document.getElementById("info");
const mostrarEstado = () => {
  info.textContent = `Estado actual: ${JSON.stringify(history.state)}`;
};

// ⬅️ Retrocede una página en el historial
document.getElementById("btnBack").addEventListener("click", () => {
  history.back(); // equivalente a presionar botón "Atrás"
});

// ➡️ Avanza una página en el historial
document.getElementById("btnForward").addEventListener("click", () => {
  history.forward(); // equivalente a presionar botón "Adelante"
});

// ⏪ Va a una posición específica del historial
document.getElementById("btnGo").addEventListener("click", () => {
  history.go(-1); // -1 = retrocede una página, +1 = avanza una
});

// 📜 pushState() -> Agrega una nueva entrada al historial
document.getElementById("btnPush").addEventListener("click", () => {
  const data = { pagina: Math.floor(Math.random() * 100) }; // info simulada
  history.pushState(data, "", `?page=${data.pagina}`); // agrega una nueva URL sin recargar
  mostrarEstado();
});

// ✏️ replaceState() -> Reemplaza la entrada actual del historial
document.getElementById("btnReplace").addEventListener("click", () => {
  const data = { pagina: "reemplazada" };
  history.replaceState(data, "", "?page=reemplazada");
  mostrarEstado();
});

// 📡 Detecta cuando el usuario usa los botones del navegador
window.addEventListener("popstate", (e) => {
  console.log("🔁 popstate:", e.state);
  mostrarEstado();
});

// Mostramos estado inicial
mostrarEstado();
