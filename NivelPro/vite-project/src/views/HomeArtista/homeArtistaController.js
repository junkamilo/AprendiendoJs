// Importamos componentes necesarios
import tituloPrincipal from "../../titulo.js";
import dataArtista from "../../data.js";

export const homeArtistaController = async () => {
  // Seleccionamos el contenedor principal
  const app = document.getElementById("app");

  // Limpiamos el contenido del app antes de renderizar
  app.innerHTML = "";

  // Creamos la estructura del home
  const contentGrid = document.createElement("div");
  contentGrid.classList.add("app-grid");

  const titulo = tituloPrincipal();

  // Pegamos el título y el contenedor al DOM
  app.append(titulo, contentGrid);

  //Cargamos los artistas desde data.json
  const cards = await dataArtista();

  //Agregamos las cards al grid
  cards.forEach((card) => contentGrid.append(card));
};
