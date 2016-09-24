'use strit';

function CityNotFound(message) {
  this.message = message || 'CityNotFound';
  this.name = 'CityNotFound';
  Error.captureStackTrace(this, CityNotFound);
}
CityNotFound.prototype = Object.create(Error.prototype);
CityNotFound.prototype.constructor = CityNotFound;

module.exports = CityNotFound;
