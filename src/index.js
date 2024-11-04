import "./styles/main.scss";
import CityForecast from "./components/cityForecast";
import getForecast from "./api/getForeCast";

const form = document.querySelector("form");
const search = document.querySelector("#search");
const selectUnit = document.querySelector("#unitMeasure");

const location = {
  city: "New York City",
  country: "USA",
};
let unitMeasurement = selectUnit.value;

async function parseWeatherInfo() {
  const dataFromAPI = await getForecast(location, unitMeasurement);

  console.log(dataFromAPI);
  const cityWeatherInfo = new CityForecast(dataFromAPI);

  console.log(cityWeatherInfo);
  // TODO: getCurrentCondition, 24hours forecast,
}

selectUnit.addEventListener("change", () => {
  if (search.value === "") return;

  unitMeasurement = selectUnit.value;

  parseWeatherInfo();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const [cityInp = "", countryInp = ""] = search.value.split(",");

  location["city"] = cityInp.trim();
  location["country"] = countryInp.trim();

  unitMeasurement = selectUnit.value;

  parseWeatherInfo();
  // form.reset();
});

parseWeatherInfo();
