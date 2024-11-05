import "./styles/main.scss";
import CityForecast from "./components/cityForecast";
import getForecast from "./api/getForeCast";
import UI from "./ui/mainDisplay";

const form = document.querySelector("form");
const search = document.querySelector("#search");
const selectUnit = document.querySelector("#unitMeasure");

const display = document.querySelector(".display");

const location = {
  city: "New York City",
  country: "USA",
};

let unitMeasurement = selectUnit.value;

async function parseWeatherInfo(unitMeasurement) {
  display.textContent = "";

  const dataFromAPI = await getForecast(location, unitMeasurement);

  const cityWeatherInfo = new CityForecast(dataFromAPI);

  const displayContent = UI(cityWeatherInfo, unitMeasurement);

  display.appendChild(displayContent);
  // TODO: getCurrentCondition, 24hours forecast,
}

parseWeatherInfo(unitMeasurement);

selectUnit.addEventListener("change", () => {
  if (search.value === "") return;

  unitMeasurement = selectUnit.value;
  parseWeatherInfo(unitMeasurement);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const [cityInp = "", countryInp = ""] = search.value.split(",");

  location["city"] = cityInp.trim();
  location["country"] = countryInp.trim();

  unitMeasurement = selectUnit.value;

  parseWeatherInfo(unitMeasurement);
  // form.reset();
});
