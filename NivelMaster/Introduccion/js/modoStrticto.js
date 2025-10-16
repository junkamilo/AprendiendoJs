//activamos el modo estrticto en js
"use strict";

const nombre = "juan camilo";
console.log(nombre);

//creamos una propiedad
const objeto = {};

Object.defineProperty(objeto,"nombre",{value: "juan camilo",writable: false});
//me manda error ya que con el modo estrticto no me permite rescribir un nombre
//objeto.nombre = "julian";

//no me permite crear mas propiedades lo cual por el modo estrticto me endia a error
//Object.preventExtensions(objeto);

objeto.apellido = "beltran";

console.log(objeto);

