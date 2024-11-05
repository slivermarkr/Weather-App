export default function UI(weatherInfo) {
  return showMaindDisplay(weatherInfo.currentConditions, weatherInfo.days[0]);
}

function showMaindDisplay(
  { temp, conditions } = {},
  { tempmax, tempmin } = {}
) {
  const container = createElement("div", "uiContainer");

  const tempEl = createElement("div", "temp", `Average:${temp}`);
  const conditionsEl = createElement(
    "div",
    "conditions",
    `Conditions: ${conditions}`
  );
  const tempmaxEl = createElement("div", "tempmax", `maxtemp:${tempmax}`);
  const tempminEl = createElement("div", "tempmin", `mintemp:${tempmin}`);

  container.append(tempEl, conditionsEl, tempmaxEl, tempminEl);
  return container;
}
function createElement(type, className, text = "") {
  const el = document.createElement(type);
  el.setAttribute("class", className);
  el.textContent = text;
  return el;
}
