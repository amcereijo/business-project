'use strict';

exports = module.exports = (cors, helmet, bodyParser) => {
  return (app) => {
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true,
    }));
  };
};

exports['@singleton'] = true;
exports['@require'] = [
  'cors',
  'helmet',
  'body-parser',
];
