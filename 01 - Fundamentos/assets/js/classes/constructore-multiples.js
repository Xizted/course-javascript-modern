class Persona {
  static getObject({ nombre, apellido, pais }) {
    return new Persona(nombre, apellido, pais);
  }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`Info: ${this.nombre} | ${this.apellido} | ${this.pais}`);
  }
}

const nombre1 = "Osmar",
  apellido1 = "Ortiz",
  pais1 = "Venezuela";

const nombre2 = {
  nombre: "Osmar",
  apellido: "Ortiz",
  pais: "Venezuela",
};

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.getObject(nombre2);

persona1.getInfo();
persona2.getInfo();
