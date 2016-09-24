'use strict';

exports = module.exports = (config, businessService) => {
  return{
    endpoint: config.controllers.getCities.endpoint,
    run: (req, res) => {
      businessService.getCities()
        .then((cities) => {
          res.status(200).send(cities);
        });
    },
  };
};

exports['@singleton'] = true;
exports['@require'] = [
  'config/index',
  'src/services/business-service',
];
