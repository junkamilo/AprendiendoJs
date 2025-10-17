//importaciones
import tituloPrincipal from "/Proyectos/Proverbios/assets/js/titulo.js";
import selectGenero from "/Proyectos/Proverbios/assets/js/selectGeneros.js";
import versiculos from "/Proyectos/Proverbios/assets/js/versiculos.js";
import botondescripcion from "/Proyectos/Proverbios/assets/js/botonDescripcion.js";
import Sliderversiculos from "/Proyectos/Proverbios/assets/js/slider.js";

//selecionamos el body
const body = document.querySelector("body");

// Cargar título y select
const titulo = tituloPrincipal();
const select = await selectGenero();
const boton = await botondescripcion();
const slider = await Sliderversiculos();

console.log(boton);


// Contenedor donde se mostrarán los versículos
const contenedorVersiculos = document.createElement("div");
contenedorVersiculos.classList.add("contenedor-principal");

//agregamos los estilos
body.classList.add("content-body");

body.append(titulo, select, contenedorVersiculos,boton,slider);

// Cuando el usuario cambie el género
select.addEventListener("change", async (e) => {
  const generoSeleccionado = e.target.value;
  console.log(generoSeleccionado);
  
  if (generoSeleccionado === "Sabiduria") body.classList.add("tema-sabiduria");
  else if(generoSeleccionado === "Amor") body.classList.add("tema-amor");
  else if(generoSeleccionado === "Alegria") body.classList.add("tema-alegria");
  else if(generoSeleccionado === "Tristeza") body.classList.add("tema-triztesa");
  else if(generoSeleccionado === "Humildad") body.classList.add("tema-humildad");

  
  // Limpiamos el contenedor antes de agregar nuevos versículos
  contenedorVersiculos.innerHTML = "";

  // Cargamos los versículos correspondientes
  const versiculoElemento = await versiculos(generoSeleccionado);
  contenedorVersiculos.append(versiculoElemento);
});

