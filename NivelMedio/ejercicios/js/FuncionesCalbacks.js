/**
 * Crea una función que reciba un número y otra función (callback).
    El callback debe ejecutarse solo si el número es mayor que 10.
 */

const funcionNumero = (number, numberMayor) => {
  if (number > 10) {
    const resultado = numberMayor(number);
    console.log(resultado);
  } else {
    console.log(`El numero ${number} ingresado no es mayor a 10`);
  }
};

const numberMayor = (number) => {
  return `El ${number} ingresado es mayor a 10`;
};

// funcionNumero(8,numberMayor);

/**
 * Haz una función que reciba un arreglo y un callback.
El callback debe transformar todos los valores del arreglo en mayúsculas.
 */

const nombres = [
  "juan camilo",
  "camila",
  "jose",
  "liliana",
  "beltran",
  "mama yiya",
];

const nombresUsuarios = (nombres) => {
  for (let i = 0; i < nombres.length; i++) {
    const element = nombres[i];
    const resultado = Mayusculas(element);
    console.log(resultado);
  }
};

const Mayusculas = (element) => {
  return element.toUpperCase();
};

// nombresUsuarios(nombres,nombresUsuarios);

/**
 * Crea una función que simule un proceso de carga (por ejemplo: “Cargando...”),
y usa un callback para mostrar un mensaje cuando el proceso termine.
 */
const tiempo = () => {
  console.log("cargando...");

  CalcularTiempo();
};

const CalcularTiempo = () => {
  setTimeout(() => {
    console.log("Terminado");
  }, 3000);
};

// tiempo(CalcularTiempo);


/**
 * Crea una promesa que se resuelva si un número aleatorio es mayor que 10, y se rechace si no lo es.
 */

const numberAleatorio = new Promise((resolve,reject)=>{
    const aleatorio = Math.floor(Math.random() * 15) + 1;
    if (aleatorio > 10) {
        resolve(aleatorio);
    }else{
        reject(`El numero ${aleatorio} no es mayor que 10`);
    }
    
});
numberAleatorio.then((aleatorio)=>{
    console.log(`El numero ${aleatorio} es mayor que 10`);
}).catch((error)=>{
    console.log(error);
});
