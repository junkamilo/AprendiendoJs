//objetos literales= son objetos que tienen pares de valores

//{} = esta llaves quiere decirse que es un OBJETO
let personaje = {
    //nombre = es la llave
    //"luffy" = es el valor de la llaves
    nombre: "luffy",
    frutaDiablo: "gommmi gommi",
    vivo: true,
    edad: 19,
    tripulantes : {
        personajeName : ["nammi","chopper","zoro","usoop","robim","sanji","franki"]
    },
    traje : "sombrero de paja",
};
//imprimimos el objeto
console.log(personaje);

//accedemos a las propiedades del objeto
//accedemos al nombre
console.log("nombre: " + personaje.nombre);
//accedemos al poder
console.log("poder: " + personaje.frutaDiablo);
//accedemos al estado
console.log("estado: " + personaje.vivo);
//accedemos a la edad
console.log("edad: " + personaje.edad + " años");
//accedemos a la tripulacion
let nombreTripulantes = personaje.tripulantes.personajeName
//contamos cantidad tripulantes
console.log("cantidad tripulantes " + nombreTripulantes.length);
//recorremos los nombres
nombreTripulantes.forEach((e)=>{
    console.log("nombre del tripulante: " + e);
})
//traje
console.log("traje del personaje: " + personaje.traje);


/**
 * MAS DETALLES DE LOS OBJETOS LITERALES
 */

//borramos una llave del objeto
delete personaje.traje;
//borramos el traje
console.log(personaje);

//aggregamos nueva llave con su valor
personaje.estadoAnimo = "feliz"


//pasamos el objeto a un arreglo por pares
const entriesPares = Object.entries(personaje);

console.log(entriesPares);

//hacemos que el objeto no reciba ninugn cambio
Object.freeze(personaje);

personaje.nuevoValor = "hola";

console.log(personaje);

//imprimos las propiedades que contiene el arreglo
const propiedades = Object.getOwnPropertyNames(personaje);
//nos lo devuelve como un array
console.log(propiedades);

//imprimos los valores que contiene el arreglo
const valores = Object.values(personaje);
//nos lo devuelve como un array
console.log(valores);

//juntamos las consultas
console.log({propiedades , valores});


