function saludar() {
  alert("Buenas tardes " + nombre + " bienvenido a Carnes Adrian's");
}
function despedir() {
  alert("Hasta luego " + nombre + " gracias por su compra");
}
function cant(precio, corte) {
  let cantidad = parseFloat(prompt("cuantos kilos desea llevar?"));
  if (cantidad > 0) {
    multi(cantidad, precio, corte);
  } else {
    alert("Ingrese un numero positivo");
    cant(precio, corte);
  }
}
function multi(cantidad, precio, corte) {
  let total = 0;
  total = cantidad * precio;
  alert(
    "Usted compro " +
      cantidad +
      " kg " +
      " de " +
      corte +
      " y el total de su compra es de $" +
      total
  );
}

let nombre = prompt("Ingrese su nombre");
saludar();
alert(
  "Escoja el corte que desea llevar indicando el numero que tiene al comienzo "
);
let corte = 0;
while (
  corte != "1" &&
  corte != "2" &&
  corte != "3" &&
  corte != "4" &&
  corte != "5"
) {
  corte = prompt(
    "1 Vacio $1.400xkg " +
      "2 Costillas $800xkg " +
      "3 cuadrada $1.500xkg " +
      "4 Osobuco $700xkg " +
      "5 Carne molida $700xkg"
  );
  switch (corte) {
    case "1":
      cant(1400, "vacio");
      break;
    case "2":
      cant(800, "costillas");
      break;
    case "3":
      cant(1500, "cuadrada");
      break;
    case "4":
      cant(700, "osobuco");
      break;
    case "5":
      cant(700, "carne molida");
      break;
    default:
      alert("Numero incorrecto ingrese uno de la tabla");
      break;
  }
}
class Cortes {
  constructor(tipo, utilidad, precio) {
    this.tipo = tipo;
    this.utilidad = utilidad;
    this.precio = precio;
  }
  mostrarUtilidad() {
    console.log(this.utilidad);
  }
}
const vacio = new Cortes("sin hueso", "asado", 1400);
const costilla = new Cortes("con hueso", "asado", 800);
const cuadrada = new Cortes("sin hueso", "bifes", 1500);
const osobuco = new Cortes("con hueso", "olla", 700);
const carneMolida = new Cortes("sin hueso", "hamburgesas", 700);
console.log(vacio);
console.log(costilla);
console.log(cuadrada);
console.log(osobuco);
console.log(carneMolida);
vacio.mostrarUtilidad();
despedir();

