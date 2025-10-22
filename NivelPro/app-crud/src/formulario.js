import { Postusers } from "./JsonPlaceholder/JsonPlaceholder-app";

export const Formulario = (onNewUser) => {
  const formulario = document.createElement("form");
  const inputName = document.createElement("input");
  const inputUserName = document.createElement("input");
  const inputEmail = document.createElement("input");
  const inputPhone = document.createElement("input");
  const inputWebsite = document.createElement("input");
  const button = document.createElement("button");

  inputName.placeholder = "Nombre";
  inputUserName.placeholder = "Usuario";
  inputEmail.placeholder = "Correo";
  inputPhone.placeholder = "Teléfono";
  inputWebsite.placeholder = "Sitio web";
  button.textContent = "Enviar";
  button.type = "submit";

  formulario.append(
    inputName,
    inputUserName,
    inputEmail,
    inputPhone,
    inputWebsite,
    button
  );

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      name: inputName.value,
      username: inputUserName.value,
      email: inputEmail.value,
      phone: inputPhone.value,
      website: inputWebsite.value,
    };

    const response = await Postusers(nuevoUsuario);
    console.log("Nuevo usuario creado:", response);

    // Le avisamos al main que hay un nuevo usuario
    onNewUser(response);

    formulario.reset();
  });

  return formulario;
};

//formulario secundario de actualizar
export const SecundForm = (data, onSubmit) => {
  // --- 1. Crear Elementos ---
  const overlay = document.createElement("div");
  const form = document.createElement("form");
  const title = document.createElement("h3");
  const btnGroup = document.createElement("div");
  const btnGuardar = document.createElement("button");
  const btnCancelar = document.createElement("button");

  // --- 2. Añadir Clases CSS (en lugar de estilos en línea) ---
  overlay.classList.add("modal-overlay");
  form.classList.add("modal-form");
  title.classList.add("modal-title");
  btnGroup.classList.add("form-actions");
  btnGuardar.classList.add("btn", "btn-primary");
  btnCancelar.classList.add("btn", "btn-secondary");

  // --- 3. Contenido y Atributos ---
  title.textContent = `Editar usuario: ${data.name}`;
  form.appendChild(title);

  const inputs = [
    { label: "Nombre", key: "name", type: "text" },
    { label: "Usuario", key: "username", type: "text" },
    { label: "Correo", key: "email", type: "email" },
    { label: "Teléfono", key: "phone", type: "tel" },
    { label: "Sitio Web", key: "website", type: "text" },
  ];

  const fields = {};

  inputs.forEach(({ label, key, type }) => {
    const div = document.createElement("div");
    div.classList.add("form-group"); // Contenedor para label + input

    const lbl = document.createElement("label");
    lbl.textContent = label;
    lbl.setAttribute("for", key);

    const input = document.createElement("input");
    input.id = key;
    input.type = type;
    input.value = data[key] || "";
    input.classList.add("form-input"); // Clase para el input

    div.append(lbl, input);
    form.append(div);
    fields[key] = input;
  });

  // Botones
  btnGuardar.textContent = "Guardar";
  btnGuardar.type = "submit";

  btnCancelar.textContent = "Cancelar";
  btnCancelar.type = "button";

  btnGroup.append(btnGuardar, btnCancelar);
  form.append(btnGroup);

  // --- 4. Lógica de Eventos ---

  // Función para cerrar el modal con animación
  const closeAndRemove = () => {
    overlay.classList.add("modal-overlay--closing");
    overlay.addEventListener(
      "animationend",
      () => {
        if (document.body.contains(overlay)) {
          document.body.removeChild(overlay);
        }
      },
      { once: true }
    );
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const updatedData = {};
    for (const key in fields) {
      updatedData[key] = fields[key].value.trim();
    }
    onSubmit(updatedData);
    closeAndRemove(); // Cierra al guardar
  });

  btnCancelar.addEventListener("click", () => {
    closeAndRemove(); // Cierra al cancelar
  });

  // --- 5. Montar y Mostrar ---
  overlay.appendChild(form);
  document.body.appendChild(overlay);
};
