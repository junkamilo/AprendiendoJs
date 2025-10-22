import { Formulario } from './formulario';
import { GetUsers } from './JsonPlaceholder/JsonPlaceholder-app';
import './style.css'
import { Tabla } from './tabla';
const app = document.getElementById("app");

const usuarios = await GetUsers();
const { table, renderRows } = Tabla(usuarios);

const form = Formulario((nuevoUsuario) => {
  // Agregamos el nuevo usuario al array
  usuarios.push(nuevoUsuario);
  // Re-renderizamos la tabla
  renderRows(usuarios);
});

app.append(table, form);

