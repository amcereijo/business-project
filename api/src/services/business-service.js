'use strict';

exports = module.exports = (businessDataWrapper, CityNotFoundError, BusinessNotFoundError) => {
  function getCities() {
    return Promise.resolve(businessDataWrapper.cities);
  }

  function getCityBusinesses(city = '') {
    return new Promise((resolve, reject) => {
      const businesses = businessDataWrapper.businesses.filter(element => element.city.toUpperCase() === city.toUpperCase());
      if(businesses.length === 0 && businessDataWrapper.cities.indexOf(city) === -1) {
        reject(new CityNotFoundError());
      } else {
        resolve(businesses);
      }
    });
  }

  function updateBusinessAddress(id, address) {
    return new Promise((resolve, reject) => {
      const business = businessDataWrapper.businesses.filter(businessElement => businessElement.id === id)[0];

      if(!business) {
        reject(new BusinessNotFoundError());
      } else {
        business.address = address;
        resolve(business);
      }
    });
  }

  return {
    getCities,
    getCityBusinesses,
    updateBusinessAddress,
  };
};

exports['@singleton'] = true;
exports['@require'] = [
  'src/data/business-wrapper',
  'src/errors/city-not-found-error',
  'src/errors/business-not-found-error',
];
