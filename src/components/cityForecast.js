export default class CityForecast {
  constructor({
    resolvedAddress = "N/A",
    description = "N/A",
    currentConditions = {},
    days = [],
  } = {}) {
    this.resolvedAddress = resolvedAddress;
    this.description = description;
    this.currentConditions = currentConditions;
    this.days = days;
  }
}
