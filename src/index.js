import "./styles/main.scss";
class CityForecast {
  constructor({ resolvedAddress, description, currentConditions, days } = {}) {
    this.resolvedAddress = resolvedAddress;
    this.description = description;
    this.currentConditions = currentConditions;
    this.days = days;
  }
}

const location = {
  city: "Manila",
  country: "Philippines",
};

async function getForecast({ city, country } = {}) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}%2C%20${country}?unitGroup=metric&key=8AEQJ6VE8HFRDUQW3L4MYBPK5&contentType=json`,
    {
      method: "GET",
      headers: {},
    }
  );
  const result = await response.json();
  parseWeatherInfo(result);
  // console.log(result);
}
function parseWeatherInfo(result) {
  const cityWeatherInfo = new CityForecast(result);
  console.log(cityWeatherInfo);
}
getForecast(location);
