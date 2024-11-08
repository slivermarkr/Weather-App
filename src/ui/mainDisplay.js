import createElement from "./createElement";
export default function UI() {
  const showMainInfo = (
    { temp = "N/A", conditions = "N/A" } = {},
    { tempmax = "N/A", tempmin = "N/A" } = {},
    unitMeasure
  ) => {
    const suffix = unitMeasure === "metric" ? "\u00B0C" : "\u00b0F";

    const container = createElement("div", "uiContainer");

    const tempEl = createElement("div", "temp", `${temp}${suffix}`);
    const conditionsEl = createElement("div", "conditions", `${conditions}`);
    const tempmaxEl = createElement(
      "div",
      "tempmax",
      `${tempmax}${suffix}/${tempmin}${suffix}`
    );

    container.append(tempEl, conditionsEl, tempmaxEl);
    return container;
  };

  const showDescription = (text) => {
    const container = createElement("div", "description", text);
    return container;
  };
  const showMoreInfo = (
    { humidity, dew, feelslike, uvindex, visibility } = {},
    unitMeasure
  ) => {
    console.log("from More info fn()", unitMeasure);
    const suffix = unitMeasure === "metric" ? "\u00B0C" : "\u00b0F";
    const visibilityUnit = unitMeasure === "metric" ? "km" : "mi";

    const container = createElement("div", "moreInfo", null);

    const humidityEl = createElement(
      "div",
      "humidity",
      `Humidity: ${humidity}%`
    );
    const dewEl = createElement("div", "dew", `Dew: ${dew}${suffix}`);
    const realFeel = createElement(
      "div",
      "feelslike",
      `Real Feel:${feelslike}${suffix}`
    );
    const uvindexEl = createElement("div", "uvindex", "UVIndex: " + uvindex);
    const visibilityEl = createElement(
      "div",
      "visibility",
      `Visibility: ${visibility}${visibilityUnit}`
    );

    container.append(humidityEl, realFeel, dewEl, uvindexEl, visibilityEl);
    return container;
  };

  const showSunInfo = ({ sunrise = "N/A", sunset = "N/A" } = {}) => {
    const container = createElement("div", "sunInfo", null);

    const sunriseEl = createElement("div", "sunrise", `Sunrise: ${sunrise}`);
    const sunsetEl = createElement("div", "sunset", `Sunset: ${sunset}`);

    container.append(sunriseEl, sunsetEl);
    return container;
  };

  const showWindInfo = (
    { winddir = "N/A", windspeed = "N/A", windgust = "N/A" } = {},
    unitMeasure
  ) => {
    const unit = unitMeasure === "metric" ? "km/hr" : "mi/hr";

    const container = createElement("div", "sunInfo", null);

    const winddirEl = createElement(
      "div",
      "sunrise",
      `Wind dir.: ${winddir}` + "\u00B0"
    );
    const windSpeedEl = createElement(
      "div",
      "sunset",
      `Wind Spd.: ${windspeed}${unit}`
    );
    const windGust = createElement(
      "div",
      "sunset",
      `Windgust: ${windgust === null ? "N/A" : windgust + unit}`
    );

    container.append(winddirEl, windSpeedEl, windGust);
    return container;
  };

  return {
    showWindInfo,
    showMoreInfo,
    showMainInfo,
    showDescription,
    showSunInfo,
  };
}
