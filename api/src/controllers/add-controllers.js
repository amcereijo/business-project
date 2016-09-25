'use strict';

exports = module.exports = (config, citiesController, getBusinessesController) => {
  return (app) => {
    app.get(`${config.path}${citiesController.endpoint}`, citiesController.run);
    app.get(`${config.path}${getBusinessesController.endpoint}`, getBusinessesController.run);
  };
};

exports['@singleton'] = true;
exports['@require'] = [
  'config/index',
  'src/controllers/get-cities-controller',
  'src/controllers/get-businesses-controller',
];
