//informacion sobrescreen

// 🧠 El objeto "screen" proporciona información sobre la pantalla del dispositivo
// como su tamaño total, área utilizable, profundidad de color, etc.

// 📏 1️⃣ Ancho total de la pantalla (en píxeles)
const anchoTotal = screen.width;
console.log("Ancho total de la pantalla:", anchoTotal, "px");

// 📏 2️⃣ Ancho disponible (sin contar barra de tareas o dock)
const anchoDisponible = screen.availWidth;
console.log("Ancho disponible para el navegador:", anchoDisponible, "px");

// 📐 3️⃣ Altura total de la pantalla (en píxeles)
const alturaTotal = screen.height;
console.log("Altura total de la pantalla:", alturaTotal, "px");

// 📐 4️⃣ Altura disponible (sin la barra de tareas)
const alturaDisponible = screen.availHeight;
console.log("Altura disponible para el navegador:", alturaDisponible, "px");

// 🎨 5️⃣ Profundidad de píxeles de la pantalla (cantidad de bits usados por cada píxel)
const profundidadPixel = screen.pixelDepth;
console.log("Profundidad de píxeles (pixelDepth):", profundidadPixel, "bits");

// 🌈 6️⃣ Profundidad de color (cantidad de bits usados para representar los colores)
const profundidadColor = screen.colorDepth;
console.log("Profundidad de color (colorDepth):", profundidadColor, "bits");

// 🧾 7️⃣ Resumen general en formato más claro
console.log(`
INFORMACIÓN DE LA PANTALLA
-----------------------------
🔹 Ancho total: ${anchoTotal}px
🔹 Ancho disponible: ${anchoDisponible}px
🔹 Altura total: ${alturaTotal}px
🔹 Altura disponible: ${alturaDisponible}px
🔹 Profundidad de píxeles: ${profundidadPixel} bits
🔹 Profundidad de color: ${profundidadColor} bits
`);



