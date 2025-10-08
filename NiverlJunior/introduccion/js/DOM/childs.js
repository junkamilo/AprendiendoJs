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
