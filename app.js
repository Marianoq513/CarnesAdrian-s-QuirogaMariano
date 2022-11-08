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
    let cantidad = parseFloat(prompt("ingrese un numero positivo"));
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
      "3 Entraña $1.500xkg " +
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
      cant(1500, "entraña");
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

despedir();

