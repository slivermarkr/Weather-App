export default class CityForecast {
  constructor({ resolvedAddress, description, currentConditions, days } = {}) {
    this.resolvedAddress = resolvedAddress;
    this.description = description;
    this.currentConditions = currentConditions;
    this.days = days;
  }
}
