//importaciones
import tituloPrincipal from "/Proyectos/Proverbios/assets/js/titulo.js";
import selectGenero from "/Proyectos/Proverbios/assets/js/selectGeneros.js";
import versiculos from "/Proyectos/Proverbios/assets/js/versiculos.js";

//selecionamos el body
const body = document.querySelector("body");

// Cargar título y select
const titulo = tituloPrincipal();
const select = await selectGenero();

// Contenedor donde se mostrarán los versículos
const contenedorVersiculos = document.createElement("div");
contenedorVersiculos.classList.add("contenedor-principal");

body.append(titulo, select, contenedorVersiculos);

// Cuando el usuario cambie el género
select.addEventListener("change", async (e) => {
  const generoSeleccionado = e.target.value;

  // Limpiamos el contenedor antes de agregar nuevos versículos
  contenedorVersiculos.innerHTML = "";

  // Cargamos los versículos correspondientes
  const versiculoElemento = await versiculos(generoSeleccionado);
  contenedorVersiculos.append(versiculoElemento);
});

