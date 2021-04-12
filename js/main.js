const body = document.body;
const h1 = document.createElement("h1");
h1.textContent = "Here i leave you my daily reminders";
h1.id = "emp";
body.append(h1);

const bounderies = [
  { name: "Emphaty", message: "" },
  { name: "Resilence", message: "" },
  { name: "Mindfullness", message: "" },
  { name: "Honesty", message: "" },
];

const bounderyMap = bounderies.map((boundery) => {
  return boundery.name;
});
console.log(bounderyMap);
