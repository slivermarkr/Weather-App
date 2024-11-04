export default async function getForecast({ city, country } = {}, unitGroup) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}%2C%20${country}?unitGroup=${unitGroup}&include=days%2Chours%2Ccurrent&key=8AEQJ6VE8HFRDUQW3L4MYBPK5&contentType=json`,
    {
      method: "GET",
      headers: {},
    }
  );
  const result = await response.json();
  return result;
}
