const NumeroMayor = (a,b) => (a > b) ? a : b;
const result = NumeroMayor(100,50);
console.log(result);

//operador ternario con booleano
const TieneMembrecia =(miembro)=> (miembro) ? '2 dolares': '10 Dolares';
console.log(TieneMembrecia(true));

//operador terniario dentro de un array
const amigo = false;
const amigosArray = [
    'Peter',
    'Luis',
    'Sebas',
    amigo ? 'Thor' : 'Loki',
    NumeroMayor(101,20)
]
console.log(amigosArray);

const nota = 65;
const grado = 
nota >= 95 ? 'A+':
nota >= 90 ? 'A':
nota >= 85 ? 'B+':
nota >=80 ? 'B':
nota >= 75 ? 'C+':
nota >= 70 ? 'C': 'F';
console.log({nota,grado});

