'use strict';

exports = module.exports = (config, citiesController, getBusinessesController, updateBusinessController) => {
  return (app) => {
    app.get(`${config.path}${citiesController.endpoint}`, citiesController.run);
    app.get(`${config.path}${getBusinessesController.endpoint}`, getBusinessesController.run);
    app.put(`${config.path}${updateBusinessController.endpoint}`, updateBusinessController.run);
  };
};

exports['@singleton'] = true;
exports['@require'] = [
  'config/index',
  'src/controllers/get-cities-controller',
  'src/controllers/get-businesses-controller',
  'src/controllers/update-business-controller',
];
