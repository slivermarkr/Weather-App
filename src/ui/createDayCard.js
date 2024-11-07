export function createDayCard(
  { tempmin = "N/A", tempmax = "N/A", datetime, icon, windspeed },
  index
) {
  const container = createElement("div", "dayCard", null);
  container.setAttribute("data-index", index);

  // TODO: date from now
  const date = createElement("div", "dayDate", datetime);

  const iconEl = createElement("img", "dayIcon", null);
  iconEl.setAttribute("data-src", icon);
  const maxEl = createElement("div", "dayMaxTemp", tempmax);
  const minEl = createElement("div", "dayMinTemp", tempmin);
  const windEl = createElement("div", "dayWind", windspeed);

  container.append(date, iconEl, maxEl, minEl, windEl);
  return container;
}
export function createElement(type, className, text = "") {
  const el = document.createElement(type);
  el.setAttribute("class", className);
  el.textContent = text;
  return el;
}
