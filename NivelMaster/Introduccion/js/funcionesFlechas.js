//funcion flechas

const saludar = ()=>{console.log("Hola desde funcion flechas");}
saludar();

//si la funcion flecha solamente va a contener una expresion pues no es necesario colocar el return
const mensaje = ()=> "Nuevo mensaje";
const resultado = mensaje();
console.log(resultado);

//si tenemos un solo parametro se puede utilizar sin parentesis
const nombre = res =>{
    return `Tu nombre es ${res}`
}
const name = nombre("juan camilo");
console.log(name);
 