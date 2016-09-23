'use strict';

exports = module.exports = (config, express, http) => {
  function start() {
    const app = express();
    const port = config.port;
    const httpServer = http.createServer(app);

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
];
