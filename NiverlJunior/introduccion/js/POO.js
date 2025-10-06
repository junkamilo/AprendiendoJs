class animal {
    constructor(nombre, especie, edad, color) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    }

    presentarse() {
        console.log(`Hola, soy ${this.nombre}, un ${this.especie} de color ${this.color}.`);
    }
}


class Perro extends animal {
    constructor(nombre, especie, edad, color, tamanio) {
        super(nombre, especie, edad, color);
        this.tamanio = tamanio;
    }

    ladrar() {
        console.log("¡Guau guau!");
    }

    // Setter: cambia el nombre
    set setName(newName) {
        this.nombre = newName;
    }

    // Getter: obtiene el nombre
    get getName() {
        return this.nombre;
    }
}

// Creamos el objeto
const perro = new Perro("Yiyi", "perro", 2, "naranja con blanco", "pequeño");

// ✅ Usando el setter
perro.setName = "Luffy";

// ✅ Usando el getter
console.log(perro.getName); // Muestra: Luffy

perro.presentarse();
perro.ladrar();

