'use strict';

exports = module.exports = (config, citiesController) => {
  return (app) => {
    app.get(`${config.path}${citiesController.endpoint}`, citiesController.run);
  };
};

exports['@singleton'] = true;
exports['@require'] = [
  'config/index',
  'src/controllers/get-cities-controller',
];
