const tituloPrincipal = ()=>{
    //creamos el elemento
    const tituloPrincipal = document.createElement("h1");
    const contentTitulo = document.createElement("div");

    //agregamos la clase
    tituloPrincipal.classList.add("titulo-principal");
    contentTitulo.classList.add("content-titulo");

    contentTitulo.append(tituloPrincipal);

    //Agregamos el texto
    tituloPrincipal.textContent = "Frases Vida";
    return contentTitulo;
}

export default tituloPrincipal;