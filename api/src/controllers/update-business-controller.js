'use strict';
exports = module.exports = (config, businessService, BusinessNotFoundError) => {
  return {
    endpoint: config.controllers.updateBusiness.endpoint,
    run: (req, res) => {
      const businessId = req.params.id || '';
      const { address = '' } = req.body;

      businessService.updateBusinessAddress(businessId, address)
        .then((business) => {
          res.status(200).send(business);
        })
        .catch(BusinessNotFoundError, (err) => {
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
  'src/errors/business-not-found-error',
];
