console.log(localStorage);

/**
 * local store
 */

//añadimos al localStore, asignamos
localStorage.setItem("nombre","jose Beltran");

//ingresamos a la iunformacion añadida me motrara el nombre en este caso jose beltran, obtenemos
console.log(localStorage.getItem("nombre"));

/**
 * sesion store, minetras se mentiene abierto almacena el valor pero cuando se cierra borra la informacion
 */
sessionStorage.setItem("nombre","juan camilo");

console.log(sessionStorage.getItem("nombre"));

//eliminaos la sesion a los 2 segundos
setTimeout(()=>{
    sessionStorage.removeItem("nombre");
},2000);


