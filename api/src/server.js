'use strict';

exports = module.exports = (config, express, http, applyMiddlewares, unexpectedError) => {
  function start() {
    const app = express();
    const port = config.port;
    const httpServer = http.createServer(app);

    applyMiddlewares(app);
    unexpectedError(app);

    httpServer.listen(port);
    console.log('OK : Server started at %s port', port);
  }

  return {
    start,
  };
};

exports['@singleton'] = true;
exports['@require'] = [
  'config/index',
  'express',
  'http',
  'src/middlewares/apply-middlewares',
  'src/middlewares/unexpected-error',
];
