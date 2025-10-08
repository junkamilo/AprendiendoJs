const titulo = document.querySelector(".titulo");

// Modificamos las clases del elemento
//add agrega una o mas clases
titulo.classList.add("nueva-clase", "otra-clase");
//remove elimina una o mas clases
titulo.classList.remove("titulo");
//toggle agrega la clase si no existe y la elimina si ya existe
titulo.classList.toggle("toggle-clase");
//Remplace reemplaza una clase por otra
titulo.classList.replace("nueva-clase", "clase-reemplazada");
//accedemos a una de las clases del elemento, sirve para pedir informacion
console.log(titulo.classList.item(0));
//contains devuelve true o false si la clase existe o no
console.log(titulo.classList.contains("titulo"));
console.log(titulo.classList.contains("otra-clase"));