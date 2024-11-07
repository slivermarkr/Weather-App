import { createDayCard } from "./createDayCard";
import createElement from "./createElement";
export default function createModal(
  weekOfForecastArray,
  unitMeasurement,
  city
) {
  const modal = createElement("dialog", "showWeekOfForecast", null);
  const closeBtn = createElement("span", "close", "\u2716");
  const title = createElement("div", "modalTitle", "7-day Forecast");
  const cityEl = createElement("div", "modalCity", city);
  const daysContainer = createElement("div", "daysContainer", null);
  daysContainer.textContent = "";
  weekOfForecastArray.forEach((dayForecast, index) => {
    const forecastItem = createDayCard(dayForecast, index, unitMeasurement);
    daysContainer.appendChild(forecastItem);
  });

  modal.append(closeBtn, title, cityEl, daysContainer);

  closeBtn.addEventListener("click", () => {
    modal.close();
  });
  return modal;
}
