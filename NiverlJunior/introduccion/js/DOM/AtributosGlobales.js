//los atributos globales son atributos que pueden ser usados en cualquier elemento HTML
//como por ejemplo id, class, style, title, hidden, etc
const titulo = document.querySelector(".titulo");

//utilizamos el atributo contenteditable para hacer que el elemento sea editable
titulo.setAttribute("contenteditable", "true");

//utilizamos el atributo dir para cambiar la direccion del texto
titulo.setAttribute("dir", "rtl");

//utilizamos el atributo hidden para ocultar el elemento
//titulo.setAttribute("hidden", "true");

//utilizamos el atributo title para agregar un tooltip al elemento
titulo.setAttribute("title", "Este es un titulo editable");

//utilizamos el atributo tabindex para hacer que el elemento sea focusable
titulo.setAttribute("tabindex", "0");