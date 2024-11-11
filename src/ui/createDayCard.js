const icons = require.context("../assets", false, /\.svg$/);

import { parseISO, isSameDay, format } from "date-fns";
import createElement from "./createElement";
export function createDayCard(
  { tempmin = "N/A", tempmax = "N/A", datetime, icon, windspeed, winddir },
  index,
  unitMeasure
) {
  const suffix = unitMeasure === "metric" ? "\u00B0C" : "\u00b0F";
  const unit = unitMeasure === "metric" ? "km/hr" : "mi/h";
  const container = createElement("div", "dayCard", null);
  container.setAttribute("data-index", index);

  // TODO: date from now
  const date = createElement("div", "dayDate", transformDate(datetime));
  const dateNumber = createElement(
    "div",
    "dayDateNum",
    format(parseISO(datetime), "MM/dd")
  );
  const iconEl = createElement("div", "iconContainer", null);

  const iconImg = createElement("img", "icon", null);
  iconImg.src = icons(`./${icon}.svg`);
  iconImg.alt = icon;
  iconImg.setAttribute("data-src", icon);
  iconEl.append(iconImg);

  const maxEl = createElement("div", "dayMaxTemp", `Max: ${tempmax}${suffix}`);
  const minEl = createElement("div", "dayMinTemp", `Min: ${tempmin}${suffix}`);
  // const windEl = createElement("div", "dayWind", `Speed: ${windspeed}${unit}`);

  const windIconContainer = createElement("div", "windIconContainer", null);
  const winddirEl = createElement("img", "windDirection", null);
  const iconName = "wind-indicator";

  winddirEl.src = icons(`./${iconName}.svg`);
  winddirEl.alt = winddir;
  winddirEl.setAttribute("data-dir", winddir);
  winddirEl.style.transform = `rotate(${-winddir + 90}deg)`;

  const hourWindSpeed = createElement(
    "div",
    "hourWindSpeed",
    `${windspeed}${unit}`
  );

  windIconContainer.append(winddirEl, hourWindSpeed);

  container.append(date, dateNumber, iconEl, maxEl, minEl, windIconContainer);
  return container;
}
function transformDate(dateString) {
  const iso = parseISO(dateString);

  if (isSameDay(iso, new Date())) {
    console.log(isSameDay(iso, new Date()));
    return "Today";
  }
  const dayOfTheWeek = format(iso, "EEEE");
  return dayOfTheWeek;
}
