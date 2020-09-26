function saludar(nombre) {
  // console.log(arguments);
  // console.log(`Hola ${nombre}`);

  return [1, 2];

  console.log("Soy un codigo que está después del return"); // Esta linea nunca de se ejecutara
}

// Funcion anonima
const saludar2 = function (nombre) {
  console.log(`Hola ${nombre}`);
};

const saludarFlecha = () => {
  console.log("Hola flecha");
};

const saludarFlecha2 = (nombre) => {
  console.log(`Hola ${nombre}`);
};

const retornoDeSaludar = saludar("Xizted", 17, false, "Venezuela");
console.log(retornoDeSaludar[0], retornoDeSaludar[1]);
// saludar2("Osmar");
// saludarFlecha();
// saludarFlecha2("Osmar");

function sumar(a, b) {
  return a + b;
}

// const sumar2 = (a, b) => {
//   return a + b;
// };

const sumar2 = (a, b) => a + b;

// function getAleatorio() {
//   return Math.random();
// }

// Transforme la funcion getAleatorio en una funcion de flecha, que no tenga llaves

const getAleatorio = () => Math.random();

console.log(getAleatorio());
