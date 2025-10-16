const contentBody = document.getElementById("body");
const contentReloj = document.getElementById("content-reloj");
const contentHora = document.getElementById("content-hora");
const contentMinutos = document.getElementById("content-minutos");
const contentSegundos = document.getElementById("content-segundos");
const horareloj = document.getElementById("hora");
const minutoreloj = document.getElementById("minutos");
const segundoreloj = document.getElementById("segundos");

// creamos los elementos del segundo reloj
const horaAlarma = document.createElement("p");
const minutoAlarma = document.createElement("p");
const segundoAlarma = document.createElement("p");

// agregamos estilos (mismos que el primero)
horaAlarma.classList.add("time");
minutoAlarma.classList.add("time");
segundoAlarma.classList.add("time");

// creamos contenedor para el segundo reloj
const contentReloj2 = document.createElement("div");
contentReloj2.classList.add("content-reloj");

// creamos los contenedores internos del segundo reloj (como el primero)
const contentHora2 = document.createElement("div");
const contentMinutos2 = document.createElement("div");
const contentSegundos2 = document.createElement("div");

contentHora2.classList.add("reloj");
contentMinutos2.classList.add("reloj");
contentSegundos2.classList.add("reloj");

// insertamos los <p> dentro de sus divs
contentHora2.appendChild(horaAlarma);
contentMinutos2.appendChild(minutoAlarma);
contentSegundos2.appendChild(segundoAlarma);

// insertamos los divs dentro del contenedor principal del segundo reloj
contentReloj2.appendChild(contentHora2);
contentReloj2.appendChild(contentMinutos2);
contentReloj2.appendChild(contentSegundos2);

// agregamos el nuevo reloj al body
contentBody.appendChild(contentReloj2);

const horaActual = () => {
  const date = new Date();
  const hora = date.getHours();
  const minutos = date.getMinutes();
  const segundos = date.getSeconds();

  // actualizamos los textos en pantalla
  horareloj.textContent = hora;
  minutoreloj.textContent = minutos;
  segundoreloj.textContent = segundos;

  // devolvemos los valores numéricos
  return { hora, minutos, segundos };
};

// establecemos manualmente la hora de la alarma
const horaAlarmaFija = { hora: 17, minutos: 24, segundos: 30 };

const alarmaReloj = () => {
  const { hora, minutos, segundos } = horaAlarmaFija;

  // mostramos la alarma configurada
  horaAlarma.textContent = hora;
  minutoAlarma.textContent = minutos;
  segundoAlarma.textContent = segundos;

  return { hora, minutos, segundos };
};

setInterval(function () {
  let resultado = horaActual();
  let alarma = alarmaReloj();

  if (
    resultado.hora === alarma.hora &&
    resultado.minutos === alarma.minutos &&
    resultado.segundos === alarma.segundos
  ) {
    // Cuando la alarma suena, AÑADIMOS la clase para activar las animaciones
    contentBody.classList.add("alarm-active");
  } else {
    // Si no es la hora, QUITAMOS la clase para volver al estado normal
    contentBody.classList.remove("alarm-active");
  }
}, 1000);
