const legendContainer = document.getElementById("skills-legend");

//Created React legend
var legendOne = document.createElement("div");
legendOne.style.backgroundColor = "#4d0066";
legendOne.id = "purple";
legendOne.classList = "legend-style";

var react = document.createElement("h5");
react.textContent = "Html";
react.classList = "reverse";

legendOne.append(react);
legendContainer.append(legendOne);

//Created js legend
var legendTwo = document.createElement("div");
legendTwo.style.backgroundColor = "#ff9900";
legendTwo.id = "yellow";
legendTwo.classList = "legend-style";

var js = document.createElement("h5");
js.textContent = "Css";
js.classList = "reverse";

legendTwo.append(js);
legendContainer.append(legendTwo);

//Created Css legend
var legendThree = document.createElement("div");
legendThree.style.backgroundColor = "#f56b6b";
legendThree.id = "pink";
legendThree.classList = "legend-style";

var css = document.createElement("h5");
css.textContent = "Javascript";
css.classList = "reverse";

legendThree.append(css);
legendContainer.append(legendThree);

//Created Html legend
var legendFour = document.createElement("div");
legendFour.style.backgroundColor = "#158aad";
legendFour.id = "blue";
legendFour.classList = "legend-style";

var html = document.createElement("h5");
html.textContent = "React";
html.classList = "reverse";

legendFour.append(html);
legendContainer.append(legendFour);

//Created git legend
var legend = document.createElement("div");
legend.style.backgroundColor = "#e0111c";
legend.id = "red";
legend.classList = "legend-style";

var git = document.createElement("h5");
git.textContent = "Git";
git.classList = "reverse";

legend.append(git);
legendContainer.append(legend);

const proyectHeader = document.getElementById("proyect-header");
proyectHeader.innerHTML="Proyect i haved worked on..."
proyectHeader.classList="proyect-header"
