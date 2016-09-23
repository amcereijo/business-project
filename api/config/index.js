'use strict';
exports = module.exports = () => {
  console.log(`ENV; config/server-`)
  const env = process.env.NODE_ENV || 'dev';

  return require(`config/server-${env}`);
};

exports['@singleton'] = true;
