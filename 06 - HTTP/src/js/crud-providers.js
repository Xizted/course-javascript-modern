const urlCRUD = "https://reqres.in/api/users";

const getUser = async (id) => {
  const resp = await fetch(`${urlCRUD}/${id}`);
  if (!resp.ok)
    throw `No se ha podido realizar su peticion, code: ${resp.status}`;
  const { data } = await resp.json();

  return data;
};

const createUser = async (usuario) => {
  const resp = await fetch(urlCRUD, {
    method: "POST",
    body: JSON.stringify(usuario),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!resp.ok)
    throw `No se ha podido realizar su peticion, code: ${resp.status}`;

  return await resp.json();
};

const updateUser = async (id, usuario) => {
  const resp = await fetch(`${urlCRUD}/${id}`, {
    method: "PUT",
    body: JSON.stringify(usuario),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!resp.ok)
    throw `No se ha podido realizar su peticion, code: ${resp.status}`;

  return await resp.json();
};

const deleteUser = async (id) => {
  const resp = await fetch(`${urlCRUD}/${id}`, {
    method: "DELETE",
  });
  return resp.ok ? "Borrado" : "No se pudo eliminar";
};

export { getUser, createUser, updateUser, deleteUser };
