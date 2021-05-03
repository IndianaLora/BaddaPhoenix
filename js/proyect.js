const body = document.body;

const divVContainer = document.createElement("div");

body.append(divVContainer);

//Loop through the portfolio array to add my daily bounderies
const bounderies = [
  {
    tittleName: "Emphaty",
    message: "Empathy is about finding echoes of another person in yourself.",
  },
  {
    tittleName: "Resilence",
    message:
      "“The oak fought the wind and was broken, the willow bent when it must and survived.”",
  },
  {
    tittleName: "Mindfulness",
    message: "You cannot control the results, only your actions.",
  },
  {
    tittleName: "Honesty",
    message:
      "Integrity is telling myself the truth. And honesty is telling the truth to other people.",
  },
  {
    tittleName: "Faith",
    message:
      "Faith is to believe what you do not see; the reward of this faith is to see what you believe.",
  },
];

const proyectSection = document.getElementById("proyects-section");

var img = document.createElement("img");
img.src = "./img/bolsa.png";
img.className = "img-proyects";

proyectSection.append(img);

var img1 = document.createElement("img");
img1.src = "./img/afWolrd.jpeg";
img1.className = "img-proyects";

proyectSection.append(img1);

var img2 = document.createElement("img");
img2.src = "./img/itla.png";
img2.className = "img-proyects";

proyectSection.append(img2);

var img3 = document.createElement("img");
img3.src = "./img/Votacion.png";
img3.className = "img-proyects";

proyectSection.append(img3);

var img4 = document.createElement("img");
img4.src = "./img/pokedex.png";
img4.className = "img-proyects";

//Analizar esto pls
bounderies.map((boundery) => {
  const divCards = document.createElement("div");
  divCards.className = "card";
  divVContainer.append(divCards);
  const h5 = document.createElement("h5");
  divCards.append(h5);
  const divCardText = document.createElement("div");
  divCards.append(divCardText);
  divCardText.innerHTML = boundery.message;
  return (h5.innerHTML = boundery.tittleName);
});

proyectSection.append(img4);
