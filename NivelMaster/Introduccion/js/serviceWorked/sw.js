let version = "version2";

// Se ejecuta al instalar el SW (solo una vez)
self.addEventListener("install", (e) => {
  console.log("Instalando Service Worker...");
  caches.open(version).then((cache)=>{
    cache.addAll("/NivelMaster/Introduccion/html/API.html").then(res=>{
        console.log("informacion cacheada");
    }).catch(e=>{
        console.log(e);
    })
  })
});

// Se ejecuta al activarse el SW
self.addEventListener("activate", () => {
  console.log("✅ Service Worker activo y listo para trabajar.");
  caches.keys().then(key=>{
    return Promise.all(
        key.map(cache=>{
            if (cache !== version) {
                console.log("Cache antiguo eliminado");
                return cache.delete;
            }
        })
    )
  })
});

// Intercepta cualquier petición de red
self.addEventListener("fetch", (e) => {
  e.responWith(
    fetch(e.request).then(res=>{
        console.log("todo salio bien");
    }).catch(e=>{
        caches.match(e.request);
    })
  );
});

// Recibe mensajes del navegador
self.addEventListener("message", (e) => {
  console.log("📥 Se ha recibido un mensaje del navegador:");
  console.log(e.data);

  // ✅ Respondemos al cliente que nos envió el mensaje
  if (e.source) {
    e.source.postMessage("👋 Hola navegador, soy el Service Worker. ¡Mensaje recibido!");
  }
});
