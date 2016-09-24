'use strit';

function BusinessNotFoundError(message) {
  this.message = message || 'BusinessNotFoundError';
  this.name = 'BusinessNotFoundError';
  Error.captureStackTrace(this, BusinessNotFoundError);
}
BusinessNotFoundError.prototype = Object.create(Error.prototype);
BusinessNotFoundError.prototype.constructor = BusinessNotFoundError;

module.exports = BusinessNotFoundError;
