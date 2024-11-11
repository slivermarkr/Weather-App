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
    const humidityEl = createElement("div", "moreInfoValue", `${humidity}%`);
    humidityContainer.append(humidityTitle, humidityEl);

    const dewContainer = createElement("div", "moreInfoContainer", null);
    const dewTitle = createElement("div", "moreInfoTitle", `Dew`);
    const dewEl = createElement("div", "moreInfoValue", `${dew}${suffix}`);
    dewContainer.append(dewTitle, dewEl);

    const realFeelContainer = createElement("div", "moreInfoContainer", null);
    const realfeelTitle = createElement("div", "moreInfoTitle", `Real Feel`);
    const realFeelEl = createElement(
      "div",
      "moreInfoValue",
      `${feelslike}${suffix}`
    );
    realFeelContainer.append(realfeelTitle, realFeelEl);

    const uvIndexContainer = createElement("div", "moreInfoContainer", null);
    const uvIndexTitle = createElement("div", "moreInfoTitle", `UV`);
    const uvIndexEl = createElement("div", "moreInfoValue", `${uvindex}`);
    uvIndexContainer.append(uvIndexTitle, uvIndexEl);

    const visibilityContainer = createElement("div", "moreInfoContainer", null);
    const visibilityTitle = createElement("div", "moreInfoTitle", `Visibility`);
    const visibilityEl = createElement(
      "div",
      "moreInfoValue",
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

    const sunriseContainer = createElement("div", "sunIconContainer", null);
    const sunriseIcon = createElement("img", "sunriseIcon", null);
    const sunriseName = "sunrise";

    sunriseIcon.src = icons(`./${sunriseName}.svg`);
    sunriseIcon.alt = "sunrise";
    const sunriseEl = createElement("div", "sunrise", `${sunrise}`);
    sunriseContainer.append(sunriseIcon, sunriseEl);

    const sunsetContainer = createElement("div", "sunIconContainer", null);
    const sunsetIcon = createElement("img", "sunsetIcon", null);
    const sunsetName = "sunset";

    sunsetIcon.src = icons(`./${sunsetName}.svg`);
    sunsetIcon.alt = "sunset";

    const sunsetEl = createElement("div", "sunset", `${sunset}`);

    sunsetContainer.append(sunsetEl, sunsetIcon);

    container.append(sunriseContainer, sunsetContainer);
    return container;
  };

  const showWindInfo = (
    { winddir = "N/A", windspeed = "N/A", windgust = "N/A" } = {},
    unitMeasure
  ) => {
    const unit = unitMeasure === "metric" ? "km/hr" : "mi/hr";

    const container = createElement("div", "windInfo", null);

    const windContainer = createElement("div", "windContainer", null);
    windContainer.classList.add("moreInfoContainer");
    const windTitle = createElement("div", "moreInfoTitle", `Direction/Speed`);

    const windIconContainer = createElement("div", "windIconContainer", null);

    const windIcon = createElement("img", "windDirection", null);
    const windName = "wind-indicator";

    windIcon.src = icons(`./${windName}.svg`);
    windIcon.alt = winddir;
    windIcon.setAttribute("data-dir", winddir);
    windIcon.style.transform = `rotate(${-winddir + 90}deg)`;

    const windSpeedEl = createElement(
      "div",
      "windSpeed",
      `${windspeed}${unit}`
    );
    windIconContainer.append(windIcon, windSpeedEl);
    windContainer.append(windTitle, windIconContainer);

    const windGustContainer = createElement("div", "moreInfoContainer", null);
    const windGustTitle = createElement("div", "moreInfoTitle", `Windgust`);
    const windGustEl = createElement(
      "div",
      "windGust",
      `${windgust === null ? "N/A" : windgust + unit}`
    );
    windGustContainer.append(windGustTitle, windGustEl);

    container.append(windContainer, windGustContainer);
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
