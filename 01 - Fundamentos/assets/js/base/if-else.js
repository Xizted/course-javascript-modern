let a = 5;

if (a >= 10) {
  console.log("A es mayor a 10");
} else {
  console.log("A es menor a 10");
}

const hoy = new Date();

let dia = hoy.getDay();

console.log(dia);

if (dia === 0) {
  console.log("Es domingo");
} else if (dia === 1) {
  console.log("Es Lunes");
}

// Sin usar If - Else, o Switch, unicamente objetos
dia = 3; // 0: domingo, 1: lunes...

// dia de la semana

const diaSemana = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sabado",
};
const diaSemana2 = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

console.log(diaSemana[dia] || "Día no encontrado");
