class Singleton {
  static instancia;
  nombre = "";

  constructor(nombre = "") {
    if (Singleton.instancia != undefined) {
      return Singleton.instancia;
    }

    this.nombre = nombre;
    Singleton.instancia = this;
  }
}

const instancia1 = new Singleton("Iroman");
const instancia2 = new Singleton("Spiderman");
const instancia3 = new Singleton("Black Panther");

console.log(`El nombre de la instancia1 es: ${instancia1.nombre}`);
console.log(`El nombre de la instancia2 es: ${instancia2.nombre}`);
console.log(`El nombre de la instancia3 es: ${instancia3.nombre}`);
