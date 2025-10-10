/**
 * METODOS WINDOW
 */
//metodo open()= abrir una nueva ventana y la lleva a la url asignada;
let urlYoutube = "https://www.youtube.com/results?search_query=jdlaluz";
//nos habre la ventana
let abrirventan = window.open(urlYoutube);
//cerramos la ventana
abrirventan.close();
//verficamos si la ventana esta cerrada
let cerrado = abrirventan.closed;
console.log(cerrado);

///detenmos la carga de un sitio web
window.stop();
//alert sale de window
window.alert("Metodos de windows");
//metodo para imrprimir
window.print();
//pedir un dato con promt
window.prompt();
//metodo confirm nos devuelve un booleano
const respuesta = window.confirm("¿Deceas cerra la ventana?");
console.log(respuesta);


/**
 * METODOS WINDOWS SEGUNDA PARTE POSICIONES
 */
//metodo screen nos devuelve las propiedades de screen
const scren = window.screen;
console.log(scren);
//metodo screen left nos devuelve el valor del borde izquierdo del navegador y el borde izquierdo de la pantalla
//funciona cuando minimizamos la ventana y la movemos
const screnleft = window.screenLeft;
console.log(screnleft);
//metodo screen top nos devuelve la distancia vertical entre el borde superior del navegador y el borde superior de la pantalla
const screnTop = window.screenTop;
console.log(screnTop);
//metodo scrolx devuelve el numero de pixeles que el documento se desplaza actualmente horizontalmente
//funciona con la barra de navegacion o el scroll
const scrolX = window.scrollX;
console.log(scrolX);
//metodo scrolY devuelve el numero de pixeles que el documento se desplaza actualmente verticalmente
const scrolY = window.scrollY;
console.log(scrolY);

//metodo para darle una posicion del scroll
//primer parametro perteneca al X, segundo parametro pertenece al Y
window.scroll(0,100)

//metodo para cambiar tamaño de la ventana, cambia la ventana actual en una cantidad especifica
window.resizeBy(100,200);
//cambia la ventana actual en una ubicacion absoluta
window.resizeTo(100,200);

//metodos para mover la ventana
window.moveBy(100,200);
window.moveTo(100,200);


/**
 * LOCATION
 */
//localisamos donde se encuentra ubicado el archivo
let href = window.location.href;

//nos devuelve el dominio
let dominiom = window.location.host;

//nos devuelve el patname
let patname = window.location.pathname;

//nos devuelve el protocolo
let protocolo = window.location.protocol;

//carga un nuevo documento
let nuevoDocumento = window.location.assign("url");








