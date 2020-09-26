const jokeUrl = "https://api.chucknorris.io/jokes/random";
const urlUsuario = "https://reqres.in/api/users?page=2";

const cloudPresets = "ptjesojb";
const cloudUrl = "https://api.cloudinary.com/v1_1/dncarqslx/upload";

const obtenerChiste = async () => {
  try {
    const resp = await fetch(jokeUrl);

    if (!resp.ok) throw "No se ha podido realizar su peticion";

    const { icon_url, id, value } = await resp.json();

    return {
      icon_url,
      id,
      value,
    };
  } catch (error) {
    throw error;
  }
};

const obtenerUsuario = async () => {
  try {
    const resp = await fetch(urlUsuario);
    if (!resp.ok) throw "No se ha podido procesar su solicitud";
    const { data: usuarios } = await resp.json();
    return usuarios;
  } catch (err) {
    throw err;
  }
};

const subirImagen = async (img) => {
  const formData = new FormData();

  formData.append("upload_preset", cloudPresets);
  formData.append("file", img);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (err) {
    throw err;
  }
};

export { obtenerChiste, obtenerUsuario, subirImagen };
