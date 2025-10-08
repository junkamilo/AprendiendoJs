// 🧩 Elegimos el contenedor principal
const contentBody = document.getElementById("content-body");

// Limpiamos el contenido existente
contentBody.innerHTML = "";

// --- Creación de la estructura del DOM ---

// Contenedor principal para un mejor control del layout
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

// Párrafo de introducción
const gameIntro = document.createElement("p");
gameIntro.classList.add("game-intro");
gameIntro.textContent =
  "Has descendido a una cripta ancestral. Ante ti, diez cerraduras arcanas custodian un secreto milenario. Solo una es la llave maestra. Tienes tres intentos antes de que el mecanismo de defensa se active. Elige con sabiduría, pues tu destino depende de encontrar la llave correcta para poder avanzar.";

// Encabezado del juego (título, vidas, botón)
const gameHeader = document.createElement("header");
gameHeader.classList.add("game-header");

const tituloPrincipal = document.createElement("h1");
tituloPrincipal.classList.add("titulo-principal");
tituloPrincipal.textContent = "Elige la Llave Maestra";

const vidaJugador = document.createElement("p");
vidaJugador.classList.add("lives");
let vida = 3;
vidaJugador.textContent = `Vidas: ${vida} ❤️`;

const button = document.createElement("button");
button.classList.add("btn-restart");
button.textContent = "Reiniciar Misión";

// Área de adivinanza (visual, no funcional)
const guessArea = document.createElement("div");
guessArea.classList.add("guess-area");
const guessLabel = document.createElement("label");
guessLabel.classList.add("guess-label");
guessLabel.textContent = "Terminal de Selección";
const guessInputVisual = document.createElement("div"); // Usamos un div para simular el input
guessInputVisual.classList.add("guess-input-visual");
guessInputVisual.textContent = "?"; // Placeholder visual
guessArea.append(guessLabel, guessInputVisual);

// Contenedor para las llaves/cartas
const contentLlaves = document.createElement("div");
contentLlaves.classList.add("content-llaves");

// --- Lógica del Juego (Sin cambios) ---

// 🔄 Función para recargar la página
const reiniciarJuego = () => location.reload();

// 🖼️ Array de imágenes (usa tus rutas de imágenes correctas)
const imagenes = [
  "/NiverlJunior/ejercicios/img/llave1.jpg",
  "/NiverlJunior/ejercicios/img/llave2.jpg",
  "/NiverlJunior/ejercicios/img/llave3.jpg",
  "/NiverlJunior/ejercicios/img/llave4.jpg",
  "/NiverlJunior/ejercicios/img/llave5.jpg",
  "/NiverlJunior/ejercicios/img/llave6.jpg",
  "/NiverlJunior/ejercicios/img/llave7.jpg",
  "/NiverlJunior/ejercicios/img/llave8.jpg",
  "/NiverlJunior/ejercicios/img/llave9.jpg",
  "/NiverlJunior/ejercicios/img/llave10.jpg",
];

// 🧱 Crear las cards dinámicamente
imagenes.forEach((element, index) => {
  const cardllaves = document.createElement("div");
  const contentImg = document.createElement("div");
  const img = document.createElement("img");
  const contentParrafo = document.createElement("div");
  const descriptionLlaves = document.createElement("p");

  cardllaves.classList.add("card-llaves");
  contentImg.classList.add("content-img");
  contentParrafo.classList.add("content-parrafo");
  descriptionLlaves.classList.add("description-llaves");

  img.src = element;
  img.alt = `Imagen de la llave ${index + 1}`;
  descriptionLlaves.textContent = `Llave Nº ${index + 1}`;

  contentImg.appendChild(img);
  contentParrafo.appendChild(descriptionLlaves);
  cardllaves.append(contentImg, contentParrafo);
  contentLlaves.appendChild(cardllaves);
});

// 🧩 Ensamblamos todos los elementos en el DOM
gameHeader.append(tituloPrincipal, vidaJugador, button);
mainContainer.append(gameHeader, gameIntro, guessArea, contentLlaves);
contentBody.appendChild(mainContainer);

// 🎲 Generamos el número aleatorio entre 1 y 10
const numeroAleatorio = () => Math.floor(Math.random() * 10) + 1;
let resultadoNumero = numeroAleatorio();
console.log("Número secreto:", resultadoNumero);

// --- Función de fin de juego para mostrar resultados ---
function finalizarJuego(mensaje) {
  // Desactivar clics en todas las cartas
  contentLlaves.style.pointerEvents = "none";
  contentLlaves.classList.add("game-over");

  // Mostramos el número real en el input visual
  guessInputVisual.textContent = resultadoNumero;

  // Revelar cuál era la carta correcta
  const allCards = contentLlaves.querySelectorAll(".card-llaves");
  const correctCard = allCards[resultadoNumero - 1];

  // Si la carta correcta no fue la que acertó, la marcamos como revelada
  if (!correctCard.classList.contains("correct")) {
    correctCard.classList.add("revealed");
  }

  // Usamos un pequeño retraso para mostrar la alerta y no bloquear las animaciones
  setTimeout(() => {
    // ✨ --- INICIO DE LA MODIFICACIÓN CON SWEETALERT2 --- ✨
    let alertConfig;

    // Determinamos si es un mensaje de victoria o derrota
    if (mensaje.includes("🎉")) {
      alertConfig = {
        title: "¡Sistema Desbloqueado!",
        text: "Encontraste la llave correcta.",
        icon: "success",
      };
    } else {
      alertConfig = {
        title: "¡Misión Fallida!",
        text: `La llave correcta era la N° ${resultadoNumero}.`,
        icon: "error",
      };
    }

    // Mostramos la alerta personalizada
    Swal.fire({
      ...alertConfig,
      background: "#0d0f1a", // Fondo oscuro a juego
      color: "#e0e1e8", // Color de texto a juego
      confirmButtonText: "Entendido",
      confirmButtonColor: "#00f2ff",
      customClass: {
        popup: 'swal-popup-custom'
      }
    });
  }, 500);
}

// 🎯 Evento para detectar clic en una card
contentLlaves.addEventListener("click", (event) => {
  const card = event.target.closest(".card-llaves");
  if (!card || card.classList.contains("incorrect")) return; // Si no es una card o ya es incorrecta, salimos

  const cards = Array.from(contentLlaves.querySelectorAll(".card-llaves"));
  const index = cards.indexOf(card);

  // Comparar con el número secreto
  if (resultadoNumero === index + 1) {
    card.classList.add("correct");
    finalizarJuego(
      "🎉 ¡Sistema Desbloqueado! Encontraste la llave correcta. 🎉"
    );
  } else {
    vida--;
    vidaJugador.textContent = `Vidas: ${vida} ${vida > 1 ? "❤️" : "💔"}`;
    card.classList.add("incorrect");
    card.style.pointerEvents = "none"; // Desactivar clic en la carta incorrecta

    if (vida <= 0) {
      finalizarJuego(
        `💀 ¡Misión Fallida! La llave correcta era la N° ${resultadoNumero}. 💀`
      );
    }
  }
});

// 🔘 Evento del botón "Reiniciar Misión"
button.addEventListener("click", reiniciarJuego);
