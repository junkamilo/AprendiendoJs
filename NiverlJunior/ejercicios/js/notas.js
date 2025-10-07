class notas {
  constructor() {
    this.notas = [];
  }
}
let subirNotas = () => {
  let misNotas = new notas();
  let sumaNotas = 0;
  let promedioNotas = 0;
  let cantidad = parseInt(prompt("Porfavor ingrese cantidad de notas a ingresar"));
  for (let i = 1; i <= cantidad; i++) {
    let nota;
    do {
      nota = parseFloat(prompt("Porfavor ingrese la nota " + i));
      if (nota >= 0 && nota <= 10) {
        misNotas.notas.push(nota);
        sumaNotas += nota;
      } else {
        alert("La nota ingresada no es valida");
      }
    } while (nota < 0 || nota > 10);
  }
    promedioNotas = sumaNotas / cantidad;
    console.log("Las notas ingresadas son:");
    console.table(misNotas.notas);
    if(promedioNotas >= 5){
        console.log("El promedio de las notas es: " + promedioNotas + " Excelente");
    }else if(promedioNotas >= 3 && promedioNotas <= 4.9){
        console.warn("El promedio de las notas es: " + promedioNotas + " Aprobado");
    }else{
        console.error("El promedio de las notas es: " + promedioNotas + " Reprobado");
    }
};

subirNotas();
