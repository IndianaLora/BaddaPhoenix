const legendContainer = document.getElementById("skills-legend");

//Created React legend
var legendOne = document.createElement("div");
legendOne.style.backgroundColor = "#4d0066";
legendOne.className = "legend-style";

var react = document.createElement("h5");
react.textContent = "Html";

legendOne.append(react);
legendContainer.append(legendOne);

//Created js legend
var legendTwo = document.createElement("div");
legendTwo.style.backgroundColor = "#ff9900";
legendTwo.className = "legend-style";

var js = document.createElement("h5");
js.textContent = "Css";

legendTwo.append(js);
legendContainer.append(legendTwo);

//Created Css legend
var legendThree = document.createElement("div");
legendThree.style.backgroundColor = "#f56b6b";
legendThree.className = "legend-style";

var css = document.createElement("h5");
css.textContent = "Javascript";

legendThree.append(css);
legendContainer.append(legendThree);

//Created Html legend
var legendFour = document.createElement("div");
legendFour.style.backgroundColor = "#00ccff";
legendFour.className = "legend-style";

var html = document.createElement("h5");
html.textContent = "React";

legendFour.append(html);
legendContainer.append(legendFour);
