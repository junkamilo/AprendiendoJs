// 1. Selección del elemento body
const body = document.querySelector("body");

// --- FETCH DE DATOS Y CONSTRUCCIÓN DE CARDS ---
const DataEstudiante = async () => {
    let data = await fetch("/NivelMedio/ejercicios/estudiantes.json");
    let dataEstudiante = await data.json();
    console.log(dataEstudiante);

    dataEstudiante.forEach(({ nombre, edad, grado, curso, promedio, materias, asistencia, direccion, proyecto }) => {

        // 2. Creación de los contenedores principales
        const content = document.createElement("div");
        const contentInformation = document.createElement("div");
        const contentProyecto = document.createElement("div");

        // 3. Asignación de clases a los contenedores principales
        content.classList.add("content");
        contentInformation.classList.add("content-information");
        contentProyecto.classList.add("content-proyecto");

        // --- INICIO: Construcción de la columna izquierda (Información del Estudiante) ---
        const contentNombre = document.createElement("div");
        const nombreEstudianteH1 = document.createElement("h1");
        const contentEstudiante = document.createElement("div");

        contentNombre.classList.add("content-nombre");
        nombreEstudianteH1.textContent = nombre;
        contentEstudiante.classList.add("content-estudiante");

        // 6. Creación de los items de información (Edad, Grado, etc.)
        const infoItems = [
            { label: "Edad", valor: edad },
            { label: "Grado", valor: grado },
            { label: "Curso", valor: curso },
            { label: "Promedio", valor: promedio }
        ];

        infoItems.forEach(itemData => {
            const itemInformation = document.createElement("div");
            const informationP = document.createElement("p");
            itemInformation.classList.add("item-information");
            informationP.classList.add("information");
            informationP.textContent = `${itemData.label}: ${itemData.valor}`;
            itemInformation.append(informationP);
            contentEstudiante.append(itemInformation);
        });

        // 7. Creación específica para la sección de Materias
        const itemMateriasContainer = document.createElement("div");
        itemMateriasContainer.classList.add("item-information", "materias");

        materias.forEach(materiaText => {
            const contentMaterias = document.createElement("div");
            const itemMateriasP = document.createElement("p");
            contentMaterias.classList.add("content-materias");
            itemMateriasP.classList.add("item-materias");
            itemMateriasP.textContent = materiaText;
            contentMaterias.append(itemMateriasP);
            itemMateriasContainer.append(contentMaterias);
        });

        contentEstudiante.append(itemMateriasContainer);

        // 8. Creación de los items restantes (Asistencia, Dirección)
        const moreInfoItems = [
            { label: "Asistencias", valor: asistencia },
            { label: "Direccion", valor: direccion }
        ];

        moreInfoItems.forEach(itemData => {
            const itemInformation = document.createElement("div");
            const informationP = document.createElement("p");
            itemInformation.classList.add("item-information");
            informationP.classList.add("information");
            informationP.textContent = `${itemData.label}: ${itemData.valor}`;
            itemInformation.append(informationP);
            contentEstudiante.append(itemInformation);
        });

        // --- FIN: Construcción de la columna izquierda ---

        // --- INICIO: Construcción de la columna derecha (Proyecto) ---
        const tituloProyectoDiv = document.createElement("div");
        const tituloProyectoH2 = document.createElement("h2");
        const contentEstadoDiv = document.createElement("div");
        const itemEstadoP = document.createElement("p");
        const contentDescriptionDiv = document.createElement("div");

        tituloProyectoDiv.classList.add("titulo-proyecto");
        tituloProyectoH2.textContent = proyecto.titulo;
        contentEstadoDiv.classList.add("content-estado");
        itemEstadoP.classList.add("item-estado");

        if (proyecto.estado === "En desarrollo") {
            itemEstadoP.style.backgroundColor = "orange";
        }else if(proyecto.estado === "En revisión"){
            itemEstadoP.style.backgroundColor = "red";
        }else if(proyecto.estado === "En pruebas"){
            itemEstadoP.style.backgroundColor = "blue";
        }
        
        itemEstadoP.textContent = proyecto.estado;
        contentDescriptionDiv.classList.add("content-description");
        contentDescriptionDiv.textContent = proyecto.descripcion;

        // --- FIN: Construcción de la columna derecha ---

        // 11. Anidamiento y renderizado final en el DOM (append)
        contentNombre.append(nombreEstudianteH1);
        contentInformation.append(contentNombre, contentEstudiante);
        tituloProyectoDiv.append(tituloProyectoH2);
        contentEstadoDiv.append(itemEstadoP);
        contentProyecto.append(tituloProyectoDiv, contentEstadoDiv, contentDescriptionDiv);
        content.append(contentInformation, contentProyecto);

        // Añadir la tarjeta completa al body
        body.append(content);
    });
};

DataEstudiante();

