import "./styles/main.scss";
import CityForecast from "./components/cityForecast";
import getForecast from "./api/getForeCast";
import UI from "./ui/mainDisplay";
import createModal from "./ui/daysModal";
const ui = UI();

const form = document.querySelector("form");
const search = document.querySelector("#search");
const selectUnit = document.querySelector("#unitMeasure");

const display = document.querySelector(".display");
const currentCardContainer = display.querySelector(".currentCardContainer");
const nextHoursCardContainer = display.querySelector(".nextHoursCardContainer");
const descriptionContainer = display.querySelector(".descriptionCard");
const currentSideCard = display.querySelector(".currentSideCard");
const sunInfoCard = display.querySelector(".sunCard");
const windInfoCard = display.querySelector(".windCard");
const nextDaysCard = display.querySelector(".nextDaysCard");

const location = {
  city: "Tokyo",
  country: "Japan",
};

let unitMeasurement = selectUnit.value;

async function parseWeatherInfo(unitMeasurement) {
  currentCardContainer.textContent = "";
  descriptionContainer.textContent = "";
  currentSideCard.textContent = "";
  sunInfoCard.textContent = "";
  windInfoCard.textContent = "";
  nextDaysCard.textContent = "";
  const dataFromAPI = await getForecast(location, unitMeasurement);

  const cityWeatherInfo = new CityForecast(dataFromAPI);

  search.value = cityWeatherInfo.resolvedAddress;
  console.log(cityWeatherInfo);

  const currentCard = ui.showMainInfo(
    cityWeatherInfo.currentConditions,
    cityWeatherInfo.days[0],
    unitMeasurement
  );

  const desciption = ui.showDescription(cityWeatherInfo.description);
  const moreInfo = ui.showMoreInfo(
    cityWeatherInfo.currentConditions,
    unitMeasurement
  );
  const sunInfo = ui.showSunInfo(cityWeatherInfo.currentConditions);
  const windInfo = ui.showWindInfo(
    cityWeatherInfo.currentConditions,
    unitMeasurement
  );

  const weekForecastBtn = ui.createElement(
    "button",
    "showWeekForecast",
    "7-day Forecast"
  );
  if (!document.querySelector(".showWeekOfForecast")) {
    const sevenDaysForecast = createModal(
      cityWeatherInfo.days.splice(0, 7),
      unitMeasurement
    );
    display.appendChild(sevenDaysForecast);
  }

  document.querySelector(".showWeekOfForecast").remove();
  const sevenDaysForecast = createModal(
    cityWeatherInfo.days.splice(0, 7),
    unitMeasurement
  );
  display.appendChild(sevenDaysForecast);

  weekForecastBtn.addEventListener("click", () => {
    document.querySelector(".showWeekOfForecast").showModal();
  });

  // TODO: create container that will contain 24 cards; each card should contain weather forecast for the next 24 hours.

  currentCardContainer.appendChild(currentCard);
  descriptionContainer.appendChild(desciption);
  currentSideCard.appendChild(moreInfo);
  nextDaysCard.appendChild(weekForecastBtn);
  sunInfoCard.appendChild(sunInfo);
  windInfoCard.appendChild(windInfo, unitMeasurement);
}

parseWeatherInfo(unitMeasurement);

selectUnit.addEventListener("change", () => {
  if (search.value === "") return;

  unitMeasurement = selectUnit.value;
  parseWeatherInfo(unitMeasurement);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let [cityInp, countryInp] = search.value.split(/,|\s+/);

  location["city"] = cityInp.trim();
  location["country"] = countryInp.trim();
  console.log(location);
  unitMeasurement = selectUnit.value;

  parseWeatherInfo(unitMeasurement);
  // form.reset();
});
