import "./styles/reset.scss";
import "./styles/main.scss";
import CityForecast from "./components/cityForecast";
import getForecast from "./api/getForeCast";
import UI from "./ui/mainDisplay";
import createModal from "./ui/daysModal";
import getNextTwentyFourHours from "./components/getDates";
import createElement from "./ui/createElement";
import printHourCards from "./ui/createHourCard";

// new Swiper(".swiper", {
//   direction: "horizontal",
//   speed: 400,
//   slidesPerView: 3,
// });

const ui = UI();

const form = document.querySelector("form");
const search = document.querySelector("#search");
const selectUnit = document.querySelector("#unitMeasure");

const display = document.querySelector(".display");
const currentCardContainer = display.querySelector(".currentCardContainer");
const nextHoursCardContainer = display.querySelector(".nextHoursCardContainer");
const descriptionContainer = display.querySelector(".descriptionCard");
const currentSideCard = display.querySelector(".currentSideCard");
const sunInfoCard = display.querySelector(".sunCard");
const windInfoCard = display.querySelector(".windCard");
const snowInfoCard = display.querySelector(".snowCard");
const nextDaysCard = display.querySelector(".nextDaysCard");

const swiperWrapper = display.querySelector(".swiper-wrapper");

const location = {
  city: "Tokyo",
  country: "Japan",
};

let unitMeasurement = selectUnit.value;

async function parseWeatherInfo(location, unitMeasurement) {
  //TODO: use try and catch method to handle errors.
  const dataFromAPI = await getForecast(location, unitMeasurement);
  const cityWeatherInfo = new CityForecast(dataFromAPI);
  console.log(cityWeatherInfo);

  currentCardContainer.textContent = "";
  descriptionContainer.textContent = "";
  currentSideCard.textContent = "";
  sunInfoCard.textContent = "";
  windInfoCard.textContent = "";
  snowInfoCard.textContent = "";
  nextDaysCard.textContent = "";
  swiperWrapper.textContent = "";

  search.value = cityWeatherInfo.resolvedAddress;

  const today = cityWeatherInfo.days[0];
  const currentCard = ui.showMainInfo(
    cityWeatherInfo.currentConditions,
    today,
    unitMeasurement
  );

  const nextTwentyArray = getNextTwentyFourHours(cityWeatherInfo);

  console.log(nextTwentyArray);
  nextTwentyArray.forEach((hourObj, index) => {
    const swiperItem = printHourCards(hourObj, index, unitMeasurement);
    swiperWrapper.appendChild(swiperItem);
  });

  const desciption = ui.showDescription(cityWeatherInfo.description);
  const moreInfo = ui.showMoreInfo(
    cityWeatherInfo.currentConditions,
    unitMeasurement
  );
  const sunInfo = ui.showSunInfo(cityWeatherInfo.currentConditions);
  const windInfo = ui.showWindInfo(
    cityWeatherInfo.currentConditions,
    unitMeasurement
  );

  const snowInfo = ui.showSnowInfo(
    cityWeatherInfo.currentConditions,
    unitMeasurement
  );

  const weekForecastBtn = createElement(
    "button",
    "showWeekForecast",
    "7-day Forecast"
  );
  if (!document.querySelector(".showWeekOfForecast")) {
    const sevenDaysForecast = createModal(
      cityWeatherInfo.days.slice(0, 7),
      unitMeasurement,
      cityWeatherInfo.resolvedAddress
    );
    display.appendChild(sevenDaysForecast);
  }

  document.querySelector(".showWeekOfForecast").remove();
  const sevenDaysForecast = createModal(
    cityWeatherInfo.days.slice(0, 7),
    unitMeasurement,
    cityWeatherInfo.resolvedAddress
  );
  display.appendChild(sevenDaysForecast);

  weekForecastBtn.addEventListener("click", () => {
    document.querySelector(".showWeekOfForecast").showModal();
  });

  // TODO: create container that will contain 24 cards; each card should contain weather forecast for the next 24 hours.

  currentCardContainer.appendChild(currentCard);
  descriptionContainer.appendChild(desciption);
  currentSideCard.appendChild(moreInfo);
  nextDaysCard.appendChild(weekForecastBtn);
  sunInfoCard.appendChild(sunInfo);
  windInfoCard.appendChild(windInfo);
  snowInfoCard.appendChild(snowInfo);
}

parseWeatherInfo(location, unitMeasurement);

selectUnit.addEventListener("change", () => {
  if (search.value === "") return;

  unitMeasurement = selectUnit.value;
  parseWeatherInfo(location, unitMeasurement);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInput = search.value.trim();
  let [cityInp, countryInp] = searchInput.split(/,|\s+/);
  // countryInp = countryInp !== "" ? countryInp.trim() : "";
  cityInp = cityInp ? cityInp.trim() : "";
  countryInp = countryInp ? countryInp.trim() : "";

  location.city = cityInp;
  location.country = countryInp;

  unitMeasurement = selectUnit.value;

  parseWeatherInfo(location, unitMeasurement);
  // form.reset();
});
