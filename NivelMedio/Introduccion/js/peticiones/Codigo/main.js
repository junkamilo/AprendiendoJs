/**
 * PETICIONES CON AJAX
 */

// const peticion = new XMLHttpRequest();


/**
 * asi se hacia antiguamente
 */
//peticion.addEventListener("readystatechange",()=>{
    //console.log(peticion.readyState);
    /**
     * nos devuelve 4 estados
     * 1) significa que la solicitud se creo correctamente
     * 2) la solicitud se envio correctamente
     * 3)se esta procesando la peticion
     * 4)esta todo listo y que el resultado ya se puede utilizar
     */

    //aca validamos que cuando el state sea 4  y status sea 200 nos muestre la respueste
    // if(peticion.readyState === 4 && peticion.status === 200){
    //     console.log(peticion.response);
    //     console.log(peticion.status);
           
    // }
    
//});



// Escuchamos cuando la carga termina
// peticion.addEventListener("load", () => {
//   if (peticion.status === 200 || peticion.status === 201) {
//     // Convertimos la respuesta JSON a objeto y mostramos el nombre
//     console.log(JSON.parse(peticion.response).nombre);
//   } else {
//     console.log("Lo siento, no se encontró el recurso");
//   }
// });

// // Abrimos la conexión con el método POST hacia la API (OJO: https)
// peticion.open("POST", "https://reqres.in/api/users");

// // Enviamos encabezado para decir que enviamos JSON
// peticion.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

// // Enviamos los datos serializados
// peticion.send(JSON.stringify({
//   nombre: "dalto",
//   trabajo: "edutuber"
// }));

/**
 * PETICIONES CON FETCH
 */

//fetch por default tiene el metodo GET
//nos devuelve una pronmesa pendiente lo cual podemos acceder con algunos de los siguientes metodos
const dataPost = fetch("https://jsonplaceholder.typicode.com/posts");

//accediento con text
// dataPost.then((res)=>{
//   return res.text();
// }).then((res)=>{
//   console.log(res);
  
// })


//accediento con json
dataPost.then((res)=>{
  return res.json();
}).then((res)=>{
  console.log(res);
});

//creamos un recurso
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  //al elemento body se le coloca lo que se va a enviar en este caso vamos a enviar un archivo json con el titulo,body y el ususerId
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));