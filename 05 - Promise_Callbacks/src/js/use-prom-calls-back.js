import { buscarHeroe as buscarHeroeCallbacks } from "./js/callbacks";
import { buscarHeroe } from "./js/promise";
import "./styles.css";

const heroeId1 = "capi";
const heroeId2 = "iron2";

/***********************************************/
/* - Como Usar Callbacks                       */
/***********************************************/

// buscarHeroe(heroeId1, (err, heroe1) => {
//   if (err) return console.error(err);

//   buscarHeroe(heroeId2, (err, heroe2) => {
//     console.log(`Enviado a ${heroe1.nombre} y a ${heroe2.nombre} a la mision`);
//   });
// });

/***********************************************/
/* - Como Usar una promesa                     */
/***********************************************/

// buscarHeroe(heroeId1)
//   .then((heroe1) => {
//     // console.log(`Enviado a ${heroe.nombre} a la mision`);
//     buscarHeroe(heroeId2).then((heroe2) => {
//       console.log(
//         `Enviado a ${heroe1.nombre} y a ${heroe2.nombre} a la mision`
//       );
//     });
//   })
//   .catch((err) => console.log(err));

/***********************************************/
/* - Como usar varias promesas                 */
/***********************************************/

Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
  .then(([heroe1, heroe2]) => {
    console.log(`Enviado a ${heroe1.nombre} y a ${heroe2.nombre} a la mision`);
  })
  .catch((err) => alert(err))
  .finally(() => {
    console.log("Se termino la ejecucion del promise.all");
  });
