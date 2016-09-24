'use strict';

exports = module.exports = (businessData) => {
  function getCities() {
    return Promise.resolve(businessData.map(element => element.city));
  }

  return {
    getCities,
  };
};

exports['@singleton'] = true;
exports['@require'] = [
  'src/data/business',
];
