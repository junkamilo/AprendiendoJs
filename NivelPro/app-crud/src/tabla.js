import { SecundForm } from "./formulario";
import { DeleteUser, PutUsers } from "./JsonPlaceholder/JsonPlaceholder-app";

export const Tabla = (data) => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const headers = ["Name", "Username", "Email", "Phone", "Website"];
  const trHead = document.createElement("tr");
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);
  table.append(thead, tbody);

  // Función para renderizar las filas
  const renderRows = (users) => {
    tbody.innerHTML = ""; // Limpiar tabla antes de renderizar

    users.forEach(({ name, username, email, phone, website }, index) => {
      const tr = document.createElement("tr");

      // Celdas de información
      [name, username, email, phone, website].forEach((cell) => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      });

      // 🔹 Columna de acciones
      const tdActions = document.createElement("td");
      tdActions.classList.add("table-actions");

      const buttonActualizar = document.createElement("button");
      const buttonEliminar = document.createElement("button");

      buttonActualizar.classList.add("btn-action", "btn-edit"); 
      buttonEliminar.classList.add("btn-action", "btn-delete");

      buttonActualizar.textContent = "Actualizar";
      buttonEliminar.textContent = "Eliminar";

      // Eventos PUT actualizar
      buttonActualizar.addEventListener("click", () => {
        SecundForm(users[index], async (updatedData) => {
          // Llamada PUT
          const updatedUser = await PutUsers(users[index].id, updatedData);

          // Actualiza el array local
          users[index] = updatedUser;

          // Re-renderiza la tabla
          renderRows(users);
        });
      });

      //Boton eliminar
      buttonEliminar.addEventListener("click", async (id) => {
        const confirmacion = confirm(`¿Seguro que quieres eliminar a ${name}?`);

        if (!confirmacion) return;

        try {
          const result = await DeleteUser(id);

          if (result.success) {
            // Eliminar del array local
            users.splice(index, 1);

            // Volver a renderizar la tabla
            renderRows(users);
          }
        } catch (error) {
          console.error("Error al eliminar el usuario:", error);
          alert("No se pudo eliminar el usuario.");
        }
      });

      // Agregamos los botones a la celda de acciones
      tdActions.append(buttonActualizar, buttonEliminar);

      // Agregamos la celda de acciones al final de la fila
      tr.appendChild(tdActions);

      // Finalmente, agregamos la fila completa al tbody
      tbody.appendChild(tr);
    });
  };

  // Render inicial
  renderRows(data);

  // Retornar tabla y método para actualizarla
  return { table, renderRows };
};
