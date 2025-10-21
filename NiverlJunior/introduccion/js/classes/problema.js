const camilo = {
    nombre: 'Juan camilo',
    edad: 40,
    //asignamos un metodo dentro del objeto
    informacion(){
        console.log(`Nombre: ${this.nombre} , Edad: ${this.edad}`); 
    }
}
//accedemos al metodo del objeto
camilo.informacion();

const pedro = {
    nombre: 'Juan camilo',
    edad: 40
}
const melissa = {
    nombre: 'Juan camilo',
    edad: 40
}

function Persona(nombre,edad) {
    console.log("Se ejecuto esta linea");

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`EL nombre es ${this.nombre} y la edad es ${this.edad}`);
    }
}

//instanciamos la clase persona para crear un nuevo obejto
const maria = new Persona("Maria",25)
console.log(maria);
//llamamos al metodo de persona
maria.imprimir();
