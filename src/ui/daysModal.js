import { createDayCard, createElement } from "./createDayCard";

export default function createModal(weekOfForecastArray, unitMeasurement) {
  const modal = createElement("dialog", "showWeekOfForecast", null);
  const closeBtn = createElement("span", "close", "\u2716");
  const daysContainer = createElement("div", "daysContainer", null);
  daysContainer.textContent = "";
  weekOfForecastArray.forEach((dayForecast, index) => {
    const forecastItem = createDayCard(dayForecast, index, unitMeasurement);
    daysContainer.appendChild(forecastItem);
  });

  modal.append(closeBtn, daysContainer);

  closeBtn.addEventListener("click", () => {
    modal.close();
  });
  return modal;
}
