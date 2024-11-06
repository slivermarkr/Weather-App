import "./styles/main.scss";
import CityForecast from "./components/cityForecast";
import getForecast from "./api/getForeCast";
import UI from "./ui/mainDisplay";

const ui = UI();

const form = document.querySelector("form");
const search = document.querySelector("#search");
const selectUnit = document.querySelector("#unitMeasure");

const display = document.querySelector(".display");
const currentCardContainer = display.querySelector(".currentCardContainer");
const nextHoursCardContainer = display.querySelector(".nextHoursCardContainer");
const location = {
  city: "Tokyo",
  country: "Japan",
};

let unitMeasurement = selectUnit.value;

async function parseWeatherInfo(unitMeasurement) {
  currentCardContainer.textContent = "";

  const dataFromAPI = await getForecast(location, unitMeasurement);

  const cityWeatherInfo = new CityForecast(dataFromAPI);

  console.log(cityWeatherInfo);
  const currentCard = ui.showMainInfo(
    cityWeatherInfo.currentConditions,
    cityWeatherInfo.days[0],
    unitMeasurement
  );

  currentCardContainer.appendChild(currentCard);
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
