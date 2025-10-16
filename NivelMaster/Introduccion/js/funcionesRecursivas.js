// Las "clausuras" (closures) son funciones que recuerdan
// el entorno en el que fueron creadas (sus variables externas).

// 1️⃣ Definimos una función que recibe un parámetro 'nombre'
const saludar = (nombre) => {
  // 2️⃣ Esta función interna accede a 'nombre'
  // aunque no lo declare dentro de sí misma.
  // ⚙️ Esto es lo que crea la clausura.
  return function () {
    console.log(nombre);
  };
};

// 3️⃣ Ejecutamos 'saludar' con el argumento "juan camilo"
//    y guardamos el resultado en la constante 'saludo'.
//    Ojo: lo que se guarda no es un string, sino una FUNCIÓN.
const saludo = saludar("juan camilo");

// 4️⃣ Ahora ejecutamos la función que se devolvió.
//    Aunque 'saludar' ya terminó de ejecutarse,
//    la función interna aún recuerda el valor de 'nombre'.
saludo(); // -> "juan camilo"

//funciones clausuras con el parametro rest...

const numeros = () => {
    let sumaTotal = 0; // estado interno (clausura)

    const sumaNumeros = function(...num) {
        for (let valor of num) {
            sumaTotal += valor; // ahora sí suma los valores reales
        }
        console.log("Suma total acumulada: " + sumaTotal);
    }

    return sumaNumeros;
}

// Ejemplo de uso:
const sumTotal = numeros();
sumTotal(1, 2, 3); // Suma total acumulada: 6
sumTotal(4, 5);    // Suma total acumulada: 15 (mantiene el valor anterior)