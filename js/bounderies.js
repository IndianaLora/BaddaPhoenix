// Create bounderies page with the javascript DOM
const body = document.body;
const h1 = document.createElement("h2");
h1.textContent = "Here i leave you my daily reminders";
h1.id = "emp";
body.append(h1);

const divVContainer = document.createElement("div");
divVContainer.className = "vers-container";

body.append(divVContainer);

const divCards = document.createElement("div");
divCards.className = "card";

divVContainer.append(divCards);

//how implement .map into the DOM
const bounderies = [
  { tittleName: "Emphaty", message: "" },
  { tittleName: "Resilence", message: "" },
  { tittleName: "Mindfullness", message: "" },
  { tittleName: "Honesty", message: "" },
];

const bounderyMap = bounderies.map((boundery) => {
  return boundery.tittleName;
});

body.append(bounderyMap);
