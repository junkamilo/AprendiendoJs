//Cuando se envia informacion a una base de datos o servidor se debe enviar la informacion serielizado, osea que no sea un Objeto como lo es en esta caso, si no tiene que ser de tipo string
const deserializado = {"nombre" : "juan camilo","nombre" : "beltran","nombre" : "camila",}

//en este caso lo serializamos lo cual asi se bee enviar informacion a un servidor para no generar conflictos
//se convierte asi: '{"nombre" : "juan camilo","nombre" : "beltran","nombre" : "camila",}'
//usamos el metodo stringify para serializar
const serializado = JSON.stringify(deserializado);
console.log(serializado);
//cuando recibimos datos de un servidor, lo recibimos de tipo tambien serializable lo cual lo debemos ahora deserializar, lo cual utilisamos el metodo parse

serializado = JSON.parse(deserializado);
console.log(serializado);



