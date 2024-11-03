import "./styles/main.scss";
async function getForecast({ city, country } = {}) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}%2C%20${country}?unitGroup=metric&key=8AEQJ6VE8HFRDUQW3L4MYBPK5&contentType=json`,
    {
      method: "GET",
      headers: {},
    }
  );
  const result = await response.json();
  console.log(result);
}
const location = {
  city: "Cebu City",
  country: "Philippines",
};
getForecast(location);
