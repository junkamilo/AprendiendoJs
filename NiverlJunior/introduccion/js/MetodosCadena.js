//concatenamos la cadena metodo concat();
const concatm = ()=>{
let nombre = "juan camilo";
let nombreCompleto = nombre.concat(" beltran campo");
console.log(nombreCompleto);
}
concatm();

//verificamos si el primer nombre es igual con el otro primer nombre con el metodo startsWith();
const startsWith = ()=>{
let nombreCompleto = "juan camilo beltran campo";
let Usuario_onem = nombreCompleto.startsWith("juan");
let Usuario_two = nombreCompleto.startsWith("Daniel");
//devuelve true
console.log(Usuario_onem);
//devuelve false
console.log(Usuario_two);
}
startsWith();


//verificamos si el ultimo nombre es igual con el otro ultimo nombre con el metodo endsWith();
const endsWith = ()=>{
let nombreCompleto = "juan camilo beltran campo";
let Usuario_onem = nombreCompleto.endsWith("campo");
let Usuario_two = nombreCompleto.endsWith("Daniel");
//devuelve true
console.log(Usuario_onem);
//devuelve false
console.log(Usuario_two);
}
endsWith();

//verificamos si se encuentra la cadena de texto con el metodo includes();
const includes = ()=>{
let cadena_one = "se encontrara una palabra? si se encuentra devuelve true de lo contrario devuelve false";
//devuelve true ya que se encuentra la palabra
let cadena_two = cadena_one.includes("palabra");
//devuelve false ya que no se encuentra la palabra
let cadena_thre = cadena_one.includes("no");
//devuelve true
console.log(cadena_two);
//devuelve false
console.log(cadena_thre);
}
includes();


//verificamos la posicion de la primera letra de la palabra con el metodo indexOf
const indexOf = ()=>{
let cadena_one = "se encontrara una palabra? si se encuentra devuelve true de lo contrario devuelve false";
//posicion de la primera letra del string palabra en este caso es p
let cadena_two = cadena_one.indexOf("palabra");
console.log(cadena_two);
}
indexOf();

//verificamos la ultima posicion de la primera letra de la palabra con el metodo lastIndexOf
const lastIndexOf = ()=>{
let cadena_one = "se encontrara una palabra? si se encuentra devuelve true de lo contrario devuelve false false false false false";
//posicion de la ultima letra de la ultima palabra del string false en este caso es f
let cadena_two = cadena_one.lastIndexOf("false");
console.log(cadena_two);
}
lastIndexOf();


//rellena la cadena actual con una cadena dada
const padStart = ()=>{
let cadena_one = "abc";
// El relleno es aplicado desde el inicio (izquierda) de la cadena actual.
let cadena_two = cadena_one.padStart(6,"a");
console.log(cadena_two);
}
padStart();

//rellena la cadena actual con una cadena dada
const padEnd = ()=>{
let cadena_one = "abc";
// El relleno se aplica desde el final de esta cadena.
let cadena_two = cadena_one.padEnd(6,"a");
console.log(cadena_two);
}
padEnd();

//repite la cadena actual con el numero dado
const repeat = ()=>{
let cadena_one = "abc ";
//devuelve una nueva cadena que contiene la cantidad especificada de copias de esta cadena, concatenadas entre sí.
let cadena_two = cadena_one.repeat(6);
console.log(cadena_two);
}
repeat();


// El split()método de Stringvalores toma un patrón y divide esta cadena en una lista ordenada de subcadenas buscando el patrón, coloca estas subcadenas en una matriz y devuelve la matriz.
const split = ()=>{
let cadena_one = "abc mundo js";
let cadena_two = cadena_one.split("");
console.log(cadena_two);
}
split();

//devuelve la parte de esta cadena desde el índice inicial hasta el índice final, excluido éste, o hasta el final de la cadena si no se proporciona ningún índice final.
const substring = ()=>{
let cadena_one = "abc mundo js";
let cadena_two = cadena_one.substring(0,5);
console.log(cadena_two);
}
substring();

//Convierte una cadena a miniscula
const toLowerCase = ()=>{
let cadena_one = "CONVIRTIENDO ESTE STRING A MINUSCULA";
let cadena_two = cadena_one.toLowerCase();
console.log(cadena_two);
}
toLowerCase();

//convierte una cadena a mayuscula
const toUpperCase = ()=>{
let cadena_one = "convirtiendo esta cadena a mayuscula";
let cadena_two = cadena_one.toUpperCase();
console.log(cadena_two);
}
toUpperCase();


//convierte una valor a string
const toString = ()=>{
let cadena_one = 250;
let cadena_two = cadena_one.toString();
console.log(cadena_two + 250);
}
toString();

//elimina los espcios en blancos
const trim = ()=>{
let cadena_one = "   Eliminando los espacios en blancos   ";
console.log(cadena_one.trim());
}
trim();

//elimina los espcios en blancos al final
const trimEnd = ()=>{
let cadena_one = "Eliminando los espacios en blancos final   ";
console.log(cadena_one.trimEnd());
}
trimEnd();


//elimina los espcios en blancos al inicio
const trimStart = ()=>{
let cadena_one = "   Eliminando los espacios en blancos inicio";
console.log(cadena_one.trimStart());
}
trimStart();