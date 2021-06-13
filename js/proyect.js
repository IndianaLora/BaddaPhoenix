const proyectBolsa = document.getElementById("proyect-bolsa");
const proyectAf = document.getElementById("proyect-Af");
const proyectItla = document.getElementById("proyect-Itla");
const proyectElecciones = document.getElementById("proyect-Elecciones");
const proyectPokedex = document.getElementById("proyect-Pokedex");

var img = document.createElement("img");

img.src = "./img/Bolsa.png";
img.className = "img-proyects";
proyectBolsa.append(img);

var img1 = document.createElement("img");
img1.src = "./img/resin.png";
img1.className = "img-proyects";

proyectAf.append(img1);

var img2 = document.createElement("img");
img2.src = "./img/itla.png";
img2.className = "img-proyects";

proyectItla.append(img2);

var img3 = document.createElement("img");
img3.src = "./img/votacion.png";
img3.className = "img-proyects";

proyectElecciones.append(img3);

var img4 = document.createElement("img");
img4.src = "./img/pokedex.png";
img4.className = "img-proyects";

proyectPokedex.append(img4);
