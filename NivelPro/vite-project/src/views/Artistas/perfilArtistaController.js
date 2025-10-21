export const perfilArtistaController = async (params) => {
  const main = document.getElementById("main-content");
  console.log("main encontrado:", main);

  if (!main) {
    console.error("⚠️ No se encontró el #main-content en el DOM");
    return;
  }
  main.innerHTML = ""; // limpiar antes de renderizar
  main.classList.add("main-content");

  const nombreArtista = decodeURIComponent(params.nombre); // viene del hash

  try {
    const response = await fetch("data.json");
    const data = await response.json();

    const artista = data.find((a) => a.nombre === nombreArtista);

    if (!artista) {
      main.innerHTML = `<p>Artista no encontrado</p>`;
      return;
    }

    //Cambiamos el fondo según el artista
    main.style.background = artista.colorFondo || "#fff";

    // HEADER
    const contentPerfil = document.createElement("div");
    contentPerfil.classList.add("content-perfil");

    const contentheader = document.createElement("div");
    contentheader.classList.add("contentheader");

    const logoPerfil = document.createElement("div");
    logoPerfil.classList.add("logoPerfil");

    const logo = document.createElement("img");
    logo.classList.add("img");
    logo.src = artista.img;
    logo.alt = artista.nombre;

    const contentName = document.createElement("div");
    contentName.classList.add("contentName");

    const nameArtista = document.createElement("h3");
    nameArtista.textContent = artista.nombre;

    const contentDescription = document.createElement("div");
    contentDescription.classList.add("contentDescription");
    const parrafoDescription = document.createElement("p");
    parrafoDescription.textContent = artista.descripcion;

    //MÚSICA ESCUCHADA
    const contentCanciones = document.createElement("div");
    contentCanciones.classList.add("contentCanciones");
    const tituloCanciones = document.createElement("h4");
    tituloCanciones.textContent = "Música más escuchada:";
    const listaCanciones = document.createElement("ul");
    artista.musicaEscuchada.forEach((cancion) => {
      const li = document.createElement("li");
      li.textContent = cancion;
      listaCanciones.appendChild(li);
    });
    contentCanciones.append(tituloCanciones, listaCanciones);

    //ÁLBUMES ESCUCHADOS
    const contentAlbumes = document.createElement("div");
    contentAlbumes.classList.add("contentAlbumes");
    const tituloAlbum = document.createElement("h4");
    tituloAlbum.textContent = "Álbumes más escuchados:";
    const listaAlbumes = document.createElement("ul");
    artista.albumEscuchado.forEach((album) => {
      const li = document.createElement("li");
      li.textContent = album;
      listaAlbumes.appendChild(li);
    });
    contentAlbumes.append(tituloAlbum, listaAlbumes);

    // Volver atrás
    const btnBack = document.createElement("button");
    btnBack.textContent = "← Volver";
    btnBack.classList.add("btn-volver");
    btnBack.addEventListener("click", () => {
      location.hash = "/";
      main.style.background = "";
    });

    // ARMAMOS TODO
    contentName.append(nameArtista);
    logoPerfil.append(logo);
    contentheader.append(logoPerfil, contentName);
    contentDescription.append(parrafoDescription);
    contentPerfil.append(
      contentheader,
      contentDescription,
      contentCanciones,
      contentAlbumes,
      btnBack
    );

    main.append(contentPerfil);
  } catch (error) {
    console.error("Error cargando el perfil:", error);
  }
};
