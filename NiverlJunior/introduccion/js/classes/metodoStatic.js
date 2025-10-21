class MetodoStatic {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  static saludo(instancia) {
    console.log(`Hola ${instancia.nombre}, ¿Es verdad que tienes ${instancia.edad} años?`);
  }
}

const persona = new MetodoStatic("juan", 22);
MetodoStatic.saludo(persona);



/**
 * 
 */
class Calcular {
  #total; // <-- propiedad privada

  constructor(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
    this.#total = this.number1 * this.number2; // calculamos el valor
  }

  // getter para mostrar el total sin permitir modificarlo
  get total() {
    return this.#total;
  }

  // si quisieras recalcularlo (opcional)
  resultado() {
    this.#total = this.number1 * this.number2;
    return this.#total;
  }
}

// Ejemplo de uso
const operacion = new Calcular(5, 3);
console.log(operacion.total); // ✅ 15

operacion.total = 100;        // 🚫 no cambia (ignorado en modo estricto)
console.log(operacion.total); // sigue siendo 15
