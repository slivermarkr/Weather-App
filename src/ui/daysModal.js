import { createDayCard, createElement } from "./createDayCard";

export default function createModal(weekOfForecastArray) {
  const modal = createElement("dialog", "showWeekOfForecast", null);

  weekOfForecastArray.forEach((dayForecast, index) => {
    const forecastItem = createDayCard(dayForecast, index);
    modal.appendChild(forecastItem);
  });
  return modal;
}
