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