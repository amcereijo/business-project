'use strict';

exports = module.exports = (businessData, CityNotFoundError, BusinessNotFoundError) => {
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

  function updateBusinessAddress(id, address) {
    return new Promise((resolve, reject) => {
      const business = businessData
        .reduce((businesses = [], cityElement) => Array.prototype.concat.call(businesses, cityElement.businesses), [])
        .filter(businessElement => businessElement.id === id)[0];

      if(!business) {
        reject(new BusinessNotFoundError());
      } else {
        resolve(business);
        business.address = address;
      }
    });
  }

  return {
    getCities,
    getCityBusiness,
    updateBusinessAddress,
  };
};

exports['@singleton'] = true;
exports['@require'] = [
  'src/data/business',
  'src/errors/city-not-found-error',
  'src/errors/business-not-found-error',
];
