export function createDayCard(
  { tempmin = "N/A", tempmax = "N/A", datetime, icon, windspeed },
  index,
  unitMeasure
) {
  const suffix = unitMeasure === "metric" ? "\u00B0C" : "\u00b0F";
  const unit = unitMeasure === "metric" ? "km/hr" : "mi/h";
  const container = createElement("div", "dayCard", null);
  container.setAttribute("data-index", index);

  // TODO: date from now
  const date = createElement("div", "dayDate", datetime);

  const iconEl = createElement("img", "dayIcon", null);
  iconEl.setAttribute("data-src", icon);
  const maxEl = createElement(
    "div",
    "dayMaxTemp",
    `Max temp.:${tempmax}${suffix}`
  );
  const minEl = createElement(
    "div",
    "dayMinTemp",
    `Min temp.:${tempmin}${suffix}`
  );
  const windEl = createElement(
    "div",
    "dayWind",
    `Wind Spd.: ${windspeed}${unit}`
  );

  container.append(date, iconEl, maxEl, minEl, windEl);
  return container;
}
export function createElement(type, className, text = "") {
  const el = document.createElement(type);
  el.setAttribute("class", className);
  el.textContent = text;
  return el;
}
