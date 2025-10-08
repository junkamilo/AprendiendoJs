/**
 * OBTENCION Y MOFIFICACION DE ELEMENTOS
 */
const titulo = document.querySelector('.titulo');

let resulto = titulo.textContent; //devuelve el texto de cualquier elemento
let resultado2 = titulo.innerHTML; //devuelve el contenido HTML de cualquier elemento
let resultado3 = titulo.outerHTML; //devuelve el codigo HTML completo de cualquier elemento
//mostramos el elemento en consola
console.log(resulto);
console.log(resultado2);
console.log(resultado3);

/**
 * CREACION DE ELEMENTOS
 */
const contenedor = document.body;
const item = document.createElement('li'); //crea un elemento HTML
const textItem = document.createTextNode('Nuevo elemento'); //crea un nodo de texto

//creamos un documento fragment para mejorar el rendimiento
const fragment = document.createDocumentFragment();



for (let i = 0; i < 20; i++) {
const item2 = document.createElement('li');
item2.textContent = 'Nuevo elemento 2';
fragment.appendChild(item2); //agrega el elemento al fragmento
}
console.log(fragment);

item.appendChild(textItem); //agrega el nodo de texto al elemento
contenedor.appendChild(item); //agrega el elemento al contenedor
contenedor.appendChild(fragment); //agrega el fragmento al contenedor

console.log(contenedor);
console.log(item);


