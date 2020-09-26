class Persona {
  static _conteo = 0;
  static get conteo() {
    return `${Persona._conteo} instancias`;
  }
  static mensaje(){
    console.log(this.nombre) //Undefined
    console.log("Hola soy un mensaje desde un metodo estatico");
  }

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(nombre, codigo, frase) {
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

const spiderman = new Persona(
  "Peter Parker",
  "Spiderman",
  "Soy tu vecion el hombre araña"
);
const iroman = new Persona("Tony Stark", "Iroman", "Soy Iroman");

spiderman.setComidaFavorita = "El pai de la Tía May";
console.log(spiderman.getComidaFavorita);
console.log({ iroman, spiderman });
console.log("Conteo", Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();
