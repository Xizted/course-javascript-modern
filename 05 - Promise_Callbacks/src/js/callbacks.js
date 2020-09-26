import { heroes } from "./models/heroes";

export const buscarHeroe = (id, callback) => {
  const heroe = heroes[id];
  if (heroe) {
    callback(null, heroe);
  } else {
    callback(`El id "${id}" del heroe no existe`);
  }
};
