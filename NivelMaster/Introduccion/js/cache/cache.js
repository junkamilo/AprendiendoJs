"use strict";

//abrimos la cache
caches.open("archivos").then(cache =>{
    //agregamos un archivo a la cahe
    //cache.add("/NivelMaster/Introduccion/js/cache/cache.js");

    //agregamos varios archivos a la cache
    // cache.addAll(["/NivelMaster/Introduccion/html/API.html", "/NivelMaster/Introduccion/html/cache.html","/NivelMaster/Introduccion/html/Filerider.html"]);

    //nos devuelve los archivos que ya estan en cache, nos devuelve una promesa, por ende devemos utilizar un .then() para mirar el valor que nos devuelve
    // cache.matchAll("/NivelMaster/Introduccion/html/API.html").then(res=>{
    //     console.log(res);
    // });

    //eliminamos un archivo de la cache
    cache.delete("/NivelMaster/Introduccion/html/API.html");
});