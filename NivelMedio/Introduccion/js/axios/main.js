// //hacemos una declarion de importancion de axios
// axios.get("https://jsonplaceholder.typicode.com/posts")
//   .then((res)=>{
//     const data = res.data;
//     data.forEach(({userId,id,title}) => {
//         //console.log(title);

//     });
//   }).catch(function (error) {
//     // manejar error
//     console.log(error);
//   })
//   .finally(function () {
//     // siempre sera executado
//   });

//   //enviamos data con axios
// axios.post("https://jsonplaceholder.typicode.com/posts",{
//     "userId" : "100",
//     "id" : "100",
//     "title" : "titulo con axios"
// }).then((res)=>{
//     console.log(res.data);
    
// })

/**
 * ahora con async y await con fetch
 */

// Declaramos una función asíncrona (puede usar 'await' dentro)
const dataPost = async () => {

  // 'await' pausa la ejecución hasta que fetch termine la petición.
  // Hace una solicitud HTTP a la URL y devuelve una Promesa con la respuesta.
  let peticion = await fetch("https://jsonplaceholder.typicode.com/posts");

  // Otra vez usamos 'await': esperamos a que la respuesta se convierta en JSON.
  // 'peticion.json()' también devuelve una Promesa.
  let datapeticion = await peticion.json();

  // Mostramos en consola los datos convertidos a un objeto JavaScript.
  console.log(datapeticion);
}

// Ejecutamos la función para que se realice la petición.
dataPost();


/**
 * ahora con async y await con axios
 */

const postData = async () => {

  // 'await' pausa la ejecución hasta que fetch termine la petición.
  // Hace una solicitud HTTP a la URL y devuelve una Promesa con la respuesta.
  let peticion = await axios("https://jsonplaceholder.typicode.com/posts");
  // Mostramos en consola los datos convertidos a un objeto JavaScript.
  console.log(peticion.data);
}

// Ejecutamos la función para que se realice la petición.
postData();

