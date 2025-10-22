/**
 *
 * @param {DataTransfer} Data
 */
export const Card = (Data) => {
  //creamos los elementos
  const contentCard = document.createElement("div");

  const fragment = new DocumentFragment();
  Data.forEach(({ title, body }) => {
    const card = document.createElement("div");
    const titleH = document.createElement("h3");
    const parrafo = document.createElement("p");

    card.classList.add("card");
    titleH.classList.add("title");
    parrafo.classList.add("parrafo");

    titleH.textContent = title;
    parrafo.textContent = body;

    //organizamos los elementos
    card.append(titleH, parrafo);
    fragment.append(card);
  });

  //agregamos los estilos
  contentCard.classList.add("contentCard");

  contentCard.append(fragment);

  return contentCard;
};
