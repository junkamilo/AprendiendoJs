//operador terniario
let edad = 20;
(edad > 10) ? console.log("El numero es mayor a 10") : console.log("El numero es menor de 10");

//destructuramos un array
let numeros = ["numero 1","numero2","numero 3","numero 4","numero 5"];
console.log(...numeros);

//agregamos este array al array numero
let array = ["numero 6","numero 7","numero 8","numero 9","numero 10"];

numeros.push(...array);

console.log(numeros);

//concatemas los dos array en un nuevo array
 
let nuevoArray = [...numeros,...array]

console.log(nuevoArray);


//rest como argumento

const sumaNumeros = (...num)=>{
    let suma = 0;
    for (const element of num) {
        suma += element; 
    }
    return suma
}

let arraynumeros = [1,2,3,4,5,6,7,8,9,10];

const resultadoTotal = sumaNumeros(...arraynumeros);
console.log("Suma total " + resultadoTotal);



