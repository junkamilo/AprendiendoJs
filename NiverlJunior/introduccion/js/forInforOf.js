let animales = ["gatos","perros","serpientes","pajaros","monos","sapos"]
/**
 * FOR IN: nos devuelve la posicion del objeto
 */
for (const animal in animales) {
    console.log(animal);
}
console.log("");

//Recorrer propiedades de un objeto
const persona = {
  nombre: "Juan",
  edad: 25,
  ciudad: "Bogotá"
};
for (let key in persona) { 
    console.log(`${key}: ${persona[key]}`);
}






console.log("");



/**
 * FOR OF: nos devuelve el valor del objeto
 */
for (const animal of animales) {
    console.log(animal);
    
}


//calcular la suma total
console.log("");
console.log("Calculando la suma total con for of");

const numeros = [3, 7, 2, 9, 4];
let number = 0;
for (let element of numeros) {
    console.log(element);
    number = number + element;
}
console.log("la suma total es: " + number);

//calcular la suma total
console.log("");
console.log("Calculando las vocales en total con for of");

const palabra = "javascript";
let vocales = 0;
for (let element of palabra) {
    console.log(element);
    
    if (element == "a" || element == "e" || element == "i" || element == "o" || element == "u"){
        vocales += 1;
    }
}
console.log("vocales en total encontradas " + vocales);




