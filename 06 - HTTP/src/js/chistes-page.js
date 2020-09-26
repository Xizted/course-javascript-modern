import { obtenerChiste } from "./http-providers";
const body = document.body;
let btnOtro, olChiste;

const crearHTML = () => {
  const html = `<h1 class="mt-5">Chistes</h1>
    <hr />
    <button class="btn btn-primary">Otro chiste</button>
  
    <ol class="mt-2 list-group">
      
    </ol>`;

  const div = document.createElement("div");
  div.innerHTML = html;
  body.append(div);
};

const evento = () => {
  olChiste = document.querySelector("ol");
  btnOtro = document.querySelector("button");

  btnOtro.addEventListener("click", async () => {
    btnOtro.disabled = true;
    dibujarChiste(await obtenerChiste());
    btnOtro.disabled = false;
  });
};

const dibujarChiste = (chiste) => {
  const liChiste = document.createElement("li");
  liChiste.innerHTML = `<img src="${chiste.icon_url}"></img><b>${chiste.id}</b>: ${chiste.value}`;
  liChiste.classList.add("list-group-item");

  olChiste.append(liChiste);
};

export const init = () => {
  crearHTML();
  evento();
};
