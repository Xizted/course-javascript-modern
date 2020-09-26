class Rectangulo {
  #area = 0;

  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
    this.#area = this.base * this.altura;
    this.#calcularArea();
  }

  #calcularArea(){
      console.log(this.#area * 2);
  }
}

const rectangulo = new Rectangulo(10,10);
console.log(rectangulo);
