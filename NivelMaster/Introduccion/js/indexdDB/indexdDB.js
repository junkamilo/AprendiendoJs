//aca estamos solicitando abrir la base de datos
const BD = indexedDB.open("Database",1);

//validamos si no esta creada manda el mensaje que se creo y aparte muestra el mensaje se succes
BD.addEventListener("upgradeneeded",()=>{
    //aca obtenemos el resultado de la solicitud al abrir la BD
    const db = BD.result;
    //creamos un almacen de objetos, le damos un nombre como primer argumento y el segundo son configuraciones como cuando se la damos a una tabla em sql
    db.createObjectStore("nombres",{
        autoIncrement: true
    });
});
//validamos que la BD esta todo bien o no gay error
BD.addEventListener("success",()=>{
    console.log("Todo solio correctamente");
})
//validamos que hubo un error con la BD
BD.addEventListener("error",()=>{
    console.log("Hubo un error on la base de datos");
})

//creamos objetos
const addObjetos = (objeto)=>{
    //obtenemos el resultado
    const db = BD.result;
    //abrimos una transaccion o operacion
    //hacemos una transacciona al DB y el primer argumento ubicamos a cual objeto pedimos esa transaccion y el segundo argumento que vamos hacer con ese objeto.
    //readwrite = leer y escribir, modificar base de datos
    //readonly = leer
    const transation = db.transaction("nombres","readwrite");
    //la opracion que abrimos le decimos que la ejecute en ese almacen de objetos
    const objEstore = transation.objectStore("nombres");
    objEstore.add(objeto);
    transation.addEventListener("complete",()=>{
        console.log("Objeto agregado correctamente");
    });

    //lo copiamos en consola addObjetos({nombre:"juan camilo"}); = creamos el objeto
}

//leemos los objetos creados
const readObjetos = ()=>{
    const db = BD.result;
    const transation = db.transaction("nombres","readonly");
    const objEstore = transation.objectStore("nombres");
    const cursor = objEstore.openCursor();
    cursor.addEventListener("success",()=>{
        if(cursor.result){
            console.log(cursor.result.value);
            cursor.result.continue();
        }else console.log("todos los datos fueron leidos");
        
    })
    //lo copiamos en log: readObjetos(); = lee los objetos
}

//editamos los objetos
const modificarObjetos = (key,objeto)=>{
    const db = BD.result;
    const transation = db.transaction("nombres","readwrite");
    const objEstore = transation.objectStore("nombres");
    //con putlo modificamos
    objEstore.put(objeto, key);
    transation.addEventListener("complete",()=>{
        console.log("Objeto modificado correctamente");
    });

    //lo copiamos en consola modificarObjetos(3,{nombre: "juan camilo"}); = modificamos ese objeto #3
}

//editamos los objetos
const eliminarObjetos = (key)=>{
    const db = BD.result;
    const transation = db.transaction("nombres","readwrite");
    const objEstore = transation.objectStore("nombres");
    //con putlo modificamos
    objEstore.delete(key);
    transation.addEventListener("complete",()=>{
        console.log("Objeto eliminado correctamente");
    });

    //lo copiamos en consola eliminarObjetos(3); = eliminamos ese objeto #3
}