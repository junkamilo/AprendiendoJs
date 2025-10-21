const contentBody = document.querySelector("body");
const buttonPedir = document.createElement("button");
buttonPedir.textContent = "Pedir carta";
const buttonReiniciar = document.createElement("button");
buttonReiniciar.textContent = "Reiniciar partida"
contentBody.append(buttonPedir,buttonReiniciar);

//limite de la suma
const sumaTotal = 21;
const NumeroAgregados = [];


buttonPedir.addEventListener("click",()=>{
const number = Math.floor(Math.random() * 21) + 1;
    NumeroAgregados.push(number);
    console.log(NumeroAgregados);
    let sumaNumeros = 0;
    NumeroAgregados.forEach(element => {
        sumaNumeros += element;
    });
    verificarGanador(sumaNumeros);
});

buttonReiniciar.addEventListener("click", () => {
  location.reload();
});


const verificarGanador = (sumaNumeros)=>{
    if (sumaNumeros === sumaTotal){
        console.log("Ganastes la partida");
        buttonPedir.disabled = true;
    }else if(sumaNumeros > sumaTotal){
        console.log("Perdistes la partida");
        buttonPedir.disabled = true;
    }
}



