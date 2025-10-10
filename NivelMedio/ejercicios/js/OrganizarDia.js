//seleccionamos el contenido principal
const body = document.querySelector("body");

//creamos los elementos principales
const form = document.createElement("form");
const textarea = document.createElement("textarea");
const select = document.createElement("select");
const labelTextare = document.createElement("label");
const labelselect = document.createElement("label");
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const trSemana = document.createElement("tr");
const trTareas = document.createElement("tr");
const tdTareas = document.createElement("td");
const button = document.createElement("button");

//array semana
const DiasSemanas = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo"
];

DiasSemanas.forEach(element => {
    const thSeman = document.createElement("th");
    const optiones = document.createElement("option");

    //agregamos estilos
    thSeman.classList.add("thSeman");

    optiones.textContent = element;
    thSeman.textContent = element;
    select.append(optiones);
    trSemana.append(thSeman)
});

//agregamos atributos
button.setAttribute("type","submit");

//agregamos texto
labelTextare.textContent = "Agrega tus planes";
labelselect.textContent = "Elige el dia de la semana";
button.textContent = "Enviar Tareas"

//agregamos estilos
body.classList.add("body");
form.classList.add("form");
table.classList.add("table");
button.classList.add("button");

//agregamos elementos
thead.append(trSemana);
table.append(thead);
form.append(textarea,select,button);
body.append(form,table);

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    //convertimos los datos en un array
    const tareasValues = textarea.value;
    const ArrayTareas = tareasValues.split(",");
    const information = [{
        tareas : ArrayTareas,
        dia : select.value
    }];
    console.log(ArrayTareas);
    console.log(information);
    
    console.log(select.value);
    
      
});