'use strict';
require('app-module-path').addPath(`${__dirname}/`);

const IoC = require('electrolyte');
const bluebird = require('bluebird');
/* eslint-disable no-global-assign*/
Promise = bluebird;

IoC.use(IoC.node_modules());
IoC.use(IoC.dir(__dirname));

const server = IoC.create('src/server');
server.start();
