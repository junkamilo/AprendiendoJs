class Vehiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  describir() {
    console.log(`Vehículo: ${this.marca} ${this.modelo}`);
  }

  encender() {
    console.log("Encendiendo el motor...");
  }
}

//declaramos la instancias
const carro = new Vehiculo("Toyota", "Corolla");
const moto = new Vehiculo("Yamaha", "FZ");

Vehiculo.prototype.describir = function(){
    console.log(`La marca del vehiculo es ${this.marca} y su modelo es ${this.modelo}`);
}

carro.describir();
moto.describir();



