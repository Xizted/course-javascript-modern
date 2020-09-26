const regresaTrue = () => {
  console.log("Regresa true");
  return true;
};

const regresaFalse = () => {
  console.log("Regresa false");
  return false;
};

console.warn("Not o Negacion");
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()); // true

console.warn("And"); // Retorna true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // false

console.log("============");
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());

console.log("===== && =====");
regresaFalse() && regresaTrue();
console.log("4 condiciones", true && true && true && false); // true

console.warn("OR"); // Retorna true si algun valor es verdadero
console.log(true || false); // true
console.log(false || false); // false

console.log(regresaFalse() || regresaTrue());
console.log(regresaTrue() || regresaFalse());

console.log("4 condiciones", true || true || true || false); // true

// Asignaciones con operadores logicos

console.warn("Asignaciones");

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && "Hola Mundo" && 150; //"tomara el ultimo valor si todos son valores validos"
const a2 = "Hola" && "Mundo"; // "Mundo"
const a3 = "Hola" && "Mundo" && soyFalso && true; //retorna falso porque todos deben ser verdaderos
const a4 = soyFalso || "Ya no soy falso"; // "Ya no soy falso"
const a5 =
  soyFalso || soyUndefined || soyUndefined || soyNull || "Ya no soy falso"; // "Ya no soy falso"

const a6 =
  soyFalso ||
  soyUndefined ||
  soyUndefined ||
  soyNull ||
  "Ya no soy falso" ||
  true; // "Ya no soy falso"

const a7 =
  soyFalso ||
  soyUndefined ||
  soyUndefined ||
  regresaTrue() ||
  "Ya no soy falso" ||
  true; // true

console.log({ a1, a2, a3, a4, a5, a6, a7 });

console.log("===============");

if (true || false || true || false) {
  console.log("Hacer algo");
} else {
  console.log("Hacer otra cosa");
}
