"use strict";

console.log("===== 🌐 INFORMACIÓN DEL NAVEGADOR =====");

// 🧭 Identificación básica
console.log("Código del navegador:", navigator.appCodeName);
console.log("Nombre oficial:", navigator.appName);
console.log("Versión oficial:", navigator.appVersion);
console.log("Motor del navegador:", navigator.product);
console.log("User Agent:", navigator.userAgent);

// ⚙️ Sistema y hardware
console.log("Sistema operativo / Plataforma:", navigator.platform);
console.log("Procesadores lógicos disponibles:", navigator.hardwareConcurrency);

// 🌍 Idiomas
console.log("Idioma principal:", navigator.language);
console.log("Idiomas disponibles:", navigator.languages);

// 📶 Conectividad
console.log("Conexión del navegador:", navigator.connection);
console.log("¿Está en línea?:", navigator.onLine);

// 🍪 Cookies y permisos
console.log("Cookies habilitadas:", navigator.cookieEnabled);
console.log("Permisos del navegador:", navigator.permissions);

// 📍 Geolocalización
console.log("Geolocalización disponible:", navigator.geolocation);

// 🧩 Extensiones y complementos
console.log("Cantidad de plugins:", navigator.plugins.length);
console.log("Listado de plugins:", navigator.plugins);
console.log("Tipos MIME soportados:", navigator.mimeTypes);

// 🧰 API del navegador
console.log("Service Worker:", navigator.serviceWorker);

// 🏁 Fin del reporte
console.log("===== ✅ FIN DEL REPORTE DEL NAVEGADOR =====");
