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

  function removeBusiness(id) {
    return new Promise((resolve, reject) => {
      const business = businessDataWrapper.businesses.filter(businessElement => businessElement.id === id)[0];
      if(!business) {
        reject(new BusinessNotFoundError());
      } else {
        const indexOf = businessDataWrapper.businesses.indexOf(business);
        const cityOfBusiness = business.city;
        businessDataWrapper.businesses = Array.prototype.concat.apply(businessDataWrapper.businesses.slice(0, indexOf),
          businessDataWrapper.businesses.slice(indexOf + 1));
        const businesessInCity = businessDataWrapper.businesses.filter(element => element.city === cityOfBusiness);
        resolve(businesessInCity);
      }
    });
  }

  return {
    getCities,
    getCityBusinesses,
    updateBusinessAddress,
    removeBusiness,
  };
};

exports['@singleton'] = true;
exports['@require'] = [
  'src/data/business-wrapper',
  'src/errors/city-not-found-error',
  'src/errors/business-not-found-error',
];
