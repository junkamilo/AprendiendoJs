/**
 * BUCLE WHILE
 */
let numero = 0;

//primero se pregunta la condicion y luego se ejecuta
while (numero < 10) {
    //aumentamos el numero en uno
    numero++;
    //mostramos ya el numero aumentado
    console.log(numero);
}
console.log("While con break");

//break
let numeroOne = 0;

while (numeroOne < 20) {
    if (numeroOne !== 10) {
        numeroOne++;
        console.log(numeroOne);
    }else{
        break;
    }
}


/**
 * BUCLE DO WHILE
 */
let number = 0;

//primero se ejecuta y luego se ejecuta
do {
    //aumentamos el numero en uno
    number++;
    //mostramos ya el numero aumentado
    console.log(number);
} while (number < 10);




/**
 * BUCLE FOR
 */
console.log("");
console.log("Bucle for");

for (let i = 10; i >= 0; --i) {
    const element = i;
    console.log(element);
}
console.log("");
console.log("imprimimos los numero del 1 al 10 pero sin mostrar el 5 con continue");

//imprimimos los numero del 1 al 10 pero sin mostrar el 5 con continue;
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; 
    }
    console.log(i);
    
}