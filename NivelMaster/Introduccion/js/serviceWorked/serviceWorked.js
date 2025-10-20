// 1️⃣ Verificamos si el navegador soporta Service Workers
if ("serviceWorker" in navigator) {
  // 2️⃣ Registramos el archivo del SW
  navigator.serviceWorker
    .register("/NivelMaster/Introduccion/js/serviceWorked/sw.js")
    .then(() => {
      console.log("✅ Service Worker registrado correctamente");

      // 3️⃣ Esperamos a que esté listo y activo
      return navigator.serviceWorker.ready;
    })
    .then((registration) => {
      // 4️⃣ Cuando el SW está activo, le enviamos un mensaje
      if (registration.active) {
        console.log("💬 Enviando mensaje al Service Worker...");
        registration.active.postMessage("Hola, ¿cómo estás, worker?");
      } else {
        console.warn("⚠️ El Service Worker aún no está activo.");
      }
    })
    .catch((error) =>
      console.error("❌ Error al registrar o comunicar con el Service Worker:", error)
    );

  // 5️⃣ Escuchamos los mensajes que nos envíe el Service Worker
  navigator.serviceWorker.addEventListener("message", (event) => {
    console.log("📨 Mensaje recibido desde el Service Worker:");
    console.log(event.data); // aquí llega la respuesta del SW
  });

} else {
  console.log("🚫 Tu navegador no soporta Service Workers");
}

