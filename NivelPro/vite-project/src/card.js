// card.js
const card = ({ nombre, img, descripcion }) => {
  const card = document.createElement("div");
  const nameArtista = document.createElement("h3");
  const logoPerfil = document.createElement("div");
  const imagen = document.createElement("img");
  const contentParrafo = document.createElement("div");
  const parrafo = document.createElement("p");
  const button = document.createElement("button");

  // Asignar contenido
  nameArtista.textContent = nombre;
  imagen.src = img;
  imagen.alt = nombre;
  parrafo.textContent = descripcion;
  button.textContent = "Ver mas"

  //agregamos stilos
  card.classList.add("card");
  logoPerfil.classList.add("contentImg");
  imagen.classList.add("img");
  button.classList.add("button");

  // Estructurar elementos
  logoPerfil.append(imagen);
  contentParrafo.append(parrafo);

  button.addEventListener("click",()=>{
    location.hash = `/Artistas/${encodeURIComponent(nombre)}`
  })

  card.append(nameArtista,button, logoPerfil, contentParrafo);

  return card;
};

export default card;
