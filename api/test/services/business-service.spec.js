'use strict';
require('app-module-path').addPath(`${__dirname}/../../`);

describe('business-service module', () => {
  const businesServiceModule = require('src/services/business-service');

  it('should be a function', () => {
    expect(businesServiceModule).to.be.a('function');
  });

  describe('when it runs', () => {
    const businessData = require('src/data/business');

    let businessService;
    before(() => {
      businessService = businesServiceModule(businessData);
    });

    describe('should return an object', () => {
      describe('with "getCities" property', () => {
        it('defined as a function', () => {
          expect(businessService.getCities).to.be.a('function');
        });

        describe('and when it runs', () => {
          it('should return all cites', (done) => {
            businessService.getCities()
              .then((cities) => {
                expect(cities[0]).equals('Madrid');
                expect(cities[1]).equals('Barcelona');
                expect(cities[2]).equals('Paris');
                done();
              });
          });
        });
      });
    });
  });
});
