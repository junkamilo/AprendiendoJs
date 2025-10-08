//selecionamos el elemento padre
const content = document.getElementById('content');

//obtenemos el primer nodo hijo
const primerHijo = content.firstChild
//obtenemos el ultimo nodo hijo
const ultimoHijo = content.lastChild
//obtenemos el primer elemento hijo
const primerElementoHijo = content.firstElementChild
//obtenemsos el ultimo elemento hijo
const ultimoElementoHijo = content.lastElementChild
//obtenemos todos los nodos hijos
const todosLosHijos = content.childNodes
//obtenemos todos los elementos hijos
const todosLosElementosHijos = content.children
console.log(content);
/**
 * me genera un nodo de texto por el (espacio en blanco) que se encuentra en el html
 */
console.log(primerHijo);
/**
 * me genera un nodo de texto por el (espacio en blanco) que se encuentra en el html
 */
console.log(ultimoHijo);
/**
 * me genera el primer elemento hijo sin importar los espacios en blanco
 */
console.log(primerElementoHijo);
/**
 * me genera el ultimo elemento hijo sin importar los espacios en blanco
 */
console.log(ultimoElementoHijo);
/**
 * me genera una lista de nodos hijos incluyendo los espacios en blanco
 */
console.log(todosLosHijos);
/**
 * me genera una lista de elementos hijos sin importar los espacios en blanco
 */
console.log(todosLosElementosHijos);


/**
 * METODOS CHILD
 */

//creamos elementos
const parrafo = document.createElement('p');
const titulo = document.createElement('h2');

//selecionamos elementos
const tituloAntiguo = document.querySelector('.titulo');
const parrafoAntiguo = document.querySelector('.parrafo');

parrafo.textContent = 'Hola soy un parrafo';
titulo.textContent = 'Hola soy un titulo h2';

//reemplazamos el elemento viejo por el nuevo
//lo cual en el primer parametro va el nuevo elemento y en el segundo el elemento que queremos reemplazar
content.replaceChild(titulo, tituloAntiguo);
content.replaceChild(parrafo, parrafoAntiguo);

//eliminamos un elemento hijo
content.removeChild(lastElementChild);

/**
 * propiedades para elementos hermanos
 */
const segundoParrafo = document.getElementById('segundo-parrafo');
//obtenemos el elemento hermano anterior
const hermanoAnterior = segundoParrafo.previousElementSibling;
//obtenemos el elemento hermano siguiente
const hermanoSiguiente = segundoParrafo.nextElementSibling;