// 🧱 Clase base del Guerrero
class Guerrero {
  constructor(nombre, inventario = [], nombreArma, cantidadArma, valorArma) {
    this.nombre = nombre;
    this.inventario = inventario;
    this.nombreArma = nombreArma;
    this.cantidadArma = cantidadArma;
    this.valorArma = valorArma;
  }

  // 🗡️ Agregamos una nueva arma al inventario
  agregarCategoria() {
    this.inventario.push({
      nombreArma: this.nombreArma,
      cantidadArma: this.cantidadArma,
      valorArma: this.valorArma,
    });
  }

  // 🧾 Retorna información estructurada del jugador
  informacionJugador() {
    return {
      nombre: this.nombre,
      inventario: this.inventario,
    };
  }
}

// 🧠 Agregamos un método al prototipo de la clase
// (esto se hace fuera de la definición de la clase)
Guerrero.prototype.mostrarInventario = function () {
  console.log(`Inventario de ${this.nombre}:`);
  for (const { nombreArma, cantidadArma, valorArma } of this.inventario) {
    // 🎯 Usamos desestructuración aquí
    console.log(
      `- ${nombreArma} (Cantidad: ${cantidadArma}, Valor: ${valorArma})`
    );
  }
};

// 🔁 Función recursiva para buscar un arma en el inventario
Guerrero.prototype.buscarArma = function (nombreArma, index = 0) {
  // caso base
  if (index >= this.inventario.length) {
    console.log(`❌ El arma "${nombreArma}" no se encuentra en el inventario.`);
    return;
  }

  // caso recursivo
  const { nombreArma: armaActual } = this.inventario[index]; // desestructuración otra vez

  if (armaActual === nombreArma) {
    console.log(`✅ El arma "${armaActual}" está disponible en el inventario.`);
    return;
  }

  // llamada recursiva con el siguiente índice
  this.buscarArma(nombreArma, index + 1);
};

// 🧍‍♂️ Creamos un jugador con un inventario inicial
let jugador = new Guerrero("Juan", []);
jugador.nombreArma = "Espada";
jugador.cantidadArma = 2;
jugador.valorArma = 300;
jugador.agregarCategoria();

jugador.nombreArma = "Escudo";
jugador.cantidadArma = 1;
jugador.valorArma = 150;
jugador.agregarCategoria();

// 📜 Mostramos toda la info
console.log(jugador.informacionJugador());
jugador.mostrarInventario();

// 🔎 Buscamos un arma con recursión
jugador.buscarArma("Espada");
jugador.buscarArma("Lanza");


