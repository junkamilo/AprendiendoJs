const input = document.querySelector(".input");

//keydown ocurre cuando una tecla se deja de presionar
input.addEventListener("keydown",()=>{
    console.log("una tecla fue presionado");
    
});

//keypress ocurre cuando una tecla se presiona
input.addEventListener("keypress",()=>{
console.log("un usuario presiono una tecla");

});

//onkeyup ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente
input.addEventListener("keyup",()=>{
    console.log("una tecla fue soltada");
});