import { heroes } from "./models/heroes";

export const buscarHeroe = (id) => {
  const heroe = heroes[id];

  return new Promise((res, rej) => {
    if (heroe) {
      setTimeout(() => res(heroe), 1000);
    } else {
      rej(`No se pudo encontrar el id ${id}`);
    }
  });
};

export const buscarHeroeAsync = async (id) => {
  const heroe = heroes[id];

  if (heroe) {
    return heroe;
  } else {
    throw `No se pudo encontrar el id ${id}`;
  }
};

const promesaLenta = new Promise((res, rej) => {
  setTimeout(() => res("Promesa Lenta"), 2000);
});

const promesaMedia = new Promise((res, rej) => {
  setTimeout(() => res("Promesa Media"), 1500);
});

const promesaRapida = new Promise((res, rej) => {
  setTimeout(() => res("Promesa Rapida"), 1000);
});

export { promesaLenta, promesaMedia, promesaRapida };
