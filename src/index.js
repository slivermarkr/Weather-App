import "./styles/main.scss";
import CityForecast from "./components/cityForecast";
import getForecast from "./api/getForeCast";

const form = document.querySelector("form");
const search = document.querySelector("#search");

const location = {
  city: "New York City",
  country: "USA",
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const [cityInp = "", countryInp = ""] = search.value.split(",");
  // console.log(cityInp, countryInp);
  location["city"] = cityInp.trim();
  location["country"] = countryInp.trim();
  // console.log(location);
  parseWeatherInfo();
});

async function parseWeatherInfo() {
  const dataFromAPI = await getForecast(location);
  const cityWeatherInfo = new CityForecast(dataFromAPI);

  console.log(cityWeatherInfo);
  // TODO: getCurrentCondition, 24hours forecast,
}
parseWeatherInfo();
