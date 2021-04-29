const legendContainer = document.getElementById("skills-legend");

//Created React legend
var legendOne = document.createElement("div");
legendOne.style.backgroundColor = "lightblue";
legendOne.className = "legend-style";

var react = document.createElement("h5");
react.textContent = "React";

legendOne.append(react);
legendContainer.append(legendOne);

//Created js legend
var legendTwo = document.createElement("div");
legendTwo.style.backgroundColor = "pink";
legendTwo.className = "legend-style";

var js = document.createElement("h5");
js.textContent = "Javascript";

legendTwo.append(js);
legendContainer.append(legendTwo);

//Created Css legend
var legendThree = document.createElement("div");
legendThree.style.backgroundColor = "yellow";
legendThree.className = "legend-style";

var css = document.createElement("h5");
css.textContent = "Css";

legendThree.append(css);
legendContainer.append(legendThree);

//Created Html legend
var legendFour = document.createElement("div");
legendFour.style.backgroundColor = "purple";
legendFour.className = "legend-style";

var html = document.createElement("h5");
html.textContent = "html";

legendFour.append(html);
legendContainer.append(legendFour);
