import "./styles/main.scss";
import CityForecast from "./components/cityForecast";
import getForecast from "./api/getForeCast";

const location = {
  city: "Manila",
  country: "Philippines",
};

async function parseWeatherInfo() {
  const dataFromAPI = await getForecast(location);
  const cityWeatherInfo = new CityForecast(dataFromAPI);
  // TODO: getCurrentCondition, 24hours forecast,
}
parseWeatherInfo();
