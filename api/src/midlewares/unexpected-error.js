'use strict';

exports = module.exports = () => {
  return (app) => {
    // 500 Internal error config
    // eslint-disable-next-line no-unused-vars
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.send(500, { error: 'Internal Server Error' });
    });
  };
};

exports['@singleton'] = true;
exports['@require'] = [];
