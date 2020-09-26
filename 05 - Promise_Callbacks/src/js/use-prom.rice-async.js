import { promesaLenta, promesaMedia, promesaRapida } from "./js/promise";
import { buscarHeroe, buscarHeroeAsync } from "./js/promise";

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//   .then(console.log)
//   .catch(console.error);

buscarHeroe("capi2").then(console.log).catch(console.error);
buscarHeroeAsync("iron2").then(console.log).catch(console.error);
