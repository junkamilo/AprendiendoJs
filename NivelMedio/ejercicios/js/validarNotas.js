document.addEventListener("DOMContentLoaded", () => {
  const APPROVAL_THRESHOLD = 3.0;
  const body = document.body;
  let students = JSON.parse(localStorage.getItem("students")) || [];

  /**
   * Crea un elemento con una clase y un contenido de texto opcional.
   * @param {string} tag - La etiqueta HTML del elemento (ej. 'div', 'h1').
   * @param {string|string[]} className - La(s) clase(s) a aplicar.
   * @param {string} [textContent] - El texto del elemento.
   * @returns {HTMLElement} El elemento creado.
   */
  const createElement = (tag, className, textContent) => {
    const element = document.createElement(tag);
    if (className) {
      // Permite múltiples clases si se pasan como un array
      if (Array.isArray(className)) {
        element.classList.add(...className);
      } else {
        element.classList.add(className);
      }
    }
    if (textContent) element.textContent = textContent;
    return element;
  };

  /**
   * Crea un icono de Font Awesome.
   * @param {string[]} classes - Array de clases de Font Awesome (ej. ['fas', 'fa-moon']).
   * @returns {HTMLElement} El elemento <i> del icono.
   */
  const createIcon = (classes) => {
    const icon = document.createElement("i");
    icon.classList.add(...classes);
    return icon;
  };

  const createAndRenderApp = () => {
    const mainContainer = createElement("main", "main-container");

    // --- Tarjeta del Formulario ---
    const formCard = createElement("section", "card");

    // Header de la tarjeta
    const header = createElement("div", "header");
    const h1 = createElement("h1", null, " Evaluación de Estudiantes");
    h1.prepend(createIcon(["fas", "fa-user-graduate"])); // Añadir icono al inicio

    const themeSwitcher = createElement("div", "theme-switcher");
    themeSwitcher.title = "Cambiar tema";
    themeSwitcher.appendChild(createIcon(["fas", "fa-moon"]));
    header.append(h1, themeSwitcher);

    // Formulario
    const form = document.createElement("form");
    form.id = "student-form";

    const formGrid = createElement("div", "form-grid");

    // Función para crear un grupo de formulario (label + input)
    const createFormGroup = (
      id,
      labelText,
      type,
      placeholder,
      min,
      max,
      step
    ) => {
      const group = createElement("div", "form-group");
      const label = createElement("label", null, labelText);
      label.htmlFor = id;
      const input = document.createElement("input");
      input.id = id;
      input.type = type;
      input.placeholder = placeholder;
      input.required = true;
      if (type === "number") {
        input.min = min;
        input.max = max;
        input.step = step;
      }
      group.append(label, input);
      return group;
    };

    formGrid.append(
      createFormGroup(
        "student-name",
        "Nombre del Estudiante:",
        "text",
        "Ej: Ana Pérez"
      ),
      createFormGroup(
        "grade1",
        "Nota 1:",
        "number",
        "0.0 - 5.0",
        "0",
        "5",
        "0.1"
      ),
      createFormGroup(
        "grade2",
        "Nota 2:",
        "number",
        "0.0 - 5.0",
        "0",
        "5",
        "0.1"
      ),
      createFormGroup(
        "grade3",
        "Nota 3:",
        "number",
        "0.0 - 5.0",
        "0",
        "5",
        "0.1"
      )
    );

    // Botones del formulario
    const formButtons = createElement("div", "form-buttons");
    const submitButton = createElement(
      "button",
      ["btn", "btn-primary"],
      " Calcular y Guardar"
    );
    submitButton.type = "submit";
    submitButton.prepend(createIcon(["fas", "fa-calculator"]));

    const resetButton = createElement(
      "button",
      ["btn", "btn-secondary"],
      " Limpiar"
    );
    resetButton.type = "reset";
    resetButton.prepend(createIcon(["fas", "fa-eraser"]));

    formButtons.append(submitButton, resetButton);
    form.append(formGrid, formButtons);
    formCard.append(header, form);

    // --- Tarjeta de Resultados ---
    const resultsCard = createElement("section", "card");
    const h2 = createElement("h2", null, " Resultados Académicos");
    h2.prepend(createIcon(["fas", "fa-poll"]));

    const table = createElement("table", "results-table");
    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");
    const headers = ["Nombre", "Promedio", "Estado", "Acciones"];
    headers.forEach((text) => {
      trHead.appendChild(createElement("th", null, text));
    });
    thead.appendChild(trHead);

    const tbody = document.createElement("tbody");
    tbody.id = "results-tbody";

    table.append(thead, tbody);
    resultsCard.append(h2, table);

    // --- Ensamblaje Final ---
    mainContainer.append(formCard, resultsCard);
    body.appendChild(mainContainer);
  };

  /**
   * Dibuja las filas de la tabla de resultados basándose en el array `students`.
   */
  const renderTable = () => {
    const tbody = document.getElementById("results-tbody");
    // Limpiar tbody de forma segura y eficiente
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    if (students.length === 0) {
      const tr = document.createElement("tr");
      const td = createElement("td", null, "No hay estudiantes registrados.");
      td.colSpan = 4;
      td.style.textAlign = "center";
      tr.appendChild(td);
      tbody.appendChild(tr);
      return;
    }

    students.forEach((student) => {
      const tr = document.createElement("tr");
      tr.dataset.id = student.id;

      // Celda Nombre
      tr.appendChild(createElement("td", null, student.name));

      // Celda Promedio
      tr.appendChild(createElement("td", null, student.average.toFixed(2)));

      // Celda Estado
      const tdStatus = document.createElement("td");
      const statusClass =
        student.status === "Aprobado" ? "status-approved" : "status-reproved";
      const emoji = student.status === "Aprobado" ? "✅" : "❌";
      const spanStatus = createElement(
        "span",
        ["status", statusClass],
        `${student.status} ${emoji}`
      );
      tdStatus.appendChild(spanStatus);
      tr.appendChild(tdStatus);

      // Celda Acciones
      const tdActions = createElement("td", "actions");
      const btnEdit = createElement("button", "btn-edit");
      btnEdit.title = "Editar";
      btnEdit.appendChild(createIcon(["fas", "fa-edit"]));

      const btnDelete = createElement("button", "btn-delete");
      btnDelete.title = "Eliminar";
      btnDelete.appendChild(createIcon(["fas", "fa-trash"]));

      tdActions.append(btnEdit, btnDelete);
      tr.appendChild(tdActions);

      tbody.appendChild(tr);
    });
  };

  const saveStudents = () => {
    localStorage.setItem("students", JSON.stringify(students));
  };

  const loadTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      body.classList.add("dark-mode");
      const icon = document.querySelector(".theme-switcher i");
      if (icon) icon.classList.replace("fa-moon", "fa-sun");
    }
  };

  // === MANEJO DE EVENTOS ===
  body.addEventListener("submit", (e) => {
    if (e.target.id === "student-form") {
      e.preventDefault();
      const name = document.getElementById("student-name").value.trim();
      const grades = [
        parseFloat(document.getElementById("grade1").value),
        parseFloat(document.getElementById("grade2").value),
        parseFloat(document.getElementById("grade3").value),
      ];

      if (name === "" || grades.some(isNaN)) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
      }

      const average =
        grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
      const status = average >= APPROVAL_THRESHOLD ? "Aprobado" : "Reprobado";

      students.push({ id: Date.now(), name, grades, average, status });
      saveStudents();
      renderTable();
      e.target.reset();

      const message =
        status === "Aprobado"
          ? `¡Excelente trabajo, ${name}! Sigue así 🚀`
          : `No te rindas, ${name}. Siempre hay una nueva oportunidad 💪`;
      setTimeout(() => alert(message), 300);
    }
  });

  body.addEventListener("click", (e) => {
    const themeSwitcher = e.target.closest(".theme-switcher");
    if (themeSwitcher) {
      body.classList.toggle("dark-mode");
      const isDarkMode = body.classList.contains("dark-mode");
      const icon = themeSwitcher.querySelector("i");
      if (isDarkMode) {
        icon.classList.replace("fa-moon", "fa-sun");
      } else {
        icon.classList.replace("fa-sun", "fa-moon");
      }
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }

    const btnEdit = e.target.closest(".btn-edit");
    const btnDelete = e.target.closest(".btn-delete");

    if (btnEdit || btnDelete) {
      const studentId = Number(e.target.closest("tr").dataset.id);
      const studentIndex = students.findIndex((s) => s.id === studentId);

      if (btnDelete) {
        if (
          confirm(`¿Estás seguro de eliminar a ${students[studentIndex].name}?`)
        ) {
          students.splice(studentIndex, 1);
          saveStudents();
          renderTable();
        }
      }

      if (btnEdit) {
        const student = students[studentIndex];
        const newName = prompt("Nuevo nombre:", student.name);
        if (newName && newName.trim() !== "") {
          student.name = newName.trim();
          saveStudents();
          renderTable();
        }
      }
    }
  });

  createAndRenderApp();
  loadTheme();
  renderTable();
});
