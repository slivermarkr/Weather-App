const icons = require.context("../assets", false, /\.svg$/);

import createElement from "./createElement";
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

  const iconEl = createElement("div", "iconContainer", null);

  const iconImg = createElement("img", "icon", null);
  iconImg.src = icons(`./${icon}.svg`);
  iconImg.alt = icon;
  iconImg.setAttribute("data-src", icon);
  iconEl.append(iconImg);

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
