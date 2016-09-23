'use strict';
exports = module.exports = () => {
  const env = process.env.NODE_ENV || 'dev';
  return require(`config/server-${env}`);
};

exports['@singleton'] = true;
