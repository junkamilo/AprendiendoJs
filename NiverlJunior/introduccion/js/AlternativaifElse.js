const dia = 1;

const diaSemana = {
 0: "domingo",
 1: "lunes",
 2: "martes",
 3: "miercoles",
 4: "jueves",
 5: "viernes",
 6: "sabado",
};

//retornara lunes ya que en el arreglo la posicion 1 es el lunes y la variable disas tiene almacenado 1
console.log(diaSemana[dia] || 'Dia no definido');
