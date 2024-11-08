import { format } from "date-fns";
import createElement from "./createElement";
const icons = require.context("../assets", false, /\.svg$/);

export default function printHourCards(
  { datetime, temp, icon, winddir, windspeed },
  index,
  unitMeasure
) {
  let time = datetime;
  let now = new Date().getHours();
  if (Number(datetime.slice(0, 2)) === now) {
    time = "Now";
  } else if (datetime === "00:00:00") {
    // TODO: format this to just mm/dd
    let today = new Date();
    let tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    time = format(tomorrow, "MM/dd");
  }
  time = time.substr(0, 5);
  console.log("TIME", typeof time);
  const suffix = unitMeasure === "metric" ? "\u00B0C" : "\u00b0F";
  const unit = unitMeasure === "metric" ? "km/hr" : "mi/h";
  const container = createElement("div", "swiper-slide", null);

  const hourCard = createElement("div", "hourCard", null);
  hourCard.setAttribute("data-index", index);

  const title = createElement("div", "hourDateTime", `${time}`);
  const hourCardTemp = createElement("div", "hourTemp", `${temp}${suffix}`);

  const iconEl = createElement("div", "iconContainer", null);

  const iconImg = createElement("img", "icon", null);
  iconImg.src = icons(`./${icon}.svg`);
  iconImg.alt = icon;
  iconImg.setAttribute("data-src", icon);
  iconEl.append(iconImg);

  const windIconContainer = createElement("div", "windIconContainer", null);
  const winddirEl = createElement("img", "windDirection", null);
  const iconName = "wind-indicator";

  winddirEl.src = icons(`./${iconName}.svg`);
  winddirEl.alt = winddir;
  winddirEl.setAttribute("data-dir", winddir);
  winddirEl.style.transform = `rotate(${-winddir + 90}deg)`;

  windIconContainer.appendChild(winddirEl);

  const hourWindSpeed = createElement(
    "div",
    "hourWindSpeed",
    `${windspeed}${unit}`
  );
  hourCard.append(
    title,
    hourCardTemp,
    iconEl,
    windIconContainer,
    hourWindSpeed
  );
  container.append(hourCard);
  return container;
}
