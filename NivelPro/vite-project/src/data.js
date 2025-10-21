import card from "./card.js";

const dataArtista = async () => {
  try {
    const response = await fetch("data.json");
    const data = await response.json();

    // Creamos las cards y las guardamos en un array
    const cards = data.map((artista) => card(artista));

    // Retornamos el array con todas las cards
    return cards;
  } catch (error) {
    console.error("Error al cargar los datos:", error);
    return [];
  }
};

export default dataArtista;
