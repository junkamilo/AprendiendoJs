// 1️⃣ Función que simula guardar un estudiante
function guardarEstudiante(nombre, callback) {
  console.log(`Guardando estudiante "${nombre}" en la base de datos...`);

  // Simulamos un proceso que tarda (ejemplo: conexión a BD)
  setTimeout(() => {
    console.log(`✅ Estudiante "${nombre}" guardado correctamente.`);

    // 3️⃣ Llamamos al callback después del proceso
    callback(nombre);
  }, 2000); // 2 segundos de espera
}

// 2️⃣ Función callback que se ejecutará cuando se guarde el estudiante
function mostrarConfirmacion(nombre) {
  console.log(`🎓 Confirmación: El estudiante ${nombre} fue registrado con éxito.`);
}

// 3️⃣ Función principal que usa la lógica
function registrarEstudiantes() {
  const estudiantes = ["Ana", "Carlos", "Sofía"];

  console.log("Iniciando registro de estudiantes...\n");

  // Recorremos el array y llamamos guardarEstudiante por cada uno
  for (let estudiante of estudiantes) {
    guardarEstudiante(estudiante, mostrarConfirmacion);
  }
}

// 4️⃣ Llamamos a la función principal
registrarEstudiantes();
