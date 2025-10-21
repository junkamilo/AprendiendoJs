import { loadView } from "./helpers/loadview";
import { homeArtistaController } from "../views/HomeArtista/homeArtistaController";
import { perfilArtistaController } from "../views/Artistas/perfilArtistaController";

const routes = {
  Home: {
    template: null, // el index.html es el home
    controlador: homeArtistaController,
  },
  "Artistas/:nombre": {
    template: "Artistas/perfilArtista.html",
    controlador: perfilArtistaController,
    private: false,
  },
};

export const router = async (app) => {
  const hash = location.hash.slice(2) || "Home";
  const [rutas, params] = matchRoute(hash);

  await loadView(app, rutas.template);
  // Ejecutar el controldor
  rutas.controlador(params);
};

const matchRoute = (hash) => {
  const arreglo = hash.replace(/^#/, "").split("/");

  for (const route in routes) {
    const b = route.split("/");

    if (b.length !== arreglo.length) continue;

    const params = {};

    const matched = b.every((parte, i) => {
      if (parte.startsWith(":")) {
        const partName = parte.slice(1);
        const value = arreglo[i];
        params[partName] = value;
        return true;
      }
      if (parte === arreglo[i]) {
        return true;
      }
    });
    if (matched) {
      return [routes[route], params];
    }
  }
  return [null, null];
};
