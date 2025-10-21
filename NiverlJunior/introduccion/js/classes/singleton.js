class Singleton{

    static instancia;
    nombre = '';

    constructor(nombre = ''){
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }
         Singleton.instancia = this;
         this.nombre = nombre;

    }
}

const instancia1 = new Singleton("juan");
const instancia3 = new Singleton("julian");

console.log(`Nombre de la instancia es: ${instancia1.nombre}`);
console.log(`Nombre de la instancia 3 es: ${instancia3.nombre}`);
