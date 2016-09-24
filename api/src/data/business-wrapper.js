'use strict';

exports = module.exports = (businessData) => {
  const cities = businessData.map(element => element.city);
  const allBusinesses = businessData
    .reduce((businesses = [], cityElement) => {
      const mappedBusinesses = cityElement.businesses.map(business => Object.assign({ city: cityElement.city }, business));
      return Array.prototype.concat.call(businesses, mappedBusinesses);
    }, []);

  return {
    cities,
    businesses: allBusinesses,
  };
};

exports['@singleton'] = true;
exports['@require'] = [
  'src/data/business',
];
