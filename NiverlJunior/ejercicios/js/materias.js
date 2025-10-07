class Materias {
    matematicas(){
        let profe = "Juan Perez";
        let estudiantes = ["Ana", "Luis", "Carlos", "Marta", "Sofia", "Diego", "Lucia", "Jorge", "Elena", "cofla"];
        return {profe, estudiantes};
    }
    sociales(){
        let profe = "Maria Gomez";
        let estudiantes = ["Ana", "Luis", "Carlos", "Marta", "Sofia", "Diego", "Lucia", "Jorge", "Elena", "pablo"];
        return {profe, estudiantes};
    }
    naturales(){
        let profe = "Pedro Martinez";
        let estudiantes = ["Ana", "Luis", "Carlos", "Marta", "Sofia", "Diego", "Lucia", "Jorge", "Elena", "cofla"];
        return {profe, estudiantes};
    }
    lenguaje(){
        let profe = "Laura Rodriguez";
        let estudiantes = ["Ana", "Luis", "Carlos", "Marta", "Sofia", "Diego", "Lucia", "Jorge", "Elena", "enrique"];
        return {profe, estudiantes};
    }
    ingles(){
        let profe = "James Smith";
        let estudiantes = ["Ana", "Luis", "Carlos", "Marta", "Sofia", "Diego", "Lucia", "Jorge", "Elena", "cofla"];
        return {profe, estudiantes};
    }
    educacionFisica(){
        let profe = "Carlos Lopez";
        let estudiantes = ["Ana", "Luis", "Carlos", "Marta", "Sofia", "Diego", "Lucia", "Jorge", "Elena", "cofla"];
        return {profe, estudiantes};
    }
    arte(){
        let profe = "Sofia Hernandez";
        let estudiantes = ["Ana", "Luis", "Carlos", "Marta", "Sofia", "Diego", "Lucia", "Jorge", "Elena", "santiago"];
        return {profe, estudiantes};
    }
    musica(){
        let profe = "Miguel Torres";
        let estudiantes = ["Ana", "Luis", "Carlos", "Marta", "Sofia", "Diego", "Lucia", "Jorge", "Elena", "luis miguel"];
        return {profe, estudiantes};
    }
    tecnologia(){
        let profe = "Ana Ramirez";
        let estudiantes = ["Ana", "Luis", "Carlos", "Marta", "Sofia", "Diego", "Lucia", "Jorge", "Elena", "cofla"];
        return {profe, estudiantes};
    }
    informatica(){
        let profe = "Luis Fernandez";
        let estudiantes = ["Ana", "Luis", "Carlos", "Marta", "Sofia", "Diego", "Lucia", "Jorge", "Elena", "pedro"];
        return {profe, estudiantes};
    }
    filosofia(){
        let profe = "Elena Jimenez";
        let estudiantes = ["Ana", "Luis", "Carlos", "Marta", "Sofia", "Diego", "Lucia", "Jorge", "Elena", "laura"];
        return {profe, estudiantes};
        
    }
    historia(){
        let profe = "Jorge Sanchez";
        let estudiantes = ["Ana", "Luis", "Carlos", "Marta", "Sofia", "Diego", "Lucia", "Jorge", "Elena", "cofla"];
        return {profe, estudiantes};
        
    }
};
//Accedemos a la clase Materias
const materias = new Materias();
let materia = () =>{
    let materia = prompt("Que Materia Quieres Ver? \n 1 - Matematicas \n 2 - Sociales \n 3 - Naturales \n 4 - Lenguaje \n 5 - Ingles \n 6 - Educacion Fisica \n 7 - Arte \n 8 - Musica \n 9 - Tecnologia \n 10 - Informatica \n 11 - Filosofia \n 12 - Historia");
    // ...existing code...
if(materia == 1){
    // Accedemos a la funcion matematicas
    let datos = materias.matematicas();
    // Almacenamos los datos en variables
    let profe = datos.profe;
    // Almacenamos los estudiantes en una variable
    let estudiantes = datos.estudiantes;
    console.log("Nombre Del Profesor Asignado A la Materia: " + profe);
    console.log("Los Estudiantes Inscritos a esta materia: " + estudiantes);
}else if(materia == 2){
    let datos = materias.sociales();
    let profe = datos.profe;
    let estudiantes = datos.estudiantes;
    console.log("Nombre Del Profesor Asignado A la Materia: " + profe);
    console.log("Los Estudiantes Inscritos a esta materia: " + estudiantes);
}else if(materia == 3){
    let datos = materias.naturales();
    let profe = datos.profe;
    let estudiantes = datos.estudiantes;
    console.log("Nombre Del Profesor Asignado A la Materia: " + profe);
    console.log("Los Estudiantes Inscritos a esta materia: " + estudiantes);
}else if(materia == 4){
    let datos = materias.lenguaje();
    let profe = datos.profe;
    let estudiantes = datos.estudiantes;
    console.log("Nombre Del Profesor Asignado A la Materia: " + profe);
    console.log("Los Estudiantes Inscritos a esta materia: " + estudiantes);
}else if(materia == 5){
    let datos = materias.ingles();
    let profe = datos.profe;
    let estudiantes = datos.estudiantes;
    console.log("Nombre Del Profesor Asignado A la Materia: " + profe);
    console.log("Los Estudiantes Inscritos a esta materia: " + estudiantes);
}else if(materia == 6){
    let datos = materias.educacionFisica();
    let profe = datos.profe;
    let estudiantes = datos.estudiantes;
    console.log("Nombre Del Profesor Asignado A la Materia: " + profe);
    console.log("Los Estudiantes Inscritos a esta materia: " + estudiantes);
}else if(materia == 7){
    let datos = materias.arte();
    let profe = datos.profe;
    let estudiantes = datos.estudiantes;
    console.log("Nombre Del Profesor Asignado A la Materia: " + profe);
    console.log("Los Estudiantes Inscritos a esta materia: " + estudiantes);
}else if(materia == 8){
    let datos = materias.musica();
    let profe = datos.profe;
    let estudiantes = datos.estudiantes;
    console.log("Nombre Del Profesor Asignado A la Materia: " + profe);
    console.log("Los Estudiantes Inscritos a esta materia: " + estudiantes);
}else if(materia == 9){
    let datos = materias.tecnologia();
    let profe = datos.profe;
    let estudiantes = datos.estudiantes;
    console.log("Nombre Del Profesor Asignado A la Materia: " + profe);
    console.log("Los Estudiantes Inscritos a esta materia: " + estudiantes);
}else if(materia == 10){
    let datos = materias.informatica();
    let profe = datos.profe;
    let estudiantes = datos.estudiantes;
    console.log("Nombre Del Profesor Asignado A la Materia: " + profe);
    console.log("Los Estudiantes Inscritos a esta materia: " + estudiantes);
}else if(materia == 11){
    let datos = materias.filosofia();
    let profe = datos.profe;
    let estudiantes = datos.estudiantes;
    console.log("Nombre Del Profesor Asignado A la Materia: " + profe);
    console.log("Los Estudiantes Inscritos a esta materia: " + estudiantes);
}else if(materia == 12){
    let datos = materias.historia();
    let profe = datos.profe;
    let estudiantes = datos.estudiantes;
    console.log("Nombre Del Profesor Asignado A la Materia: " + profe);
    console.log("Los Estudiantes Inscritos a esta materia: " + estudiantes);
}else{
    alert("No Existe La Materia Que Deseas Ver");
}
}
let clasesCofla = () => {
    let Cantidadclases = 0;
    let materiasCofla = [];
    // Lista de métodos de materias y sus nombres
    const materiasList = [
        { nombre: "Matematicas", metodo: materias.matematicas },
        { nombre: "Sociales", metodo: materias.sociales },
        { nombre: "Naturales", metodo: materias.naturales },
        { nombre: "Lenguaje", metodo: materias.lenguaje },
        { nombre: "Ingles", metodo: materias.ingles },
        { nombre: "Educacion Fisica", metodo: materias.educacionFisica },
        { nombre: "Arte", metodo: materias.arte },
        { nombre: "Musica", metodo: materias.musica },
        { nombre: "Tecnologia", metodo: materias.tecnologia },
        { nombre: "Informatica", metodo: materias.informatica },
        { nombre: "Filosofia", metodo: materias.filosofia },
        { nombre: "Historia", metodo: materias.historia }
    ];

    materiasList.forEach(materia => {
        let datos = materia.metodo.call(materias);
        if (datos.estudiantes.includes("cofla")) {
            Cantidadclases++;
            materiasCofla.push({
                materia: materia.nombre,
                profesor: datos.profe
            });
        }
    });

    console.log(`Cofla está inscrito en ${Cantidadclases} clases.`);
    materiasCofla.forEach(info => {
        console.log(`Materia: ${info.materia}, Profesor: ${info.profesor}`);
    });
}
materia();
clasesCofla();