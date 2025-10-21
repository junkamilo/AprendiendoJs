export const loadView = async (elemento, ruta) => {
  try {
    const response = await fetch(`/src/views/${ruta}`);
    if (!response.ok) throw new Error("Vista no encontrada");
    const html = await response.text();
    elemento.innerHTML = html;
  } catch (error) {
    console.error("Error al cargar la vista:", error);
    elemento.innerHTML = `<h2>Error al cargar la vista</h2>`;
  }
};
