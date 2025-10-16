const versiculos = async (generoSeleccionado) => {
  const contentVersiculos = document.createElement("div");
  contentVersiculos.classList.add("contenedor-versiculos");

  try {
    // Cargamos el JSON
    const peticion = await axios("/Proyectos/Proverbios/DataProverbios.json");
    const DataProverbios = peticion.data;

    // Filtramos por género
    const generoEncontrado = DataProverbios.find(
      (g) => g.Genero.toLowerCase() === generoSeleccionado.toLowerCase()
    );

    // Si el género existe, recorremos sus versículos
    if (generoEncontrado) {
      generoEncontrado.versiculos.forEach((v) => {
        const pTexto = document.createElement("p");
        const pCita = document.createElement("p");
        const pReflexion = document.createElement("p");

        pTexto.textContent = v.texto;
        pCita.textContent = `📖 ${v.cita}`;
        pReflexion.textContent = `💡 ${v.reflexion}`;

        contentVersiculos.append(pTexto, pCita, pReflexion);
      });
    } else {
      const p = document.createElement("p");
      p.textContent = "No se encontraron versículos para este género.";
      contentVersiculos.append(p);
    }

  } catch (error) {
    console.error("Error al cargar los datos:", error);
    const p = document.createElement("p");
    p.textContent = "Error al cargar los versículos.";
    contentVersiculos.append(p);
  }

  return contentVersiculos;
};

export default versiculos;
