const welcome = () => {
  alert("Iniciando Programa");
  alert("Bienvenido AL programa Portal de Asistencias");
  alert("Ingresa los datos que se piden a los alummnos");
};
welcome();

let estudiantes = [];
let registros;
let reprovados = 0;
let aprovados = 0;

do {
  let nombreAlumno = prompt("Ingresa el nombre del alumno");
  let asistencias = parseInt(
    prompt("Ingresa cuantas inasistencias tiene este alumno")
  );

  estudiantes.push({ nombre: nombreAlumno, asistencia: asistencias });

  registros = prompt("¿Decea registrar otro Alumno? ingrese SI/NO");
} while (registros !== "no");

for (const estudiante of estudiantes) {
  if (estudiante.asistencia > 30) {
    console.log(`El estudiante: ${estudiante.nombre} con un Total de inasistencias: ${estudiante.asistencia} se encuentra REPROVADO`);
    reprovados += 1;
  } else if (estudiante.asistencia <= 30) {
    console.log(`El estudiante: ${estudiante.nombre} con un Total de inasistencias: ${estudiante.asistencia} se encuentra APROVADO`);
    aprovados += 1;
  }
}
