const proyectBolsa = document.getElementById("proyect-bolsa");
const proyectAf = document.getElementById("proyect-Af");
const proyectItla = document.getElementById("proyect-Itla");
const proyectElecciones = document.getElementById("proyect-Elecciones");
const proyectPokedex = document.getElementById("proyect-Pokedex");

var img = document.createElement("img");

img.src = "./img/Bolsa.png";
img.className = "img-proyects";
proyectBolsa.append(img);
img.addEventListener("click", () => {
  window.open("https://github.com/IndianaLora/Bolsa-de-empleos#readme");
});

var img1 = document.createElement("img");
img1.src = "./img/resin.png";
img1.className = "img-proyects";
img1.addEventListener("click", () => {
  window.open("https://resin-webpage.herokuapp.com/");
});

proyectAf.append(img1);

var img2 = document.createElement("img");
img2.src = "./img/itla.png";
img2.className = "img-proyects";
img2.addEventListener("click", () => {
  window.open("https://github.com/IndianaLora/Bolsa-de-empleos#readme");
});
proyectItla.append(img2);
