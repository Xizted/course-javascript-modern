const elMayor = (a, b) => (a > b ? a : b);

const tieneMembresia = (miembro) => (miembro ? "2 Dolares" : "10 Dolares");

console.log(elMayor(100, 20));
console.log(tieneMembresia(false));

const amigo = true;
const amigoArr = [
  "Peter",
  "Tony",
  "Dr. Stranger",
  amigo ? "Thor" : "Loki",
  (() => "Nick Fury")(),
  elMayor(100, 20),
];

console.log(amigoArr);

const nota = 100;
const grado =
  nota >= 95
    ? "A+"
    : nota >= 90
    ? "A"
    : nota >= 85
    ? "B+"
    : nota >= 75
    ? "C+"
    : nota >= 70
    ? "C"
    : "F";
console.log({ nota, grado });
