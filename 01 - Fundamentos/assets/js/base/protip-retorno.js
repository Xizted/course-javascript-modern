// function crearPersona(nombre, persona) {
//   return {
//     nombre,
//     persona,
//   };
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });
const persona = crearPersona("osmar", "ortiz");

console.log(persona);

function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => {
  //   console.log({ edad, args });
  return args;
};

const [vivo, casado, nombre, saludo] = imprimeArgumentos2(
  10,
  true,
  false,
  "Osmar",
  "Hola"
);

console.log({ vivo, casado, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona("osmar", "ortiz");

console.log(nuevoApellido);

const tony = {
  nombre: "Tony Stark",
  codeName: "Iroman",
  vivo: false,
  //   edad: 40,
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
};

// const imprimePropiedades = (personaje) => {
//   console.log("nombre", personaje.nombre);
//   console.log("codename", personaje.codeName);
//   console.log("vivo", personaje.vivo);
//   console.log("edad", personaje.edad);
//   console.log("trajes", personaje.trajes);
// };

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  edad = edad || 0;

  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

imprimePropiedades(tony);
