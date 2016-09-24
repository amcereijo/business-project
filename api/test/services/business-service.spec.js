'use strict';
require('app-module-path').addPath(`${__dirname}/../../`);

describe('business-service module', () => {
  const businesServiceModule = require('src/services/business-service');

  it('should be a function', () => {
    expect(businesServiceModule).to.be.a('function');
  });

  describe('when it runs', () => {
    const businessData = require('src/data/business');
    const CityNotFoundError = require('src/errors/city-not-found-error');

    let businessService;
    before(() => {
      businessService = businesServiceModule(businessData, CityNotFoundError);
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

      describe('with "getCityBusiness" property', () => {
        it('defined as a function', () => {
          expect(businessService.getCityBusiness).to.be.a('function');
        });
        describe('and when it runs', () => {
          it('should return all business in the passed city', (done) => {
            const businessesInMadrid = businessData[0].businesses;
            businessService.getCityBusiness('Madrid')
              .then((businesses) => {
                expect(businesses).to.eqls(businessesInMadrid);
                done();
              });
          });
        });
        describe('and when it runs and the city does not exist', () => {
          it('should return an "CityNotFoundError" error', (done) => {
            businessService.getCityBusiness('Other')
              .catch((err) => {
                expect(err).to.be.instanceOf(CityNotFoundError);
                done();
              });
          });
        });
        describe('and when it runs and the city have not any businesses', () => {
          before(() => {
            businessData.push({
              country: 'ES',
              city: 'EmptyCity',
            });
          });
          after(() => {
            businessData.pop();
          });

          it('should return an empty array', (done) => {
            businessService.getCityBusiness('EmptyCity')
              .then((businesses) => {
                expect(businesses).to.eqls([]);
                done();
              });
          });
        });
      });
    });
  });
});
