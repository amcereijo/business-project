'use strict';
exports = module.exports = (config, businessService, BusinessNotFoundError) => {
  return {
    endpoint: config.controllers.updateBusiness.endpoint,
    run: (req, res) => {
      const businessId = req.params.id || '';

      businessService.removeBusiness(businessId)
        .then((businesses) => {
          res.status(200).send(businesses);
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
