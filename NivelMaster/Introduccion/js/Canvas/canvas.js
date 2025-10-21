const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Iniciamos un nuevo trazo
ctx.beginPath();
ctx.strokeStyle = "#48e";
ctx.fillStyle = "#000";
ctx.lineWidth = 10;

// Dibujamos dos líneas conectadas
ctx.moveTo(0, 0);
ctx.lineTo(100, 300);
ctx.lineTo(120, 350);
ctx.stroke();
ctx.closePath();

// Dibujamos un rectángulo con borde azul
ctx.strokeRect(50, 0, 400, 200);

// Lo rellenamos con color negro
ctx.fillRect(50, 0, 400, 200);
