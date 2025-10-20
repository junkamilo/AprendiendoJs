"use strict";

if (!('Notification'  in window)) {
    console.log("Las notificaciones no estan disponibles en tu navegador");
}

//pedimos permiso a la notification para poder enviar notificaciones
Notification.requestPermission(()=>{
    //granted es cuando el usuario ya da el permiso a la notificacion
    if (Notification.permission == "granted") {
        console.log("permiso conseguido");
        new Notification("Primera notificacion");
    }
});