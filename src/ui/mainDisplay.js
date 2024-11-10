const icons = require.context("../assets", false, /\.svg$/);

import createElement from "./createElement";
export default function UI() {
  const showMainInfo = (
    { temp = "N/A", conditions = "N/A" } = {},
    { tempmax = "N/A", tempmin = "N/A" } = {},
    unitMeasure
  ) => {
    const suffix = unitMeasure === "metric" ? "\u00B0C" : "\u00b0F";

    const container = createElement("div", "uiContainer");
    container.classList.add("flex-group");

    const tempEl = createElement("div", "temp", `${temp}${suffix}`);
    const conditionsEl = createElement("div", "conditions", `${conditions}`);
    const tempmaxEl = createElement(
      "div",
      "tempmax",
      `${tempmax}\u00B0/${tempmin}\u00B0`
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
    const humidityContainer = createElement("div", "moreInfoContainer", null);
    const humidityTitle = createElement("div", "moreInfoTitle", `Humidity`);
    const humidityEl = createElement("div", "moreInfoTitle", `${humidity}%`);
    humidityContainer.append(humidityTitle, humidityEl);

    const dewContainer = createElement("div", "moreInfoContainer", null);
    const dewTitle = createElement("div", "moreInfoTitle", `Dew`);
    const dewEl = createElement("div", "moreInfoTitle", `${dew}${suffix}`);
    dewContainer.append(dewTitle, dewEl);

    const realFeelContainer = createElement("div", "moreInfoContainer", null);
    const realfeelTitle = createElement("div", "moreInfoTitle", `Real Feel`);
    const realFeelEl = createElement(
      "div",
      "moreInfoTitle",
      `${feelslike}${suffix}`
    );
    realFeelContainer.append(realfeelTitle, realFeelEl);

    const uvIndexContainer = createElement("div", "moreInfoContainer", null);
    const uvIndexTitle = createElement("div", "moreInfoTitle", `UV Index`);
    const uvIndexEl = createElement("div", "moreInfoTitle", `${uvindex}`);
    uvIndexContainer.append(uvIndexTitle, uvIndexEl);

    const visibilityContainer = createElement("div", "moreInfoContainer", null);
    const visibilityTitle = createElement("div", "moreInfoTitle", `Visibility`);
    const visibilityEl = createElement(
      "div",
      "moreInfoTitle",
      `${visibility}${visibilityUnit}`
    );
    visibilityContainer.append(visibilityTitle, visibilityEl);

    container.append(
      humidityContainer,
      realFeelContainer,
      dewContainer,
      uvIndexContainer,
      visibilityContainer
    );
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

    const container = createElement("div", "windInfo", null);

    const windIconContainer = createElement("div", "windIconContainer", null);
    const winddirEl = createElement("img", "windDirection", null);
    const iconName = "wind-indicator";

    winddirEl.src = icons(`./${iconName}.svg`);
    winddirEl.alt = winddir;
    winddirEl.setAttribute("data-dir", winddir);
    winddirEl.style.transform = `rotate(${-winddir + 90}deg)`;

    const windSpeedEl = createElement(
      "div",
      "windSpeed",
      `${windspeed}${unit}`
    );

    windIconContainer.append(winddirEl, windSpeedEl);

    const windGust = createElement(
      "div",
      "windGust",
      `Windgust: ${windgust === null ? "N/A" : windgust + unit}`
    );

    container.append(windIconContainer, windGust);
    return container;
  };

  const showSnowInfo = (
    { snow = "N/A", snowdepth = "N/A" } = {},
    unitMeasure
  ) => {
    const unit = unitMeasure === "metric" ? "cm" : "in";

    const container = createElement("div", "moreInfo", null);

    const snowContainer = createElement("div", "moreInfoContainer", null);
    const snowTitle = createElement("div", "moreInfoTitle", `Snow`);
    const snowEl = createElement("div", "moreInfoTitle", `${snow}${unit}`);
    snowContainer.append(snowTitle, snowEl);

    const snowDepthContainer = createElement("div", "moreInfoContainer", null);
    const snowDepthTitle = createElement("div", "moreInfoTitle", `Snow Depth`);
    const snowDepthEl = createElement(
      "div",
      "moreInfoTitle",
      `${snowdepth}${unit}`
    );
    snowDepthContainer.append(snowDepthTitle, snowDepthEl);

    container.append(snowContainer, snowDepthContainer);
    return container;
  };
  return {
    showSnowInfo,
    showWindInfo,
    showMoreInfo,
    showMainInfo,
    showDescription,
    showSunInfo,
  };
}
