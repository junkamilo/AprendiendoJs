//elimina el ultimo elemento del array y nos muestra cual elimino
const pop = ()=>{
    let Arrays = ["juan","camila","maury","felix","jose"];
    let resultado = Arrays.pop();
    console.log("Eliminando el ultimo elemento del array " + resultado);   
}
pop();


//elimina el primer elemento del array y nos muestra cual elimino
const shift = ()=>{
    let Arrays = ["juan","camila","maury","felix","jose"];
    let resultado = Arrays.shift();
    console.log("Eliminando el primer elemento del array " + resultado);   
}
shift();


//agrega el elemento al final del array
const push = ()=>{
    let Arrays = ["juan","camila","maury","felix","jose"];
    let resultado = Arrays.push("luciana");
    //nos devuelve como resultado la cantidad de elementos
    console.log("Agregando el elemento del array " + resultado); 
    console.log("Agregando el elemento del array " + Arrays);    
}
push();



//revierte el orden del array
const reverse = ()=>{
    let Arrays = [1,2,3,4,5,6,7,8,9,10];
    console.log("Numero orden del array " + Arrays);
    
    let resultado = Arrays.reverse("luciana");
    //nos devuelve como resultado la cantidad de elementos
    console.log("Revertiendo orden de los numeros del Array " + resultado);    
}
reverse();


//Ingresa valores al principio del array
const unshift = ()=>{
    let Arrays = [1,2,3,4,5,6,7,8,9,10];
    console.log("Numero orden del array " + Arrays);
    
    let resultado = Arrays.unshift(11,12,13,15);
    //nos devuelve como resultado la cantidad de elementos
    console.log(resultado); 
    console.log("Nuevos valores agregados al array " + Arrays);
       
}
unshift();



//Organiza los valores de un array
const sort = ()=>{
    let Arrays = [10,5,9,6,3,4,1,0,2,7,8];
    console.log("Numero desordenados " + Arrays);
    
    let resultado = Arrays.sort();
    console.log("Numero Ordenados " + resultado);
    
       
}
sort();


//El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
const splice = ()=>{
    let Arrays = ["juan","sebas","fercho","miguel","pabon"];
    console.log("Nombres : " + Arrays);
    //1 inicia desde "sebas"
    //3 elimina tres elementos contandon desde el 1 sebas,fercho,miguel
    //"beltran" agragamos nuevos nombres al array
    //"julian agregamos nuevos nombres el array"
    console.log(Arrays.splice(1,3,"beltran","julian"));
    //no eliminamos y atregamos desde el inicio
    console.log(Arrays.splice(0,0,"beltran","julian"));
}
splice();


/**
 * METODOS ACCESORES
 */
//El método join() une todos los elementos de un array (o un array-like object) en una cadena y devuelve esta cadena.
const join = ()=>{
    let Arrays = ["juan","sebas","fercho","miguel","pabon"];
    console.log("Nombres : " + Arrays);
    let resultado = Arrays.join(" - ");
    console.log("Nombres unidos por guion : " + resultado);
}
join();

//El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
const slice = ()=>{
    let Arrays = ["juan","sebas","fercho","miguel","pabon"];
    console.log("Nombres : " + Arrays);
    //1 inicia desde "sebas"
    //3 hasta "miguel" pero no lo incluye
    let resultado = Arrays.slice(1,3);
    console.log("Nombres seleccionados : " + resultado);
}
slice();

//El Metodo filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
const filter = ()=>{
    let numeros = [1,2,3,4,5,6,7,8,9,10];
    console.log("Numeros : " + numeros);
    //filtramos los numeros mayores a 5
    let resultado = numeros.filter(numero => numero > 5);
    console.log("Numeros mayores a 5 : " + resultado);
}
filter();

//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicada a cada uno de sus elementos.
const map = ()=>{
    let numeros = [1,2,3,4,5,6,7,8,9,10];
    console.log("Numeros : " + numeros);
    //multiplicamos por 2 cada elemento del array
    let resultado = numeros.map(numero => numero * 2);
    console.log("Numeros multiplicados por 2 : " + resultado);
}
map();

//El metod forEach() ejecuta la función indicada una vez por cada elemento del array.
const forEach = ()=>{
    let numeros = [1,2,3,4,5,6,7,8,9,10];
    console.log("Numeros : " + numeros);
    //sumamos 2 a cada elemento del array
    numeros.forEach((numero, index) => {
        numeros[index] = numero + 2;
    });
    console.log("Numeros sumados por 2 : " + numeros);
}
forEach();