class OrganizarDia{
    constructor(cantidadSemana,horasTrabajo,horasEstudio,cantidadTrabajos,tiempoTrabajos,cantidadCasa,tiempoCasa){
        this.cantidadSemana = cantidadSemana;
        this.horasTrabajo = horasTrabajo;
        this.horasEstudio = horasEstudio;
        this.cantidadTrabajos = cantidadTrabajos;
        this.tiempoTrabajos = tiempoTrabajos;
        this.cantidadCasa = cantidadCasa;
        this.tiempoCasa = tiempoCasa;
    }
}
// Crear una sola instancia global
let data = new OrganizarDia();

// Modifica cada función para usar la instancia global 'data'
let CantidadTiempoSemana = ()=>{
    let IngresarSemanas = parseInt(prompt("Ingrese cantidad de semanas disponibles"));
    let resultadoHoras = IngresarSemanas * 168;
    data.cantidadSemana = resultadoHoras;
    console.log(`Tiene ${IngresarSemanas} semanas disponibles, lo que equivale a ${resultadoHoras} horas`);
}
CantidadTiempoSemana();

let CantidadTiempoTrabajo = ()=>{
    let IngresarHorasTrabajo = parseInt(prompt("Ingrese cantidad de horas que trabaja por dia"));
    let resultadoHorasTrabajo = IngresarHorasTrabajo * 7;
    data.horasTrabajo = resultadoHorasTrabajo;
    console.log(`Trabaja ${IngresarHorasTrabajo} horas por dia, lo que equivale a ${resultadoHorasTrabajo} horas a la semana`);
}
CantidadTiempoTrabajo();

let CantidadTiempoEstudio = ()=>{
    let IngresarHorasEstudio = parseInt(prompt("Ingrese cantidad de horas que estudia por dia"));
    let resultadoHorasEstudio = IngresarHorasEstudio * 7;
    data.horasEstudio = resultadoHorasEstudio;
    console.log(`Estudia ${IngresarHorasEstudio} horas por dia, lo que equivale a ${resultadoHorasEstudio} horas a la semana`);
}
CantidadTiempoEstudio();

let CantidadTiempoTrabajos = ()=>{
    let IngresarCantidadTrabajos = parseInt(prompt("Ingrese cantidad de trabajos que tiene por semana"));
    let IngresarTiempoTrabajos = parseInt(prompt("Ingrese cantidad de horas que le toma cada trabajo"));
    let resultadoHorasTrabajos = IngresarCantidadTrabajos * IngresarTiempoTrabajos;
    data.cantidadTrabajos = IngresarCantidadTrabajos;
    data.tiempoTrabajos = resultadoHorasTrabajos;
    console.log(`Tiene ${IngresarCantidadTrabajos} trabajos por semana, que le toman ${resultadoHorasTrabajos} horas en total`);
}
CantidadTiempoTrabajos();

let CantidadTiempoCasa = ()=>{
    let IngresarCantidadCasa = parseInt(prompt("Ingrese cantidad de tareas del hogar que tiene por semana"));
    let IngresarTiempoCasa = parseInt(prompt("Ingrese cantidad de horas que le toma cada tarea del hogar"));
    let resultadoHorasCasa = IngresarCantidadCasa * IngresarTiempoCasa;
    data.cantidadCasa = IngresarCantidadCasa;
    data.tiempoCasa = resultadoHorasCasa;
    console.log(`Tiene ${IngresarCantidadCasa} tareas del hogar por semana, que le toman ${resultadoHorasCasa} horas en total`);
}
CantidadTiempoCasa();

let CantidadTiempoLibre = ()=>{
    let tiempoLibre = data.cantidadSemana - (data.horasTrabajo + data.horasEstudio + data.tiempoTrabajos + data.tiempoCasa);
    console.log(`Le quedan ${tiempoLibre} horas libres a la semana`);
}
CantidadTiempoLibre();
