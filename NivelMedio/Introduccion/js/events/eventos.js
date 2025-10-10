const button = document.querySelector(".button");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");

//manejador de evento onclick event handlers
button.onclick = ()=>{
    alert("Hola");
};

//manejador de eventos Event listeners
button2.addEventListener("click",saludar);
//para agregar una funcion a un evento, una funcion en flecha no funciona
function saludar(){
    alert("Hola desde la funcion");
}

//evento con funcion flecha
button3.addEventListener("click",()=>{
    alert("Hola con funcion flecha");
});

//objeto de evento
button4.addEventListener("click",(event)=>{
    //con taget capturamos al elemento que se le hizo el evento
    console.log(event.target);
});

//flujos de evento o "event flow"
//existen event Bubbling vs Event Capturing
//el event Bubbling es el que esta por defeult y se ejecuta desde el mas especifico hasta el menos especifico, en este caso se ejecutara el boton que es el mas especifico y luego el padre que es el menos especifico, ya que el boton esta dentro del contentPadre.
const contentBody = document.querySelector(".content-button");
const button5 = document.querySelector(".button5");

//si le pasamos el true, se ejecutara primero el que tiene el true ya que es el mas especifico y luego se ejecutaran los demas.
contentBody.addEventListener("click",(e)=>{
    alert("Click al contenedor");
});
//stopPropagation, solo ejecutara al elemento que se le esta haciendo el evento y no se ejecutara en los demas elementos, paramos la propagacion.
button5.addEventListener("click",(e)=>{
    alert("Click al boton");
    e.stopPropagation();
});


