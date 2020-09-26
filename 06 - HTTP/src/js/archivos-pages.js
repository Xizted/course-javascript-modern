import { subirImagen } from "./http-providers";

const body = document.body;
let inputFile, imgFoto;

const crearInputFileHTML = () => {
  const html = `
        <h1 class="mt-5">Subir Archivo</h1>
        <hr>

        <label>Seleciona una fotografia</label>
        <input type="file" accept="image/png, image/jpeg"/>

        <br/>

        <img src="" id="foto" class="img-thumbnail" />
    `;

  const div = document.createElement("div");
  div.innerHTML = html;

  body.append(div);

  inputFile = document.querySelector("input");
  imgFoto = document.querySelector("#foto");
};

const eventos = () => {
  inputFile.addEventListener("change", (event) => {
    const file = event.target.files[0];
    subirImagen(file).then((resp) => {
      imgFoto.src = resp;
    });
  });
};

export const init = () => {
  crearInputFileHTML();
  eventos();
};
