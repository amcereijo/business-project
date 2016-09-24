const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const bluebird = require('bluebird');
/* eslint-disable no-global-assign*/
Promise = bluebird;

chai.use(sinonChai);
chai.config.includeStack = true;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;
global.sinon = sinon;
