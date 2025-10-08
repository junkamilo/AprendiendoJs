const rangoEadad = document.querySelector(".rangoEdad");
console.log(rangoEadad);
//modificamos el atributo y tambien lo podemos crear con setAttribute
//primer parametro es el nombre del atributo
//segundo parametro es el valor que le queremos asignar
rangoEadad.setAttribute("type", "range");

//obtenemos el valor del atributo con getAttribute
let tipo = rangoEadad.getAttribute("type");
console.log(tipo);

//eliminamos el atributo con removeAttribute
rangoEadad.removeAttribute("type");
tipo = rangoEadad.getAttribute("type");
console.log(tipo);