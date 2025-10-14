let nombre = "pessdro";

//promise recibe dos calbacks:
/**
 * reject: cuando no se encuentra dato se ejecuta el resolve
 * resolve: cuando la operacion fue exitosa se ejecuta reject
 */
let verificarNombre = new Promise((resolve,reject)=>{
    if (nombre != "pedro") {
        reject("Nombre no encontrado");
    }else{
        resolve("Nombre encontrado");
    }
});

//el then lo vemos cuando se ejecuta el resolve, tonces para manejar el error utilizamos el catch
verificarNombre.then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
    
})

