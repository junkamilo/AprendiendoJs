//Metodo getElementById
let parrafo = document.getElementById("parrafo");
console.log(parrafo);
//Metodo getElementsByClassName
let parrafos = document.getElementsByClassName("parrafoPrincipal");
console.log(parrafos);
//Metodo getElementsByTagName
let parrafosTag = document.getElementsByTagName("p");
console.log(parrafosTag);
//Metodo querySelector devuelve el primer elemento que coincide con el selector
let parrafoQuery = document.querySelector(".item");
console.log(parrafoQuery);
//Metodo querySelectorAll devuelve todos los elementos que coinciden con el selector y nos devuelve una NodeList (coleccion de nodos)
let parrafosQueryAll = document.querySelectorAll(".item");
console.log(parrafosQueryAll);