//DOM
//FOREACH PARA CREAR LAS TARJETAS DE LOS CORTES DE ASADO
productosA.forEach((productosA) => {
  const nuevaCardA = document.createElement("div");
  nuevaCardA.className = "tarjetaProducto";
  nuevaCardA.innerHTML = `    <h3> ${productosA.corte}</h3>
  <img src=${productosA.imgSrc}>
  <p> ${productosA.utilidad} </p>
  <p>$${productosA.precio}</p>
  <a href="../assets/img/puntadeespalda1.jpg">Comprar</a>
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
    <a href="../assets/img/puntadeespalda1.jpg">Comprar</a>
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
      <a href="../assets/img/puntadeespalda1.jpg">Comprar</a>
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
        <a href="../assets/img/puntadeespalda1.jpg">Comprar</a>
       `;
  achurasConteiner.append(nuevaCardD);
});

//Fin forEach achuras
