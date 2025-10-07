class inscripcion {
  matematicas() {
    let estudiantes = [
      "Ana",
      "Luis",
      "Carlos",
      "Marta",
      "Sofia",
      "Diego",
      "Lucia",
      "Jorge",
      "Elena",
      "cofla",
      "maria",
      "jose",
      "pedro",
      "juan",
      "luis",
      "carlos",
      "ana",
      "marta",
      "sofia",
      "camilo",
    ];
    return { estudiantes };
  }
  sociales() {
    let estudiantes = [
      "Ana",
      "Luis",
      "Carlos",
      "Marta",
      "Sofia",
      "Diego",
      "Lucia",
      "Jorge",
      "Elena",
      "cofla",
      "maria",
      "jose",
      "pedro",
      "juan",
      "luis",
      "carlos",
      "ana",
      "marta",
      "sofia",
    ];
    return { estudiantes };
  }
  naturales() {
    let estudiantes = [
      "Ana",
      "Luis",
      "Carlos",
      "Marta",
      "Sofia",
      "Diego",
      "Lucia",
      "Jorge",
      "Elena",
      "cofla",
      "maria",
      "jose",
      "pedro",
      "juan",
      "luis",
      "carlos",
      "ana",
      "marta",
      "sofia",
      "camilo",
    ];
    return { estudiantes };
  }
  lenguaje() {
    let estudiantes = [
      "Ana",
      "Luis",
      "Carlos",
      "Marta",
      "Sofia",
      "Diego",
      "Lucia",
      "Jorge",
      "Elena",
      "cofla",
      "maria",
      "jose",
      "pedro",
      "juan",
      "luis",
      "carlos",
      "ana",
      "marta",
      "sofia",
    ];
    return { estudiantes };
  }
  ingles() {
    let estudiantes = [
      "Ana",
      "Luis",
      "Carlos",
      "Marta",
      "Sofia",
      "Diego",
      "Lucia",
      "Jorge",
      "Elena",
      "cofla",
      "maria",
      "jose",
      "pedro",
      "juan",
      "luis",
      "carlos",
      "ana",
      "marta",
      "sofia",
      "camilo",
    ];
    return { estudiantes };
  }
  educacionFisica() {
    let estudiantes = [
      "Ana",
      "Luis",
      "Carlos",
      "Marta",
      "Sofia",
      "Diego",
      "Lucia",
      "Jorge",
      "Elena",
      "cofla",
      "maria",
      "jose",
      "pedro",
      "juan",
      "luis",
      "carlos",
      "ana",
      "marta",
      "sofia",
    ];
    return { estudiantes };
  }
  arte() {
    let estudiantes = [
      "Ana",
      "Luis",
      "Carlos",
      "Marta",
      "Sofia",
      "Diego",
      "Lucia",
      "Jorge",
      "Elena",
      "cofla",
      "maria",
      "jose",
      "pedro",
      "juan",
      "luis",
      "carlos",
      "ana",
      "marta",
      "sofia",
      "camilo",
    ];
    return { estudiantes };
  }
  musica() {
    let estudiantes = [
      "Ana",
      "Luis",
      "Carlos",
      "Marta",
      "Sofia",
      "Diego",
      "Lucia",
      "Jorge",
      "Elena",
      "cofla",
      "maria",
      "jose",
      "pedro",
      "juan",
      "luis",
      "carlos",
      "ana",
      "marta",
      "sofia",
      "camilo",
      "luis miguel",
    ];
    return { estudiantes };
  }
  tecnologia() {
    let estudiantes = [
      "Ana",
      "Luis",
      "Carlos",
      "Marta",
      "Sofia",
      "Diego",
      "Lucia",
      "Jorge",
      "Elena",
      "cofla",
      "maria",
      "jose",
      "pedro",
      "juan",
      "luis",
      "carlos",
      "ana",
      "marta",
      "sofia",
    ];
    return { estudiantes };
  }
  informatica() {
    let estudiantes = [
      "Ana",
      "Luis",
      "Carlos",
      "Marta",
      "Sofia",
      "Diego",
      "Lucia",
      "Jorge",
      "Elena",
      "cofla",
      "maria",
      "jose",
      "pedro",
      "juan",
    ];
    return { estudiantes };
  }
  filosofia() {
    let estudiantes = [
      "Ana",
      "Luis",
      "Carlos",
      "Marta",
      "Sofia",
      "Diego",
      "Lucia",
      "Jorge",
      "Elena",
      "cofla",
      "maria",
      "jose",
      "pedro",
      "juan",
      "luis",
      "carlos",
      "ana",
      "marta",
      "sofia",
    ];
    return { estudiantes };
  }
  historia() {
    let estudiantes = [
      "Ana",
      "Luis",
      "Carlos",
      "Marta",
      "Sofia",
      "Diego",
      "Lucia",
      "Jorge",
      "Elena",
      "cofla",
      "maria",
      "jose",
      "pedro",
      "juan",
      "luis",
      "carlos",
      "ana",
    ];
    return { estudiantes };
  }
}
let inscribir = new inscripcion();

