import './style.css';

const tituloPrincipal = ()=>{
//creamos el h1 principal
const titulo = document.createElement("h1");
//agregamos estilos
titulo.classList.add("titulo");
//agregamos texto
titulo.textContent = "Top Mis 10 Artistas Favoritos"

return titulo
}
export default tituloPrincipal;