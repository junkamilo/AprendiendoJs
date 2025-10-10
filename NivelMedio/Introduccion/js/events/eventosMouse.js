const doubleClick = document.querySelector(".doubleClick");
const MouseOver = document.querySelector(".MouseOver");
const MouseOut = document.querySelector(".MouseOut");
const contextMenu = document.querySelector(".contextMenu");
const mouseenter = document.querySelector(".mouseenter");
const mousemove = document.querySelector(".mousemove");
const mouseleave = document.querySelector(".mouseleave");
const mousedowm = document.querySelector(".mousedowm");
const mouseup = document.querySelector(".mouseup");

//evento dobleckick
doubleClick.addEventListener("dblclick",()=>{
    alert("doble click");
});

//mouse over cuando el puntero se mueve sobre un elemento o sobre sus hijos
MouseOver.addEventListener("mouseover",()=>{
    alert("Encima del boton");
});

//mouse out, cuando el puntero sale de su elemento
MouseOut.addEventListener("mouseout",()=>{
    alert("Saliendo del boton");
});


//contextMenu click derecho, como abrir menu con el click derecho pero tiene que ser encima del elemento
contextMenu.addEventListener("contextmenu",()=>{
    alert("Clic derecho");
});

//mouseenter, ocurre cuando el puntero se mueve sobre un elemento
mouseenter.addEventListener("mouseenter",()=>{
    alert("puntero encima");
});

//mousemove, ocurre cuando el puntero se mueve mientras esta sobre el elemento
mousemove.addEventListener("mousemove",()=>{
    alert("Moviendose en el boton");
});

//mouseleave, ocurre cuando el puntere primero se mueve dentro del elemento y luego sale del elemento es alli donde se ejecuta el evento mientras esta fuera del elemento.
mouseleave.addEventListener("mouseleave",()=>{
    alert("Moviendose fuera del elemento");
});

//ocurre cuando tenemos el click dentro del elemento
mousedowm.addEventListener("mousedown",()=>{
    alert("click dentro del elemento");
});

//ocurre cuando soltamos el click sobre un elemento
mouseup.addEventListener("mouseup",()=>{
    alert("Soltaste el click");
});