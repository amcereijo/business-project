'use strict';

exports = module.exports = (cors, helmet, bodyParser, compression) => {
  return (app) => {
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true,
    }));
    app.use(compression());
  };
};

exports['@singleton'] = true;
exports['@require'] = [
  'cors',
  'helmet',
  'body-parser',
  'compression',
];
