//Metodo que duvuelva la raiz cuadrada de un numero
const raizCuadrada = (numero)=>{
    return Math.sqrt(numero);
}
console.log(raizCuadrada(9));

//Metodo que devuelve la raiz cubica de un numero
const raizCubica = (numero)=>{
    return Math.cbrt(numero);
}
console.log(raizCubica(27));

//Metodo que devuelve el numero maximo de una serie de numeros
const numeroMaximo = (numeros)=>{
    return Math.max(...numeros);
}  
console.log(numeroMaximo([1,2,3,4,5,6,7,8,9,10]));

//Metodo que devuelve el numero minimo de una serie de numeros
const numeroMinimo = (numeros)=>{
    return Math.min(...numeros);
}
console.log(numeroMinimo([1,2,3,4,5,6,7,8,9,10]));

//Metodo que devuelve un numero aleatorio entre 0 y 1
const numeroAleatorio = ()=>{
    //nos devuelve un numero aleatorio entre 0 y 100
    let numero = Math.random()*100;
    //redondeamos el numero
    numero = Math.round(numero);
    return numero;
}
console.log(numeroAleatorio());

//Metodo que devuelve el valor redondeado de un numero hacia abajo
const redondearAbajo = (numero)=>{
    return Math.floor(numero);
}
console.log(redondearAbajo(4.7));

//Metodo que devuelve el valor redondeado de un numero hacia arriba
const redondearArriba = (numero)=>{
    return Math.ceil(numero);
}
console.log(redondearArriba(4.1));

//Metodo que elimina los decimales de un numero
const eliminarDecimales = (numero)=>{
    return Math.trunc(numero);
}
console.log(eliminarDecimales(4.9));
