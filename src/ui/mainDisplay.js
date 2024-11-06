export default function UI() {
  const showMainInfo = (
    { temp = "N/A", conditions = "N/A" } = {},
    { tempmax = "N/A", tempmin = "N/A" } = {},
    unitMeasure
  ) => {
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
  };

  function createElement(type, className, text = "") {
    const el = document.createElement(type);
    el.setAttribute("class", className);
    el.textContent = text;
    return el;
  }

  return {
    showMainInfo,
    createElement,
  };
}
