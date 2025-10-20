"use strict";

const bodyPrincipal = document.querySelector("body");

// Variables de control
let publicaciones = []; // aquí guardamos todas las publicaciones del JSON
let indexActual = 0;    // para saber desde qué índice seguimos cargando
const cantidadPorCarga = 4; // cada tanda serán 4 publicaciones

// Función que carga más publicaciones cuando se llega al final
const cargarMaspublis = (entry) => {
  if (entry[0].isIntersecting) {
    cargarPublicaciones();
  }
};

// Observador del scroll o intersección
const observer = new IntersectionObserver(cargarMaspublis);

// Punto de referencia para el observer
const sentinel = document.createElement("div");
sentinel.id = "sentinel";
bodyPrincipal.append(sentinel);

// --- FUNCIONES PRINCIPALES ---

// Carga inicial del JSON
async function cargarPublicaciones() {
  try {
    // Si aún no tenemos los datos cargados, los pedimos
    if (publicaciones.length === 0) {
      const response = await fetch("/NivelMaster/data.json");
      const data = await response.json();
      publicaciones = data.content;
    }

    // Calculamos el rango de publicaciones a mostrar
    const inicio = indexActual;
    const fin = indexActual + cantidadPorCarga;
    const lote = publicaciones.slice(inicio, fin);

    // Si no hay más publicaciones, desconectamos el observer
    if (lote.length === 0) {
      observer.disconnect();
      console.log("🟢 No hay más publicaciones para mostrar.");
      return;
    }

    // Mostramos las publicaciones
    lote.forEach(({ nombre, contenido }) => {
      contentCard(nombre, contenido);
    });

    // Avanzamos el índice
    indexActual += cantidadPorCarga;

    // Volvemos a observar el sentinel
    observer.observe(sentinel);

  } catch (error) {
    console.error("Error al cargar el JSON:", error);
  }
}

// Crea las tarjetas visuales
const contentCard = (nombre, contenido) => {
  const card = document.createElement("div");
  const titulo = document.createElement("h2");
  const parrafo = document.createElement("p");

  card.classList.add("card");
  titulo.classList.add("titulo");
  parrafo.classList.add("parrafo");

  titulo.textContent = nombre;
  parrafo.textContent = contenido;

  card.append(titulo, parrafo);
  bodyPrincipal.insertBefore(card, sentinel);
};

// Llamada inicial
cargarPublicaciones();




  
