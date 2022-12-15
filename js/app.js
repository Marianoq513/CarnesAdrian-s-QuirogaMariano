//Variables
//Selectores
//Fuciones
//Listeners
//Ejecuciones

//DOM
//FOREACH PARA CREAR LAS TARJETAS DE LOS CORTES DE ASADO

productosA.forEach((productosA) => {
  const nuevaCardA = document.createElement("div");
  nuevaCardA.className = "tarjetaProducto";
  nuevaCardA.innerHTML = `    <h3> ${productosA.corte}</h3>
  <img src=${productosA.imgSrc}>
  <p> ${productosA.utilidad} </p>
  <p>$${productosA.precio}</p>
  <button class="buttonCompra" data-id="${productosA.id}">Añadir al carrito</button>
`;
  asadoConteiner.append(nuevaCardA);
});

//Fin forEach asado

//FOREACH PARA CREAR LAS TARJETAS DE LOS CORTES DE BLANDA
productosB.forEach((productosB) => {
  const nuevaCardB = document.createElement("div");
  nuevaCardB.className = "tarjetaProducto";
  nuevaCardB.innerHTML = `    <h3> ${productosB.corte}</h3>
    <img src=${productosB.imgSrc}>
    <p> ${productosB.utilidad} </p>
    <p>$${productosB.precio}</p>
    <button class="buttonCompra" data-id="${productosB.id}">Añadir al carrito</button>
    `;
  blandaConteiner.append(nuevaCardB);
});

//Fin forEach blandas

//FOREACH PARA CREAR LAS TARJETAS DE LOS EMBUTIDOS
productosC.forEach((productosC) => {
  const nuevaCardC = document.createElement("div");
  nuevaCardC.className = "tarjetaProducto";
  nuevaCardC.innerHTML = `    <h3> ${productosC.corte}</h3>
      <img src=${productosC.imgSrc}>
      <p> ${productosC.utilidad} </p>
      <p>$${productosC.precio}</p>
      <button class="buttonCompra" data-id="${productosC.id}">Añadir al carrito</button>
      `;
  embutidoConteiner.append(nuevaCardC);
});

//Fin forEach embutidos

//FOREACH PARA CREAR LAS TARJETAS DE LAS ACHURAS
productosD.forEach((productosD) => {
  const nuevaCardD = document.createElement("div");
  nuevaCardD.className = "tarjetaProducto";
  nuevaCardD.innerHTML = `    <h3> ${productosD.corte}</h3>
        <img src=${productosD.imgSrc}>
        <p> ${productosD.utilidad} </p>
        <p>$${productosD.precio}</p>
        <button class="buttonCompra" data-id="${productosD.id}">Añadir al carrito</button>
        `;
  achurasConteiner.append(nuevaCardD);
});

//Fin forEach achuras
//Funcion para agregar al carrito
let carrito;
if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
} else {
  carrito = [];
}
console.log("carrito", carrito);
const añadirAlCarrito = (e) => {
  const idProductoElegido = e.target.getAttribute("data-id");
  const productoElegido = productosA.find(
    (productosA) => productosA.id == idProductoElegido
  );
  carrito.push(productoElegido);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  console.log(carrito);
};

//Boton de compra
const buttonCompra = document.querySelectorAll(".buttonCompra");
buttonCompra.forEach((button) => {
  button.addEventListener("click", añadirAlCarrito);
});

//Barra buscador
const searchBarInput = document.querySelector("#searchBarInput");

const searchBarButton = document.querySelector("#searchBarButton");

searchBarButton.addEventListener("click", () => {
  console.log(searchBarInput.value);
});
