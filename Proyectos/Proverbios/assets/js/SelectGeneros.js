const selectGenero = async () => {
  // Creamos el elemento
  const select = document.createElement("select");
  const contentSelect = document.createElement("div");

  //agregamos estilos
  contentSelect.classList.add("content-select");

  try {
    // Cargamos el JSON
    const peticion = await axios("/Proyectos/Proverbios/DataProverbios.json");
    const DataProverbios = peticion.data;

    // Recorremos y agregamos opciones
    DataProverbios.forEach(element => {
      const option = document.createElement("option");
      option.textContent = element.Genero;
      select.append(option);      
    });

  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }

  contentSelect.append(select);

  return contentSelect;
};

export default selectGenero;

