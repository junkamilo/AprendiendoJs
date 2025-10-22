/**
 * HAREMOS LAS PETICIONES (CRUD)
 */

//GET
export const GetUsers = async () => {
  const DataUsers = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await DataUsers.json();
  return users;
};
//POST
export const Postusers = async (data) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const newUser = await response.json();
  return newUser;
};
//PUT
export const PutUsers = async (id, data) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  const updatedUser = await response.json();
  return updatedUser;
};
//PATCH
//DELETE
export const DeleteUser = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: "DELETE",
    }
  );

  // JSONPlaceholder no devuelve cuerpo, así que no intentamos hacer response.json()
  if (!response.ok) {
    throw new Error("Error al eliminar el usuario");
  }

  // Devuelve el id borrado o un estado de éxito
  return { success: true, id };
};
