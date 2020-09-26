import { heroes } from "./models/heroes";
import { buscarHeroeAsync, buscarHeroe } from "./promise";
const heroesIds = ["capi", "iron", "spider"];

const heroesPromesas = heroesIds.map(buscarHeroeAsync);
export const obtenerheroesArr = async () => {
  return await Promise.all(heroesIds.map(buscarHeroe));
  // const heroesArr = [];

  // for (const id of heroesIds) {
  //   heroesArr.push(buscarHeroe(id));
  // }

  // return await Promise.all(heroesArr);
};

export const obtenerHeroeAwait = async (id) => {
  try {
    const heroe = await buscarHeroeAsync(id);

    return heroe;
  } catch (err) {
    return {
      nombre: "Sin nombre",
      poder: "Sin poder",
    };
  }
};

export const heroesCiclos = async () => {
  console.time("HeroesCiclos");

  for await (const heroe of heroesPromesas) {
    console.log(heroe);
  }

  console.timeEnd("HeroesCiclos");

  // const heroes = await Promise.all(heroesPromesas);
  // heroes.forEach(heroe => console.log(heroe));
  return heroes;
};

export const heroesIfAwait = async (id) => {
  if ((await buscarHeroeAsync(id)).nombre === "Ironman") {
    console.log("Es el mejor de todo");
  } else {
    console.log("Nah");
  }
};
