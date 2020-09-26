class Persona {
  static _conteo = 0;
  static get conteo() {
    return `${Persona._conteo} instancias`;
  }
  static mensaje() {
    console.log(this.nombre); //Undefined
    console.log("Hola soy un mensaje desde un metodo estatico");
  }

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "Sin Nombre",
    codigo = "Sin Codigo",
    frase = "Sin Frase"
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y soy ${this.codigo}`);
  }

  miFrase() {
    console.log(`La frase de ${this.codigo} es ${this.frase}`);
  }
}

class Heroe extends Persona {
  clan = "";

  constructor(nombre, codigo, frase, clan) {
    super(nombre, codigo, frase);
    this.clan = clan;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre}, de ${this.clan}`);
    super.quienSoy();
  }
}

const spiderman = new Heroe(
  "Peter Parker",
  "Spiderman",
  "Soy tu vecino el hombre araña",
  "The Avengers"
);
// const spiderman = new Heroe();

console.log(spiderman);
spiderman.quienSoy();
