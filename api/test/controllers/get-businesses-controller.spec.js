'use strict';
require('app-module-path').addPath(`${__dirname}/../../`);

describe('get-businesses-controller', () => {
  const getBusinessesControllerModule = require('src/controllers/get-businesses-controller');

  it('should be defined as a function', () => {
    expect(getBusinessesControllerModule).to.be.a('function');
  });

  describe('and when it runs', () => {
    const config = {
      controllers: {
        getBusiness: {
          endpoint: '/cities/:city/businesses',
        },
      },
    };
    const businessService = require('src/services/business-service')({});
    const CityNotFoundError = require('src/errors/city-not-found-error');

    let getBusinessesController;

    before(() => {
      getBusinessesController = getBusinessesControllerModule(config, businessService, CityNotFoundError);
    });

    describe('should return an object', () => {
      it('with "endpoint" property', () => {
        expect(getBusinessesController.endpoint).to.exitst;
      });

      describe('with "run" function', () => {
        const httpMocks = require('node-mocks-http');

        it('', () => {
          expect(getBusinessesController.run).to.be.a('function');
        });
        describe('and when it runs', () => {
          const businesses = [{
            city: 'Madrid',
            id: 'MAD17298',
            name: 'Farmacia Licenciado Fernández',
            address: 'Calle Arturo Soria, 15',
          }, {
            city: 'Madrid',
            id: 'MAD7163921',
            name: 'Panadería San Martín',
            address: 'Calle del Hostal, 5',
          }, {
            city: 'Madrid',
            id: 'MAD71432',
            name: 'Calzados la suela',
            address: 'Calle Jardín, 33, 1o A',
          }, {
            city: 'Madrid',
            id: 'MAD76732',
            name: 'Panadería Zurro',
            address: 'Avenida del Pardo, 32',
          }, {
            city: 'Madrid',
            id: 'MAD7236539',
            name: 'Ferretería el martillo',
            address: 'Paseo de la tuerca, 12, 4o B',
          }];
          let req;
          let res;

          before((done) => {
            sinon.stub(businessService, 'getCityBusinesses', () => {
              return Promise.resolve(businesses);
            });
            req = httpMocks.createRequest({
              method: 'GET',
              url: '/cities/Madrid/businesses',
              params: {
                city: 'Madrid',
              },
            });
            res = httpMocks.createResponse();

            getBusinessesController.run(req, res);
            setTimeout(() => {
              done();
            }, 1);
          });

          after(() => {
            businessService.getCityBusinesses.restore();
          });

          it('should return a http code 200', () => {
            expect(res.statusCode).equals(200);
          });
          it('should return the list of businesses', () => {
            const data = res._getData();
            expect(data).to.eqls(businesses);
          });
        });

        describe('and when it runs and the service returns "CityNotFoundError" error ', () => {
          const cityNotFoundErrorInstance = new CityNotFoundError();
          let req;
          let res;

          before((done) => {
            sinon.stub(businessService, 'getCityBusinesses', () => {
              return Promise.reject(cityNotFoundErrorInstance);
            });
            req = httpMocks.createRequest({
              method: 'GET',
              url: '/cities/Madrid/businesses',
              params: {
                city: '',
              },
            });
            res = httpMocks.createResponse();

            getBusinessesController.run(req, res);
            setTimeout(() => {
              done();
            }, 1);
          });

          after(() => {
            businessService.getCityBusinesses.restore();
          });

          it('should return a http code 400', () => {
            expect(res.statusCode).equals(400);
          });
          it('should return the error message', () => {
            const data = res._getData();
            expect(data.error).to.eqls(cityNotFoundErrorInstance.message);
          });
        });

        describe('and when it runs and the service returns other error ', () => {
          let req;
          let res;

          before((done) => {
            sinon.stub(businessService, 'getCityBusinesses', () => {
              return Promise.reject(new Error('unexpected error'));
            });
            req = httpMocks.createRequest({
              method: 'GET',
              url: '/cities/Madrid/businesses',
              params: {
                city: '',
              },
            });
            res = httpMocks.createResponse();

            getBusinessesController.run(req, res);
            setTimeout(() => {
              done();
            }, 1);
          });

          after(() => {
            businessService.getCityBusinesses.restore();
          });

          it('should return a http code 500', () => {
            expect(res.statusCode).equals(500);
          });
          it('should return the error message', () => {
            const data = res._getData();
            expect(data.error).to.eqls('Unexpected error');
          });
        });
      });
    });
  });
});
