//Deslizar y soltar
const cuadrado = document.getElementById("cuadrado");
const circulo = document.getElementById("circulo");
const soltar = document.getElementById("soltar");

//utilizamos eventos sobre el elemento

//Evento que se dispara cuando empiezas a arrastrar el elemento.
circulo.addEventListener("dragstart", (e) => {
  console.log(e.dataTransfer.setData("clase", e.target.className));
});

//Evento que se dispara continuamente mientras arrastras el elemento. ⚠️ Se ejecuta continuamente.
circulo.addEventListener("drag", () => console.log(2));

//Evento que se dispara cuando terminas de arrastrar el elemento.
circulo.addEventListener("dragend", () => console.log(3));

// --------------------------
// hacemos lo mismo con el cuadrado
// --------------------------
cuadrado.addEventListener("dragstart", (e) => {
  console.log(e.dataTransfer.setData("clase", e.target.className));
});

cuadrado.addEventListener("drag", () => console.log("arrastrando cuadrado"));

cuadrado.addEventListener("dragend", () => console.log("terminó cuadrado"));

//utilizamos evenetos sobre zona a soltar

//verificamos que el objete este entreando a al zona
soltar.addEventListener("dragenter", () => console.log("Entrando zona"));

//verificamos que el objeto se mueva en la zona
soltar.addEventListener("dragover", (e) => {
  //activamos el eventprevendefault para activar lo de soltar, en este caso drop
  e.preventDefault();
  console.log("moviendose");
});

//verificamos cuando soltamos el obketo en la zona
soltar.addEventListener("drop", (e) => {
  const clase = e.dataTransfer.getData("clase");
  console.log(clase);

  // creamos un clon visual del elemento arrastrado
  const nuevoElemento = document.createElement("div");
  nuevoElemento.className = clase; // le damos la misma clase (para conservar el estilo)

  // lo agregamos dentro de la zona de soltar
  soltar.appendChild(nuevoElemento);

  console.log("Elemento pegado en la zona");
});

//verificamos que el objeto se va da la zona
soltar.addEventListener("dragleave", () => console.log("se fue"));
