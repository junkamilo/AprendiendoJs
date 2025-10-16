class Objeto {
  constructor(){}                        // 1) Declara la clase `Objeto`. El constructor está vacío: no inicializa nada.
  hablar(){ console.log("hablando original"); } // 2) Define un método de instancia `hablar` en Objeto.prototype.
}

 // cambiar el prototipo explícitamente
const objeto = new Objeto();            // 3) Crea una instancia `objeto`. Internamente: objeto.__proto__ === Objeto.prototype


// 4) Obtiene el prototipo de `objeto` (es decir, Objeto.prototype)
//    y asigna un nuevo método `hablar` sobre ese prototipo,
//    reemplazando el `hablando original` para todas las instancias.
Object.getPrototypeOf(objeto).hablar = ()=> { 
  console.log("modificando via getPrototypeOf");
};


// 5) Crea otra instancia `a`. Al no tener su propia propiedad `hablar`,
//    la búsqueda del método sigue la cadena de prototipos y encuentra
//  //    el `hablar` que acabamos de asignar en Objeto.prototype.

const a = new Objeto();
a.hablar(); 
// -> "modificando via getPrototypeOf" 
// 6) Llama al método: imprime la cadena definida en el paso 4.


//practicamos
class SumaNumeros {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  sumas() {
    console.log(`Suma total de los dos numeros ${this.a} + ${this.b} = ${this.a + this.b}`);
  }
}

// crear instancia con valores
const numeros = new SumaNumeros(4, 5);

// modificar el método en el prototipo (forma clara)
SumaNumeros.prototype.sumas = function() {
  console.log(`Resta total de los dos numeros ${this.a} - ${this.b} = ${this.a - this.b}`);
};

const resul = new SumaNumeros(10, 3);
numeros.sumas(); // -> "Resta total... 4 - 5 = -1" (porque cambiamos el prototipo)
resul.sumas();       // -> "Resta total... 10 - 3 = 7"




