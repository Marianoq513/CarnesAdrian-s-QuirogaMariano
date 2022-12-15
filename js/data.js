//Pagina de productos (Seccion asado)
//DOM
//Objeto constructor Asado
class Asado {
  constructor(id, corte, imgSrc, utilidad, precio) {
    this.id = id;
    this.corte = corte;
    this.imgSrc = imgSrc;
    this.utilidad = utilidad;
    this.precio = precio;
  }
}

//lISTA DE CORTES DE ASADO
const asado1 = new Asado(
  1,
  "Punta de espalda",
  (imgsrc = "../assets/img/puntadeespalda1.jpg"),
  "asado",
  1300
);
const asado2 = new Asado(
  2,
  "Vacio",
  (imgSrc = "../assets/img/vacio1.jpg"),
  "Asado",
  1400
);
const asado3 = new Asado(
  3,
  "Tapa de asado",
  (imgSrc = "../assets/img/tapadeasado1.jpg"),
  "Asado",
  1300
);
const asado4 = new Asado(
  4,
  "Costillas",
  (imgSrc = "../assets/img/costillas1.jpg"),
  "Asado",
  900
);
const asado5 = new Asado(
  5,
  "Entraña",
  (Image = "../assets/img/entrana1.jpg"),
  "Asado",
  1250
);
const productosA = [asado1, asado2, asado3, asado4, asado5];
const asadoConteiner = document.getElementById("asadoConteiner");

//FIN LISTA DE PRODUCTOS ASADO

//Objeto constructor Blandas
class Blanda {
  constructor(id, corte, imgSrc, utilidad, precio) {
    this.id = id;
    this.corte = corte;
    this.imgSrc = imgSrc;
    this.utilidad = utilidad;
    this.precio = precio;
  }
}

//lISTA DE CORTES DE ASADO
const blanda1 = new Blanda(
  6,
  "Costeleta",
  (imgsrc = "../../assets/img/costeleta1.jpeg"),
  "Blanda",
  1100
);
const blanda2 = new Blanda(
  7,
  "Cuadrada",
  (imgSrc = "../assets/img/cuadrada1.jpg"),
  "Blanda",
  1400
);
const blanda3 = new Blanda(
  8,
  "Cuadril",
  (imgSrc = "../assets/img/cuadril1.jpg"),
  "Blanda",
  1250
);
const blanda4 = new Blanda(
  9,
  "Nalga",
  (imgSrc = "../assets/img/nalga1.png"),
  "Blanda",
  1400
);
const blanda5 = new Blanda(
  10,
  "Punta de pierna",
  (Image = "../assets/img/puntadepierna1.jpg"),
  "Blanda",
  1200
);
const blanda6 = new Blanda(
  11,
  "Peceto",
  (Image = "../assets/img/peceto1.png"),
  "Blanda",
  1400
);
const productosB = [blanda1, blanda2, blanda3, blanda4, blanda5, blanda6];
const blandaConteiner = document.getElementById("blandaConteiner");

//FIN LISTA DE PRODUCTOS BLANDAS

//Objeto constructor Embutidos
class Embutido {
  constructor(id, corte, imgSrc, utilidad, precio) {
    this.id = id;
    this.corte = corte;
    this.imgSrc = imgSrc;
    this.utilidad = utilidad;
    this.precio = precio;
  }
}

//lISTA DE EMBUTIDOS
const embutido1 = new Embutido(
  12,
  "Chorizo",
  (imgsrc = "../assets/img/chorizo1.jpg"),
  "Embutido",
  1000
);
const embutido2 = new Embutido(
  13,
  "Morcilla",
  (imgSrc = "../assets/img/morcilla1.jpg"),
  "Embutido",
  800
);
const embutido3 = new Embutido(
  14,
  "Salame",
  (imgSrc = "../assets/img/salame1.jpg"),
  "Embutido",
  500
);
const productosC = [embutido1, embutido2, embutido3];
const embutidoConteiner = document.getElementById("embutidoConteiner");

//FIN LISTA DE PRODUCTOS EMBUTIDOS

//Objeto constructor achuras
class Achuras {
  constructor(id, corte, imgSrc, utilidad, precio) {
    this.id = id;
    this.corte = corte;
    this.imgSrc = imgSrc;
    this.utilidad = utilidad;
    this.precio = precio;
  }
}

//lISTA DE ACHURAS
const achura1 = new Achuras(
  15,
  "Chinchulin",
  (imgsrc = "../assets/img/chinchulin1.jpg"),
  "Achura",
  1000
);
const achura2 = new Achuras(
  16,
  "Molleja",
  (imgSrc = "../assets/img/molleja1.jpg"),
  "Achura",
  700
);
const achura3 = new Achuras(
  17,
  "Seso",
  (imgSrc = "../assets/img/seso1.jpg"),
  "Achura",
  700
);
const achura4 = new Achuras(
  18,
  "Riñon",
  (imgSrc = "../assets/img/riñon1.jpg"),
  "Achura",
  450
);
const productosD = [achura1, achura2, achura3, achura4];
const achurasConteiner = document.getElementById("achurasConteiner");

//FIN LISTA DE PRODUCTOS ACHURAS
