const Sliderversiculos = async () => {
  // Contenedor principal del carrusel
  const carrusel = document.createElement("div");
  carrusel.id = "controls-carousel";
  carrusel.dataset.carousel = "static";
  carrusel.classList.add("content-carrusel");

  // Wrapper del carrusel
  const wrapper = document.createElement("div");
  wrapper.classList.add("carrusel-wrapper");

  // Array con las imágenes (puedes cambiar las rutas)
  const imagenes = [
    "https://www.freepik.es/fotos-vectores-gratis/sol-animado",
    "/docs/images/carousel/carousel-2.svg",
    "/docs/images/carousel/carousel-3.svg",
    "/docs/images/carousel/carousel-4.svg",
    "/docs/images/carousel/carousel-5.svg",
  ];

  // Crear los ítems del carrusel
  imagenes.forEach((src, index) => {
    const item = document.createElement("div");
    item.classList.add(
      "carrusel-item",
      "hidden",
      "duration-700",
      "ease-in-out"
    );
    if (index === 1) item.dataset.carouselItem = "active"; // Activo por defecto
    else item.dataset.carouselItem = "";

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Imagen ${index + 1}`;
    img.classList.add("carrusel-img");

    item.append(img);
    wrapper.append(item);
  });

  // Botón anterior
  const btnPrev = document.createElement("button");
  btnPrev.type = "button";
  btnPrev.dataset.carouselPrev = "";
  btnPrev.classList.add("carrusel-btn", "carrusel-btn-prev");

  btnPrev.innerHTML = `
    <span class="carrusel-span">
      <svg class="carrusel-svg rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
      </svg>
      <span class="sr-only">Previous</span>
    </span>
  `;

  // Botón siguiente
  const btnNext = document.createElement("button");
  btnNext.type = "button";
  btnNext.dataset.carouselNext = "";
  btnNext.classList.add("carrusel-btn", "carrusel-btn-next");

  btnNext.innerHTML = `
    <span class="carrusel-span">
      <svg class="carrusel-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
      </svg>
      <span class="sr-only">Next</span>
    </span>
  `;

  // Estructura final
  carrusel.append(wrapper, btnPrev, btnNext);

  return carrusel;
};
export default Sliderversiculos;
