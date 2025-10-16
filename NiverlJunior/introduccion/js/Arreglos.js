//declaramos un arreglo
let frutas = ["manzana","pera","mango","guayaba"];
console.log("Imprimimos las frutas: " + frutas);
console.log("Accedemos a la posicion [0]" + frutas[0]);
console.log("Accedemos a la posicion [1]" + frutas[1]);
console.log("Accedemos a la posicion [2]" + frutas[2]);
console.log("Accedemos a la posicion [3]" + frutas[3]);


//Arreglos asociativos
let pc1 = {
    nombre : "junkaPc",
    procesador : "intel core i3",
    ram : "8 RAM",
    espacio : "500GB"
};
console.log(pc1);

console.log("Ingresamos a cada especificacion del arreglo con pc1.x");
console.log(pc1.nombre);
console.log(pc1.procesador);
console.log(pc1.ram);
console.log(pc1.espacio);

console.log("Ingresamos a cada especificacion del arreglo con pc1['']");
let nombrePc = pc1["nombre"];
let procesadorPc = pc1["procesador"];
let ramPc = pc1["ram"];
let espacioPc = pc1["espacio"];
console.log(nombrePc);
console.log(procesadorPc);
console.log(ramPc);
console.log(espacioPc);







let pc2 = ["junkaPc","intel core i3","8 RAM","500GB"];
console.log("Especificaciones de la pc " + pc2);

//lo que podemos agregar a un arreglo

const array = [
    true,
    123,
    "fernando",
    function(){},
    ()=>{},
    {a : 1},
    ["x","megaman","zero","jose",[
        "juan camilo",
        "hola"
    ]]
];

//ingresamos al indice 6 del arreglo y luego al sundice del arreglo 4 al 1
console.log(array[6][4][1]);

