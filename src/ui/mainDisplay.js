export default function UI(weatherInfo, unitMeasure = "metric") {
  return showMaindDisplay(
    weatherInfo.currentConditions,
    weatherInfo.days[0],
    unitMeasure
  );
}

function showMaindDisplay(
  { temp, conditions } = {},
  { tempmax, tempmin } = {},
  unitMeasure
) {
  const suffix = unitMeasure === "metric" ? "\u00B0C" : "\u00b0F";

  const container = createElement("div", "uiContainer");

  const tempEl = createElement("div", "temp", `Average:${temp}${suffix}`);
  const conditionsEl = createElement(
    "div",
    "conditions",
    `Conditions: ${conditions}`
  );
  const tempmaxEl = createElement(
    "div",
    "tempmax",
    `maxtemp:${tempmax}${suffix}`
  );
  const tempminEl = createElement(
    "div",
    "tempmin",
    `mintemp:${tempmin}${suffix}`
  );

  container.append(tempEl, conditionsEl, tempmaxEl, tempminEl);
  return container;
}
function createElement(type, className, text = "") {
  const el = document.createElement(type);
  el.setAttribute("class", className);
  el.textContent = text;
  return el;
}
