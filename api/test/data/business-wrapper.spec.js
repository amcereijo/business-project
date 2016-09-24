'use strict';
require('app-module-path').addPath(`${__dirname}/../../`);

describe('business-wrapper module', () => {
  const businessWrapperModule = require('src/data/business-wrapper');

  it('should be a function', () => {
    expect(businessWrapperModule).to.be.a('function');
  });

  describe('when it runs', () => {
    const businessData = require('src/data/business');

    let businessWrapper;
    before(() => {
      businessWrapper = businessWrapperModule(businessData);
    });

    describe('should return an object', () => {
      describe('with "cities" property', () => {
        it('as an Array of 3 elements', () => {
          expect(businessWrapper.cities instanceof Array).to.be.true;
          expect(businessWrapper.cities.length).equals(3);
        });
      });

      describe('with "businesses" property', () => {
        it('as an Array of 14 elements', () => {
          expect(businessWrapper.businesses instanceof Array).to.be.true;
          expect(businessWrapper.businesses.length).equals(14);
        });
      });
    });
  });
});
