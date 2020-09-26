const osmar = {
  nombre: "Osmar",
  edad: "17",
  imprimir() {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
  },
};

const pedro = {
  nombre: "Pedro",
  edad: "20",
};

// osmar.imprimir();

function Persona(nombre, edad) {
  this.nombre = nombre,
  this.edad = edad,

  this.imprimir = function(){
      console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
  }
}

const maria = new Persona("Maria", 17);

maria.imprimir();
