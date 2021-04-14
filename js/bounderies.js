// Create bounderies page with the javascript DOM
const body = document.body;
const h2 = document.createElement("h2");
h2.textContent = "Here i leave you my daily reminders";
h2.id = "emp";
body.append(h2);

const divVContainer = document.createElement("div");
divVContainer.className = "vers-container";

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
