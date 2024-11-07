import createElement from "./createElement";
export default function printHourCards(
  { datetime, temp, icon, winddir, windspeed },
  index,
  unitMeasure
) {
  let time = datetime;
  let now = new Date().getHours();
  if (+datetime === now) {
    time = "Time Now";
  } else if (datetime === "00:00:00") {
    time = new Date();
  }
  const suffix = unitMeasure === "metric" ? "\u00B0C" : "\u00b0F";
  const unit = unitMeasure === "metric" ? "km/hr" : "mi/h";
  const container = createElement("div", "swiper-slide", null);

  const hourCard = createElement("div", "hourCard", null);
  hourCard.setAttribute("data-index", index);

  const title = createElement("div", "hourDateTime", `Time: ${time}`);
  const hourCardTemp = createElement("div", "hourTemp", `${temp}${suffix}`);
  const hourIcon = createElement("div", "hourIcon", `${icon}`);
  const hourWinddir = createElement(
    "div",
    "hourWinddir",
    `Winddir:${winddir}"\u00B0"`
  );
  const hourWindSpeed = createElement(
    "div",
    "hourWindSpeed",
    `Wind Speed:${windspeed}${unit}`
  );
  hourCard.append(title, hourCardTemp, hourIcon, hourWinddir, hourWindSpeed);
  container.append(hourCard);
  return container;
}
