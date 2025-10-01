/**Operadores Arimeticos */
//operador suma
const suma = 50 + 40;
//oeprador resta
const resta = 50 - 10;
//operador division
const divison = 50 / 2;
//operador de multiplicacion
const multiplicacion = 10 * 2;
//operador incremento
let incremente = suma++;
//operador decremento
let decremento = suma--;
//operador exponenciación
let exponenciación = suma ** 2;
//operador negacion, pasar el numero a negativo
let negacion = -suma;



/**Operadores Logicos */
//operador logico (O) devuelve true si algunos de los dos valores es true
let c = a || b;
//operador logico (Y) devuelve true cuando los dos valores es true
let f = a && b;
//operador logico (NOT) negamos un valor ejemplo !true va dar como resultado false
let p = !a;




/**operadores de comparacion */
let a = 10;
let b = 50;
//comparacion de igual
a == b;
//comparacion de strictamente igual ejemplo type int === int
a === b;
//comparacion de negacion distinto
a != b;
//comparacion de mayor
a > b;
//comparacion de mayor igual
a >= b;
//comparacion de menor
a < b;
//comparacion de menor igual
a <= b;




/**Operadores de aignacion */
let number = 100;
console.log("Numero de inicio " + number);

console.log("");

//Asignacion de suma
number += 10;
console.log("Agregamos Asignacion de suma += 10: " + number);
console.log("");

//Asignacion de resta
number -= 5;
console.log("Agregamos Asignacion de resta -= 5 : " + number);
console.log("");

//Asignacion de multiplicacion
number *= 5;
console.log("Agregamos Asignacion de multiplicacion *= 5 : " + number);
console.log("");

//Asignacion de Division
number /= 5;
console.log("Agregamos Asignacion de division /= 5 : " + number);
console.log("");

//Asignacion de residuo
number %= 2;
console.log("Agregamos Asignacion de residuo %= 5 : " + number);
console.log("");

number = 20;

//Asignacion de exponenciación 
number **=5; //elevamos el numero 20 a la 5 ejemplo 20 * 20 * 20 * 20 * 20 ;
console.log("Agregamos Asignacion de exponenciación  **= 5 : " + number);
console.log("");
