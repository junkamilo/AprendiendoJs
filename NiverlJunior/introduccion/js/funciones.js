/**
 * FUNCIONES
 */
//creamos la funcion
function saludar() {
    let DatoUsuario = prompt("Hola como estas?");
    if (DatoUsuario == "bien") {
        alert("Me alegro");
    }else if(DatoUsuario == "mal"){
        alert("Tranquilo tiene tiene solucion");
    }
}
//llamamos la  funcion
saludar();

//funciones guardado en una variable
const saludarTwo = function() {
    let DatoUsuario = prompt("Hola como estas?");
    if (DatoUsuario == "bien") {
        alert("Me alegro");
    }else if(DatoUsuario == "mal"){
        alert("Tranquilo tiene tiene solucion");
    }
}

saludarTwo();


/**
 * 
 * @returns FUNCIONES CON RETURN
 */
let SumarNUmeros = function () {
    let a = 20;
    let b = 30;
    let result = a + b;
    return result
    //todo despues del return no se ejecutara
}

const resultadoTotal = SumarNUmeros();
console.log(resultadoTotal);


//parametros en las funciones
let suma = function (a,b) {
    const result = a + b;
    return result;
}

//pasamos los argumentos a la funcion
const sumaTotal = suma(20,30);
console.log("Suma total " + sumaTotal);

/**
 * FUNCIONES CON FLECHAS
 */
//funcione flecha con un solo parametro y una solo linea de codigo resumida
const funcionFlecha = nombre => console.log(`Hola ${nombre} como estas?`);

funcionFlecha("juan camilo")