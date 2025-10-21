//modo estricto js
"use strict";

//Importamos estilos globales
import "../src/style.css";

//Importamos el router
import { router } from "./router/router.js";

//Seleccionamos el contenedor principal
const app = document.getElementById("app");

//Cuando la página carga, ejecutamos el router
window.addEventListener("DOMContentLoaded", () => router(app));

//Cada vez que cambia el hash (#/Artistas, #/Home, etc.), volvemos a ejecutar el router
window.addEventListener("hashchange", () => router(app));

