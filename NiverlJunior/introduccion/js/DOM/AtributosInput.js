const miInput = document.getElementById("miInput");
//utilizamos el atributo className que nos devuelve el nombre de la clase
console.log(miInput.className);
//utilizamos el atributo id que nos devuelve el id
console.log(miInput.id);
//utilizamos el atributo value que nos devuelve el valor del input
console.log(miInput.value);
//utilizamos el atributo type que nos devuelve el tipo de input
console.log(miInput.type);
//podenmos cambiar el type del input
//miInput.type = "color";
//utilizamos el atributo placeholder que nos devuelve el placeholder del input
console.log(miInput.placeholder);
//utilizamos el atributo disabled que nos devuelve si el input esta deshabilitado o no
console.log(miInput.disabled);
//podemos habilitar o deshabilitar el input
//miInput.disabled = true;
//miInput.disabled = false;
//utilizamos el atributo maxLength que nos devuelve la cantidad maxima de caracteres que se pueden ingresar en el input
console.log(miInput.maxLength);
//podemos cambiar la cantidad maxima de caracteres que se pueden ingresar en el input
//miInput.maxLength = 10;
//utilizamos el atributo size que nos devuelve el tamaño del input
console.log(miInput.size);
//podemos cambiar el tamaño del input
//miInput.size = 20;
///utilizamos el atributo acept que nos devuelve los tipos de archivos que se pueden subir en un input de tipo file
const miInputFile = document.getElementById("miInputFile");
console.log(miInputFile.accept);
//podemos cambiar los tipos de archivos que se pueden subir en un input de tipo file
//miInputFile.accept = ".pdf, .doc, .docx";

//utilizamos el atributo minLength que nos devuelve la cantidad minima de caracteres que se deben ingresar en el input
console.log(miInput.minLength);
//podemos cambiar la cantidad minima de caracteres que se deben ingresar en el input
//miInput.minLength = 5;

//utilizamos el atributo required que nos devuelve si el input es obligatorio o no
console.log(miInput.required);
//podemos hacer que el input sea obligatorio o no
//miInput.required = true;
//miInput.required = false;