let inscribirMateria = () => {
  let materia = prompt(
    "¿A que materia desea inscribirse? \n 1. Matematicas \n 2. Sociales \n 3. Naturales \n 4. Lenguaje \n 5. Ingles \n 6. Educacion Fisica \n 7. Arte \n 8. Musica \n 9. Tecnologia \n 10. Informatica \n 11. Filosofia \n 12. Historia"
  );
  if (materia == 1) {
    let estudiante = inscribir.matematicas().estudiantes;
    if (estudiante.length >= 20) {
      alert("Lo siento, la materia de Matematicas ya esta llena");
      {
      }
    } else {
      let nombre = prompt(
        "Ingrese su nombre para inscribirse a la materia de Matematicas"
      );
      estudiante.push(nombre);
      alert(
        "Felicidades " + nombre + " te has inscrito a la materia de Matematicas"
      );
      console.log(estudiante);
    }
  } else if (materia == 2) {
    let estudiante = inscribir.sociales().estudiantes;
    if (estudiante.length >= 20) {
      alert("Lo siento, la materia de Sociales ya esta llena");
    } else {
      let nombre = prompt(
        "Ingrese su nombre para inscribirse a la materia de Sociales"
      );
      estudiante.push(nombre);
      alert(
        "Felicidades " + nombre + " te has inscrito a la materia de Sociales"
      );
      console.log(estudiante);
    }
  } else if (materia == 3) {
    let estudiante = inscribir.naturales().estudiantes;
    if (estudiante.length >= 20) {
      alert("Lo siento, la materia de Naturales ya esta llena");
    } else {
      let nombre = prompt(
        "Ingrese su nombre para inscribirse a la materia de Naturales"
      );
      estudiante.push(nombre);
      alert(
        "Felicidades " + nombre + " te has inscrito a la materia de Naturales"
      );
      console.log(estudiante);
    }
  } else if (materia == 4) {
    let estudiante = inscribir.lenguaje().estudiantes;
    if (estudiante.length >= 20) {
      alert("Lo siento, la materia de Lenguaje ya esta llena");
    } else {
      let nombre = prompt(
        "Ingrese su nombre para inscribirse a la materia de Lenguaje"
      );
      estudiante.push(nombre);
      alert(
        "Felicidades " + nombre + " te has inscrito a la materia de Lenguaje"
      );
      console.log(estudiante);
    }
  } else if (materia == 5) {
    let estudiante = inscribir.ingles().estudiantes;
    if (estudiante.length >= 20) {
      alert("Lo siento, la materia de Ingles ya esta llena");
    } else {
      let nombre = prompt(
        "Ingrese su nombre para inscribirse a la materia de Ingles"
      );
      estudiante.push(nombre);
      alert(
        "Felicidades " + nombre + " te has inscrito a la materia de Ingles"
      );
      console.log(estudiante);
    }
  } else if (materia == 6) {
    let estudiante = inscribir.educacionFisica().estudiantes;
    if (estudiante.length >= 20) {
      alert("Lo siento, la materia de Educacion Fisica ya esta llena");
    } else {
      let nombre = prompt(
        "Ingrese su nombre para inscribirse a la materia de Educacion Fisica"
      );
      estudiante.push(nombre);
      alert(
        "Felicidades " +
          nombre +
          " te has inscrito a la materia de Educacion Fisica"
      );
      console.log(estudiante);
    }
  } else if (materia == 7) {
    let estudiante = inscribir.arte().estudiantes;
    if (estudiante.length >= 20) {
      alert("Lo siento, la materia de Arte ya esta llena");
    } else {
      let nombre = prompt(
        "Ingrese su nombre para inscribirse a la materia de Arte"
      );
      estudiante.push(nombre);
      alert("Felicidades " + nombre + " te has inscrito a la materia de Arte");
      console.log(estudiante);
    }
  } else if (materia == 8) {
    let estudiante = inscribir.musica().estudiantes;
    if (estudiante.length >= 20) {
      alert("Lo siento, la materia de Musica ya esta llena");
    } else {
      let nombre = prompt(
        "Ingrese su nombre para inscribirse a la materia de Musica"
      );
      estudiante.push(nombre);
      alert(
        "Felicidades " + nombre + " te has inscrito a la materia de Musica"
      );
      console.log(estudiante);
    }
  } else if (materia == 9) {
    let estudiante = inscribir.tecnologia().estudiantes;
    if (estudiante.length >= 20) {
      alert("Lo siento, la materia de Tecnologia ya esta llena");
    } else {
      let nombre = prompt(
        "Ingrese su nombre para inscribirse a la materia de Tecnologia"
      );
      estudiante.push(nombre);
      alert(
        "Felicidades " + nombre + " te has inscrito a la materia de Tecnologia"
      );
      console.log(estudiante);
    }
  } else if (materia == 10) {
    let estudiante = inscribir.informatica().estudiantes;
    if (estudiante.length >= 20) {
      alert("Lo siento, la materia de Informatica ya esta llena");
    } else {
      let nombre = prompt(
        "Ingrese su nombre para inscribirse a la materia de Informatica"
      );
      estudiante.push(nombre);
      alert(
        "Felicidades " + nombre + " te has inscrito a la materia de Informatica"
      );
      console.log(estudiante);
    }
  } else if (materia == 11) {
    let estudiante = inscribir.filosofia().estudiantes;
    if (estudiante.length >= 20) {
      alert("Lo siento, la materia de Filosofia ya esta llena");
    } else {
      let nombre = prompt(
        "Ingrese su nombre para inscribirse a la materia de Filosofia"
      );
      estudiante.push(nombre);
      alert(
        "Felicidades " + nombre + " te has inscrito a la materia de Filosofia"
      );
      console.log(estudiante);
    }
  } else if (materia == 12) {
    let estudiante = inscribir.historia().estudiantes;
    if (estudiante.length >= 20) {
      alert("Lo siento, la materia de Historia ya esta llena");
    } else {
      let nombre = prompt(
        "Ingrese su nombre para inscribirse a la materia de Historia"
      );
      estudiante.push(nombre);
      alert(
        "Felicidades " + nombre + " te has inscrito a la materia de Historia"
      );
      console.log(estudiante);
    }
  } else {
    alert("No existe la materia que deseas inscribirte");
  }
};
inscribirMateria();