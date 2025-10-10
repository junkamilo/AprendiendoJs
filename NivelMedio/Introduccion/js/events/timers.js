//el codigo dentro de setTimeout se ejecutara luego de que pasen 2 segundos
const tiempo = setTimeout(()=>{
    console.log("Saluando luego de 2 segundos");
},2000);

//eliminamos la ejecucion del temporizador Timeout
clearTimeout(tiempo);

const contentBody = document.querySelector("body");

const color = ()=> {
    contentBody.style.backgroundColor = "red";
}
//setTimeout con funcion que se ejecutara a los 2 segundos
setTimeout(color,2000);


//ejecutamos la funcion cada dos segundos
const temporizador = setInterval(()=>{
        contentBody.style.backgroundColor = "blue";
        console.log("hola");
},2000);

//eliminamos la ejecucion del temporizador Timeout
clearTimeout(temporizador);