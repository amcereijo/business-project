'use strict';
exports = module.exports = (config, businessService, CityNotFoundError) => {
  return{
    endpoint: config.controllers.getBusiness.endpoint,
    run: (req, res) => {
      const city = req.params.city || '';
      businessService.getCityBusinesses(city)
        .then((businesess) => {
          res.status(200).send(businesess);
        })
        .catch(CityNotFoundError, (err) => {
          res.status(400).send({ error: err.message });
        })
        .catch(() => {
          res.status(500).send({ error: 'Unexpected error' });
        });
    },
  };
};

exports['@singleton'] = true;
exports['@require'] = [
  'config/index',
  'src/services/business-service',
  'src/errors/city-not-found-error',
];
