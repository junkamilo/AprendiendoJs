const calculadora = () => {
  let menuUsuario;
  alert("Bienvenido a la calculadora");
  alert("Elige la opcion");

  do {
    alert(`1) SUMA \n2) RESTA \n3) MULTIPLICACIÓN \n4) DIVISIÓN \n5) POTENCOA \n6) RAIZ CUADRADA \n7) RAIZ CUBICA \n8) SALIR`);
    menuUsuario = parseInt(prompt("Ingresa el valor"));
    eleccionMenu(menuUsuario);
  } while (menuUsuario != 8);
};
const eleccionMenu = (menuUsuario) => {
  if (menuUsuario === 1) {
    suma();
  } else if (menuUsuario === 2) {
    resta();
  } else if (menuUsuario === 3) {
    multiplicacion();
  } else if (menuUsuario === 4) {
    division();
  } else if (menuUsuario === 5) {
    potencia();
  } else if (menuUsuario === 6) {
    raizCuadrada();
  } else if (menuUsuario === 7) {
    raizCubica();
  } else {
    alert("Saliendo del programa...");
  }
};
// FUNCION DE SUMA
const suma = () => {
  let arraySuma = [];
  let sumaAcumulada = 0;
  let numero;

  do {
    numero = parseInt(prompt("Ingresa un número a sumar (0 para terminar):"));
    if (numero !== 0) arraySuma.push(numero);
  } while (numero !== 0);

  console.log("Los números que ingresaste para sumar fueron:");
  for (const num of arraySuma) {
    console.log(num);
    sumaAcumulada += num;
  }

  console.log("Resultado total de la suma es: " + sumaAcumulada);
};

// FUNCION DE RESTA
const resta = () => {
  let arrayResta = [];
  let numero;

  do {
    numero = parseInt(prompt("Ingresa un número a restar (0 para terminar):"));
    if (numero !== 0) arrayResta.push(numero);
  } while (numero !== 0);

  console.log("Los números que ingresaste para restar fueron:");
  console.log(arrayResta);

  let restaAcumulada = arrayResta[0] || 0; // Primer número como base
  for (let i = 1; i < arrayResta.length; i++) {
    restaAcumulada -= arrayResta[i];
  }

  console.log("Resultado total de la resta es: " + restaAcumulada);
};

// FUNCION DE MULTIPLICACION
const multiplicacion = () => {
  let arrayMultiplicacion = [];
  let numero;

  do {
    numero = parseInt(
      prompt("Ingresa un número a multiplicar (0 para terminar):")
    );
    if (numero !== 0) arrayMultiplicacion.push(numero);
  } while (numero !== 0);

  console.log("Los números que ingresaste para multiplicar fueron:");
  console.log(arrayMultiplicacion);

  let multiplicacionAcumulada = 1; // Neutro multiplicativo
  for (const num of arrayMultiplicacion) {
    multiplicacionAcumulada *= num;
  }

  console.log(
    "Resultado total de la multiplicación es: " + multiplicacionAcumulada
  );
};

// FUNCION DE DIVISION
const division = () => {
  let arrayDivision = [];
  let numero;

  do {
    numero = parseInt(prompt("Ingresa un número a dividir (0 para terminar):"));
    if (numero !== 0) arrayDivision.push(numero);
  } while (numero !== 0);

  console.log("Los números que ingresaste para dividir fueron:");
  console.log(arrayDivision);

  let divisionAcumulada = arrayDivision[0] || 0; // Primer número como base
  for (let i = 1; i < arrayDivision.length; i++) {
    divisionAcumulada /= arrayDivision[i];
  }

  console.log("Resultado total de la división es: " + divisionAcumulada);
};

// FUNCION DE POTENCIA
const potencia = () => {
  let base = parseFloat(prompt("Ingresa la base:"));
  let exponente = parseFloat(prompt("Ingresa el exponente:"));
  let resultado = Math.pow(base, exponente);
  console.log(`El resultado de ${base} elevado a la ${exponente} es: ${resultado}`);
}

// FUNCION DE RAIZ CUADRADA
const raizCuadrada = () => {
    let numero = parseFloat(prompt("Ingresa un número para calcular su raíz cuadrada:"));
    let resultado = Math.sqrt(numero);
    console.log(`La raíz cuadrada de ${numero} es: ${resultado}`);
}

// FUNCION DE RAIZ CUBICA
const raizCubica = () => {
    let numero = parseFloat(prompt("Ingresa un número para calcular su raíz cúbica:"));
    let resultado = Math.cbrt(numero);
    console.log(`La raíz cúbica de ${numero} es: ${resultado}`);
}

calculadora();