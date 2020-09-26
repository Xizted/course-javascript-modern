const anime = "https://api.jikan.moe/v3";

const buscarAnime = async (nombre) => {
  const resp = await fetch(`${anime}/search/anime?q=${nombre}&page=1`);
  if (!resp.ok) throw `Error ${resp.status}`;

  const data = resp.json();

  return data;
};

const body = document.body;
let tbody;
let count = 1;

const crearHtml = () => {
  const html = `
    <h1 class="mt-5"> Usuarios</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Episodes</th>
                <th scope="col">Image</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

  const div = document.createElement("div");
  div.innerHTML = html;
  body.appendChild(div);

  // Crear una referencia al TBODY
  // ya que los TRs van dentro del tbody
  // querySelector('tbody');
  // Crear una variable para mantener la referencia?

  tbody = document.querySelector("tbody");
};

// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
// {
//     "id": 7,
//     "email": "michael.lawson@reqres.in",
//     "first_name": "Michael",
//     "last_name": "Lawson",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
// }
const crearFilaUsuario = ({ title, mal_id, image_url, episodes }) => {
  // En la tabla deben de colocar un correlativo empezando en 1
  // También deben de colocar el avatar

  const html = `
        <td scope="col"> ${mal_id} </td>
        <td scope="col"> ${title} </td>
        <td scope="col"> ${episodes}</td>
        <td scope="col">
            <img class="img-thumbnail" src="${image_url}">
        </td>
    `;

  const tr = document.createElement("tr");
  tr.innerHTML = html;

  // Añadir el table row (tr) dentro del TBody creado anteriormente
  tbody.append(tr);
};

export const init = async () => {
  crearHtml();

  // Obtener la lista de usuarios usando el servicio creado
  // Por cada usuario, llamar la función crearFila (for, forEach)
  // Colocar el init en el index.js, para que se ejecute la creación
  const animes = await buscarAnime("Naruto");
  animes.results.forEach((element) => {
    crearFilaUsuario(element);
  });
};
