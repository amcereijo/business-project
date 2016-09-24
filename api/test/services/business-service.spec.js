'use strict';
require('app-module-path').addPath(`${__dirname}/../../`);

describe('business-service module', () => {
  const businesServiceModule = require('src/services/business-service');

  it('should be a function', () => {
    expect(businesServiceModule).to.be.a('function');
  });

  describe('when it runs', () => {
    const businessData = [{
      country: 'ES',
      city: 'Madrid',
      businesses: [{
        id: 'MAD17298',
        name: 'Farmacia Licenciado Fernández',
        address: 'Calle Arturo Soria, 15',
      }, {
        id: 'MAD71639921',
        name: 'Panadería San Martín',
        address: 'Calle del Hostal, 5',
      }],
    }, {
      country: 'ES',
      city: 'Barcelona',
      businesses: [{
        id: 'BAR293471',
        name: 'Farmacia Licenciado Puig',
        address: 'Ramblas, 15, 3o D',
      }],
    }, {
      country: 'FR',
      city: 'Paris',
      businesses: [{
        id: 'PAR3234871',
        name: 'Bistrot le Poulet',
        address: '66 Rue Monge',
      }, {
        id: 'PAR32391871',
        name: 'Crédit Agricole',
        address: '739 Rue de Vaugirard',
      }],
    }];
    const businessWrapper = require('src/data/business-wrapper')(businessData);
    const CityNotFoundError = require('src/errors/city-not-found-error');
    const BusinessNotFoundError = require('src/errors/business-not-found-error');

    let businessService;
    before(() => {
      businessService = businesServiceModule(businessWrapper, CityNotFoundError, BusinessNotFoundError);
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

      describe('with "getCityBusinesses" property', () => {
        it('defined as a function', () => {
          expect(businessService.getCityBusinesses).to.be.a('function');
        });
        describe('and when it runs', () => {
          it('should return all business in the passed city', (done) => {
            const businessesInMadrid = [{
              city: 'Madrid',
              id: 'MAD17298',
              name: 'Farmacia Licenciado Fernández',
              address: 'Calle Arturo Soria, 15',
            }, {
              city: 'Madrid',
              id: 'MAD71639921',
              name: 'Panadería San Martín',
              address: 'Calle del Hostal, 5',
            }];
            businessService.getCityBusinesses('Madrid')
              .then((businesses) => {
                expect(businesses).to.eqls(businessesInMadrid);
                done();
              });
          });
        });
        describe('and when it runs and the city does not exist', () => {
          it('should return an "CityNotFoundError" error', (done) => {
            businessService.getCityBusinesses('Other')
              .catch((err) => {
                expect(err).to.be.instanceOf(CityNotFoundError);
                done();
              });
          });
        });
        describe('and when it runs and the city have not any businesses', () => {
          before(() => {
            businessWrapper.cities.push('EmptyCity');
          });
          after(() => {
            businessWrapper.cities.pop();
          });

          it('should return an empty array', (done) => {
            businessService.getCityBusinesses('EmptyCity')
              .then((businesses) => {
                expect(businesses).to.eqls([]);
                done();
              });
          });
        });
      });

      describe('with "updateBusinessAddress" property', () => {
        it('defined as a function', () => {
          expect(businessService.updateBusinessAddress).to.be.a('function');
        });

        describe('when it runs', () => {
          const id = 'MAD71639921';
          const newAddress = 'GranVia';
          let savedBusiness;

          before(() => {
            savedBusiness = Object.assign({}, businessWrapper.businesses[1]);
          });
          after(() => {
            businessWrapper.businesses[1] = savedBusiness;
          });

          it('it should change que business adress', (done) => {
            businessService.updateBusinessAddress(id, newAddress)
              .then((modifiedElement) => {
                expect(modifiedElement.address).equals(newAddress);
                expect(businessWrapper.businesses[1]).to.not.eqls(savedBusiness);
                done();
              });
          });
        });

        describe('and when it runs and the businessº does not exist', () => {
          it('should return an "BusinessNotFoundError" error', (done) => {
            businessService.updateBusinessAddress('id', 'newAddress')
              .catch((err) => {
                expect(err).to.be.instanceOf(BusinessNotFoundError);
                done();
              });
          });
        });
      });

      describe('with "removeBusiness" property', () => {
        it('defined as a function', () => {
          expect(businessService.removeBusiness).to.be.a('function');
        });

        describe('when it runs', () => {
          let savedBusiness;
          const cityBusinesses = [{
            city: 'Madrid',
            id: 'MAD17298',
            name: 'Farmacia Licenciado Fernández',
            address: 'Calle Arturo Soria, 15',
          }, {
            city: 'Madrid',
            id: 'MAD71639921',
            name: 'Panadería San Martín',
            address: 'Calle del Hostal, 5',
          }];

          before(() => {
            savedBusiness = Object.assign({}, businessWrapper.businesses[1]);
          });
          after(() => {
            businessWrapper.businesses = Array.prototype.concat.apply(businessWrapper.businesses.slice(0, 1),
              savedBusiness, businessWrapper.businesses.slice(1));
          });

          it('it should remove the element from the city business list', (done) => {
            businessService.removeBusiness(savedBusiness.id)
              .then((businesess) => {
                expect(businesess.length < cityBusinesses.length).to.be.true;
                expect(businesess.indexOf(savedBusiness)).equals(-1);
                done();
              });
          });
        });
      });
    });
  });
});
