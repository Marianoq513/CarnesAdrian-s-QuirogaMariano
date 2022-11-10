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
const carrito = [];
let total = 0;
function multi(cantidad, precio) {
  let subtotal = cantidad * precio;
  total = total + subtotal;
}
function comprar() {
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
}
let nombre = prompt("Ingrese su nombre");
saludar();
comprar();
let seguirComprando = prompt(
  "Si quiere seguir comprando ingrese 1 sino cualquier otra tecla"
);
do {
  comprar();
  seguirComprando = prompt(
    "Si quiere seguir comprando ingrese 1 sino cualquier otra tecla"
  );
} while (seguirComprando == 1);

const cortes = [
  {
    corte: "Vacio",
    utilidad: "Asado",
    precio: 1400,
  },
  {
    corte: "Costillas",
    utilidad: "Asado",
    precio: 800,
  },
  {
    corte: "Cuadrada",
    utilidad: "Blanda",
    precio: 1500,
  },
  {
    corte: "Osobuco",
    utilidad: "Olla",
    precio: 700,
  },
  {
    corte: "Carne molida",
    utilidad: "Hamburgesas",
    precio: 700,
  },
];

for (const corte of cortes) {
  console.log(corte);
}
carrito.push(total);
alert("El total de su compra es " + carrito);
despedir();