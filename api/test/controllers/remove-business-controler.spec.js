'use strict';
require('app-module-path').addPath(`${__dirname}/../../`);

describe('remove-business-controller', () => {
  const removeBusinessControllerModule = require('src/controllers/remove-business-controller');

  it('should be defined as a function', () => {
    expect(removeBusinessControllerModule).to.be.a('function');
  });

  describe('and when it runs', () => {
    const config = {
      controllers: {
        updateBusiness: {
          endpoint: '/businesess/:id',
        },
      },
    };
    const businessService = require('src/services/business-service')({});
    const BusinessNotFoundError = require('src/errors/business-not-found-error');

    let removeBusinessController;

    before(() => {
      removeBusinessController = removeBusinessControllerModule(config, businessService, BusinessNotFoundError);
    });

    describe('should return an object', () => {
      it('with "endpoint" property', () => {
        expect(removeBusinessController.endpoint).to.exitst;
      });

      describe('with "run" function', () => {
        const httpMocks = require('node-mocks-http');

        it('', () => {
          expect(removeBusinessController.run).to.be.a('function');
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
            sinon.stub(businessService, 'removeBusiness', () => {
              return Promise.resolve(businesses);
            });
            req = httpMocks.createRequest({
              method: 'DELETE',
              url: '/businesses/MAD7163921',
              params: {
                id: 'MAD7163921',
              },
            });
            res = httpMocks.createResponse();

            removeBusinessController.run(req, res);
            setTimeout(() => {
              done();
            }, 1);
          });

          after(() => {
            businessService.removeBusiness.restore();
          });

          it('should return a http code 200', () => {
            expect(res.statusCode).equals(200);
          });
          it('should return the udpated business', () => {
            const data = res._getData();
            expect(data).to.eqls(businesses);
          });
        });

        describe('and when it runs and businesess not found', () => {
          const businesessNotFound = new BusinessNotFoundError();
          let req;
          let res;

          before((done) => {
            sinon.stub(businessService, 'removeBusiness', () => {
              return Promise.reject(businesessNotFound);
            });
            req = httpMocks.createRequest({
              method: 'DELETE',
              url: '/businesses/MAD17298',
              params: {
                id: 'MAD17298',
              },
            });
            res = httpMocks.createResponse();

            removeBusinessController.run(req, res);
            setTimeout(() => {
              done();
            }, 1);
          });

          after(() => {
            businessService.removeBusiness.restore();
          });

          it('should return a http code 400', () => {
            expect(res.statusCode).equals(400);
          });
          it('should return the error message', () => {
            const data = res._getData();
            expect(data.error).to.eqls(businesessNotFound.message);
          });
        });

        describe('and when it runs and an unexpected error ocurrs', () => {
          let req;
          let res;

          before((done) => {
            sinon.stub(businessService, 'removeBusiness', () => {
              return Promise.reject(new Error('unexpected error'));
            });
            req = httpMocks.createRequest({
              method: 'DELETE',
              url: '/businesses/MAD17298',
              params: {
                id: 'MAD17298',
              },
            });
            res = httpMocks.createResponse();

            removeBusinessController.run(req, res);
            setTimeout(() => {
              done();
            }, 1);
          });

          after(() => {
            businessService.removeBusiness.restore();
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
