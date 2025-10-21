// 🧁 Función para crear cookies
const crearCookie = (name, value, expires, path = "/", maxAge = "") => {
  let cookie = `${name}=${value}`;
  if (expires) cookie += `; expires=${expires}`;
  if (path) cookie += `; path=${path}`;
  if (maxAge) cookie += `; max-age=${maxAge}`;
  document.cookie = cookie;
  console.log("✅ Cookie creada:", cookie);
};

// 🍪 Función para leer una cookie por nombre
const leerCookie = (name) => {
  // Divide todas las cookies en un arreglo ["nombre=valor", "otra=valor"]
  const cookies = document.cookie.split("; ");

  // Busca la cookie cuyo nombre coincida
  for (let c of cookies) {
    const [cookieName, cookieValue] = c.split("=");
    if (cookieName === name) {
      console.log(`🔍 Cookie encontrada: ${cookieName} = ${cookieValue}`);
      return cookieValue;
    }
  }

  console.warn(`⚠️ No se encontró la cookie "${name}"`);
  return null;
};

// ✏️ Función para modificar una cookie (mismo nombre, nuevo valor o propiedades)
const modificarCookie = (name, newValue, expires, path = "/", maxAge = "") => {
  // Para modificar una cookie, se vuelve a crear con el mismo nombre
  crearCookie(name, newValue, expires, path, maxAge);
  console.log(`✏️ Cookie modificada: ${name} = ${newValue}`);
};

// 🗑️ Función para borrar una cookie
const borrarCookie = (name, path = "/") => {
  // Se “elimina” estableciendo una fecha de expiración en el pasado
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
  console.log(`🗑️ Cookie eliminada: ${name}`);
};

// 🧠 Ejemplo de uso:
crearCookie("usuario", "sebas", "Mon, 26 Dec 2025 12:00:00 UTC", "/");
leerCookie("usuario");
modificarCookie("usuario", "juanKa", "Mon, 26 Dec 2025 12:00:00 UTC", "/");
borrarCookie("usuario");
