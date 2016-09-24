'use strict';

exports = module.exports = (businessData, CityNotFoundError) => {
  function getCities() {
    return Promise.resolve(businessData.map(element => element.city));
  }

  function getCityBusiness(city = '') {
    const cityElement = businessData.filter(element => element.city.toUpperCase() === city.toUpperCase());
    if(!cityElement || cityElement.length === 0) {
      return Promise.reject(new CityNotFoundError());
    }
    return Promise.resolve(cityElement[0].businesses || []);
  }

  return {
    getCities,
    getCityBusiness,
  };
};

exports['@singleton'] = true;
exports['@require'] = [
  'src/data/business',
  'src/errors/city-not-found-error',
];
