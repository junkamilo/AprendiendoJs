// 📍 Accedemos a la geolocalización del navegador
const geolocalizacion = navigator.geolocation;

// ✅ Función que se ejecuta si todo sale bien
const verificar = (pos) => {
    console.log("✅ Posición obtenida:", pos);

    // Extraemos coordenadas
    const latitud = pos.coords.latitude;
    const longitud = pos.coords.longitude;

    console.log(`🌎 Latitud: ${latitud}, Longitud: ${longitud}`);

    // Aquí podrías usar una API o mapa para mostrar la ubicación
};

// ⚠️ Función que se ejecuta si hay error
const error = (e) => {
    console.error("❌ Error al obtener ubicación:", e.message);
};

// ⚙️ Opciones de precisión y tiempo
const options = {
    enableHighAccuracy: true, // más precisión GPS
    timeout: 3000,            // tiempo máximo de espera (ms)
    maximumAge: 0             // no usar cache
};

// 🚀 Solicitamos la ubicación actual
geolocalizacion.getCurrentPosition(verificar, error, options);

// 🔍 Mostramos el objeto geolocalización (para ver sus métodos)
console.log("Objeto geolocalización:", geolocalizacion);


