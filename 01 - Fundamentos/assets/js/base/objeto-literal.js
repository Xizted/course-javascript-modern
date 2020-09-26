let personaje = {
  nombre: "Tony Stark",
  codeName: "Iroman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
  "ultima pelicula": "Infinity War",
};

console.log(personaje);
console.log(`Nombre: ${personaje.nombre}`);
console.log(`Nombre: ${personaje["nombre"]}`);
console.log(`Edad: ${personaje.edad}`);
console.log(`Coordenadas: ${personaje.coords}`);
console.log(`Latitud: ${personaje.coords.lat}`);
console.log(`No. Trajes: ${personaje.trajes.length}`);
console.log(`Ultimo Traje: ${personaje.trajes[personaje.trajes.length - 1]}`);

const x = "vivo";
console.log(`Vivo: ${personaje[x]}`);

console.log(`Ultima pelicula: ${personaje["ultima pelicula"]}`);

// Mas detalles

//Eliminar propiedad del objeto
delete personaje.edad;

console.log(personaje);

//Crear una nueva propiedad al objeto

personaje.casado = true;
console.log(personaje);

//Convertir el objeto a un array
const entriesPares = Object.entries(personaje);

console.log(entriesPares);

//Impedir que el objeto mute (se agregue, modifique o elimine propiedades);

Object.freeze(personaje);

personaje.dinero = 100000000;
personaje.casado = false;
personaje.direccion.ubicacion = "Costa Rica";
console.log(personaje);

// Obtener todas las propiedades de un objeto

let propiedadesObjeto = Object.getOwnPropertyNames(personaje);

// Obtener todos los valores de las propiedades de un objeto

let valoresObjeto = Object.values(personaje);

console.log({ propiedadesObjeto, valoresObjeto });
