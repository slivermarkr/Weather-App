export default async function getForecast({ city, country } = {}, unitGroup) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}%2C%20${country}?unitGroup=${unitGroup}&key=8AEQJ6VE8HFRDUQW3L4MYBPK5&contentType=json`,
      {
        method: "GET",
        headers: {},
      }
    );
    if (!response.ok) {
      throw new Error("Not Okay.");
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.log(error);
  }
}
