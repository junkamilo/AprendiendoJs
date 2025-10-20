// 🔹 Solicitamos abrir la base de datos
const BD = indexedDB.open("InventarioNombre", 2);

// 🔹 Si la BD no existe, se crea
BD.addEventListener("upgradeneeded", () => {
  const db = BD.result;
  db.createObjectStore("nombres", { autoIncrement: true });
  console.log("Base de datos creada correctamente ✅");
});

// 🔹 Cuando la BD se abre correctamente
BD.addEventListener("success", () => {
  console.log("Todo salió correctamente con la base de datos ✅");
  mostrarMenu(); // ⬅️ Iniciamos el menú principal
});

// 🔹 Si hubo error al abrir la BD
BD.addEventListener("error", () => {
  console.log("Hubo un error con la base de datos ❌");
});

// ===================================================
// 🔹 FUNCIONES CRUD
// ===================================================

// Agregar objeto
const addObjetos = (objeto) => {
  const db = BD.result;
  const transation = db.transaction("nombres", "readwrite");
  const objEstore = transation.objectStore("nombres");

  const request = objEstore.add(objeto);

  request.onsuccess = () => console.log(`✅ Objeto agregado:`, objeto);
  request.onerror = (e) =>
    console.error("⚠️ Error al agregar el objeto:", e.target.error);

  transation.addEventListener("complete", () =>
    console.log("✅ Transacción completada al agregar.")
  );
};

// Leer objetos
const readObjetos = () => {
  const db = BD.result;
  const transation = db.transaction("nombres", "readonly");
  const objEstore = transation.objectStore("nombres");
  const cursor = objEstore.openCursor();

  console.log("📋 Lista de objetos registrados:");

  cursor.addEventListener("success", () => {
    if (cursor.result) {
      console.log(`🔸 [ID: ${cursor.result.key}]`, cursor.result.value);
      cursor.result.continue();
    } else console.log("✅ Todos los datos fueron leídos.");
  });
};

// Modificar objeto
const modificarObjetos = (key, objeto) => {
  const db = BD.result;
  const transation = db.transaction("nombres", "readwrite");
  const objEstore = transation.objectStore("nombres");
  objEstore.put(objeto, key);

  transation.addEventListener("complete", () => {
    console.log(`✏️ Objeto #${key} modificado correctamente.`);
  });
};

// Eliminar objeto
const eliminarObjetos = (key) => {
  const db = BD.result;
  const transation = db.transaction("nombres", "readwrite");
  const objEstore = transation.objectStore("nombres");
  objEstore.delete(key);

  transation.addEventListener("complete", () => {
    console.log(`🗑️ Objeto #${key} eliminado correctamente.`);
  });
};

// ===================================================
// 🔹 MENÚ PRINCIPAL
// ===================================================
const mostrarMenu = () => {
  let opcion;

  do {
    opcion = prompt(
      `📦 MENÚ DE INVENTARIO
1️⃣ Agregar nombre
2️⃣ Leer todos
3️⃣ Modificar nombre
4️⃣ Eliminar nombre
5️⃣ Salir
Seleccione una opción:`
    );

    if (opcion === null) {
      console.log("🟡 Usuario canceló la operación.");
      break;
    }

    opcion = opcion.trim();

    switch (opcion) {
      case "1":
        agregarDesdePrompt();
        break;
      case "2":
        readObjetos();
        break;
      case "3":
        editarDesdePrompt();
        break;
      case "4":
        eliminarDesdePrompt();
        break;
      case "5":
        console.log("👋 Saliendo del menú...");
        return;
      default:
        alert("⚠️ Opción no válida. Intente de nuevo.");
    }
  } while (true);
};

// ===================================================
// 🔹 FUNCIONES INTERACTIVAS
// ===================================================

// Agregar desde prompt
const agregarDesdePrompt = () => {
  let nombreInventario = prompt("Ingrese el nombre del inventario:");
  if (nombreInventario === null) return;

  nombreInventario = nombreInventario.trim();

  if (nombreInventario === "") {
    alert("⚠️ El nombre no puede estar vacío.");
    return;
  }

  addObjetos({ nombre: nombreInventario });
};

// Editar desde prompt
const editarDesdePrompt = () => {
  let id = prompt("Ingrese el número (ID) del objeto a editar:");
  if (id === null) return;
  id = id.trim();

  if (id === "" || isNaN(id)) {
    alert("⚠️ Debe ingresar un número válido.");
    return;
  }

  let nuevoNombre = prompt("Ingrese el nuevo nombre:");
  if (nuevoNombre === null) return;
  nuevoNombre = nuevoNombre.trim();

  if (nuevoNombre === "") {
    alert("⚠️ El nombre no puede estar vacío.");
    return;
  }

  modificarObjetos(Number(id), { nombre: nuevoNombre });
};

// Eliminar desde prompt
const eliminarDesdePrompt = () => {
  let id = prompt("Ingrese el número (ID) del objeto a eliminar:");
  if (id === null) return;
  id = id.trim();

  if (id === "" || isNaN(id)) {
    alert("⚠️ Debe ingresar un número válido.");
    return;
  }

  eliminarObjetos(Number(id));
};
