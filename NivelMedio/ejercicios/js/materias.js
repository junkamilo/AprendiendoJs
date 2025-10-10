//seleccionamos el contenido principal
const body = document.querySelector("body");

//creamos los elementos
const tituloPrincipal = document.createElement("h1");
const contentform = document.createElement("form");
const labelNombre = document.createElement("label");
const inputNombre = document.createElement("input");
const labelEmail = document.createElement("label");
const inputEmail = document.createElement("input");
const labelSeleccion = document.createElement("label");
const seleccion = document.createElement("select");
const btnEnviar = document.createElement("button");
const resultado = document.createElement("div");

//array de materias
let materias = ["Sociales","Matemáticas","Inglés","Español","Biología"];
materias.forEach(materia => { // Cambiado a singular para claridad
    const optionMateria = document.createElement("option");
    optionMateria.textContent = materia;
    seleccion.append(optionMateria);
});

//agregamos texto
tituloPrincipal.textContent = "Solicitud de Recuperación";
labelNombre.textContent = "Nombre Completo del Estudiante:";
labelEmail.textContent = "Correo Electrónico de Contacto:";
labelSeleccion.textContent = "Materia a Recuperar:";
btnEnviar.textContent = "Entregar Solicitud";

//agregamos los atributos
labelNombre.setAttribute("for","nombre");
labelEmail.setAttribute("for","email");
labelSeleccion.setAttribute("for","seleccion");
inputNombre.setAttribute("type","text"); // Corregido a 'text'
inputNombre.setAttribute("id","nombre");
inputNombre.setAttribute("required", "");
inputNombre.setAttribute("placeholder", "Escribe aquí tu nombre...");
inputEmail.setAttribute("type","email");
inputEmail.setAttribute("id","email");
inputEmail.setAttribute("required", "");
inputEmail.setAttribute("placeholder", "ejemplo@correo.com");
seleccion.setAttribute("id","seleccion");
seleccion.setAttribute("required", "");
btnEnviar.setAttribute("type", "submit"); // Tipo de botón

//le añadimos los estilos
body.classList.add("body");
tituloPrincipal.classList.add("tituloPrincipal");
contentform.classList.add("form");
labelNombre.classList.add("label");
inputNombre.classList.add("input-field");
labelEmail.classList.add("label");
inputEmail.classList.add("input-field"); 
labelSeleccion.classList.add("label");
seleccion.classList.add("input-field");
btnEnviar.classList.add("submit-btn");

contentform.addEventListener('submit', (e) => { 
  e.preventDefault();
  const result = validarCampos(); // ahora usamos 'result' más descriptivo

  if (!result.isValid) {
    // Mostrar todos los mensajes concatenados
    resultado.innerHTML = result.messages.join("<br>");
    resultado.style.color = "red";
  } else {
    resultado.innerHTML = "Formulario enviado con éxito ✅";
    resultado.style.color = "green";
    contentform.reset();
  }
});


const validarCampos = () => {
  const errors = { name: null, email: null };
  const messages = [];

  const nombre = inputNombre.value.trim();
  const email = inputEmail.value.trim();

  // Validación nombre
  if (!nombre) {
    errors.name = "El nombre es obligatorio";
    messages.push(errors.name);
  } else if (nombre.length < 5) {
    errors.name = "El nombre no puede contener menos de 5 caracteres";
    messages.push(errors.name);
  } else if (nombre.length > 40) {
    errors.name = "El nombre no puede contener más de 40 caracteres";
    messages.push(errors.name);
  }

  // Validación email
  if (!email) {
    errors.email = "El correo electrónico es obligatorio";
    messages.push(errors.email);
  } else {
    // Regex sencillo, suficiente para la mayoría de casos
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Correo electrónico inválido";
      messages.push(errors.email);
    }
  }

  const isValid = messages.length === 0;
  return { isValid, errors, messages };
};


//añadimos los elementos al body principal
contentform.append(labelNombre,inputNombre,labelEmail,inputEmail,labelSeleccion,seleccion, btnEnviar,resultado);
body.append(tituloPrincipal,contentform);


