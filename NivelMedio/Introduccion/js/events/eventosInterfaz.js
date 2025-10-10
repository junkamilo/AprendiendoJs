const img = document.querySelector(".img-prueba")
//evento para cuando ocurre un error en la carga
img.addEventListener("error",()=>{
    console.log("Ha sucedido un error");
});

//evento de carga del sitio
window.addEventListener("load",()=>{
    console.log("Ha cargado el sitio");
});

//evento para cuando se ingresa a otro sitio
addEventListener("beforeunload",()=>{
    console.log("Te vas a ir a otro sitio");
});


//evento para ver la actualizacion del tamaño de la pantalla
addEventListener("resize",()=>{
    console.log("cambiando de tamaño");
    
});

//evento para saber que se ha hecho scroll
addEventListener("scroll",()=>{
    console.log("Se ha escroleado");
    
});

const input = document.querySelector(".input-prueba");

input.addEventListener("select",(e)=>{
    //utilizamos el select y transformamos los numeros a cadena de tetxo y lo mostramos en el contenedor
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let texttoCompleto = input.value;
    contenedor.innerHtml = texttoCompleto.substring(start,end);
    
});