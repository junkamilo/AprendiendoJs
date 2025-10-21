//modo estrticto js
"use strict";
//importaciones
import '../src/style.css';
import tituloPrincipal from './titulo.js'
import dataArtista from './data.js'
//seleccionamos el app principal
const app = document.getElementById("app");
const contentGrid = document.createElement("div");
//agregamos los estilos
contentGrid.classList.add("app-grid");
//titulo principal
const titulo = tituloPrincipal();

//pegamos los elementos al elemento principal
app.append(titulo,contentGrid);

// Ahora cargamos los datos y agregamos las cards dinámicamente
dataArtista().then((cards) => {    
  cards.forEach((c) => contentGrid.append(c));
});
