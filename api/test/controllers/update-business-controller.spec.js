'use strict';
require('app-module-path').addPath(`${__dirname}/../../`);

describe('update-business-controller', () => {
  const updateBusinessControllerModule = require('src/controllers/update-business-controller');

  it('should be defined as a function', () => {
    expect(updateBusinessControllerModule).to.be.a('function');
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

    let updateBusinessController;

    before(() => {
      updateBusinessController = updateBusinessControllerModule(config, businessService, BusinessNotFoundError);
    });

    describe('should return an object', () => {
      it('with "endpoint" property', () => {
        expect(updateBusinessController.endpoint).to.exitst;
      });

      describe('with "run" function', () => {
        const httpMocks = require('node-mocks-http');

        it('', () => {
          expect(updateBusinessController.run).to.be.a('function');
        });
        describe('and when it runs', () => {
          const business = {
            city: 'Madrid',
            id: 'MAD17298',
            name: 'Farmacia Licenciado Fernández',
            address: 'Calle Arturo Soria, 15',
          };
          let req;
          let res;

          before((done) => {
            sinon.stub(businessService, 'updateBusinessAddress', (id, address) => {
              business.address = address;
              return Promise.resolve(business);
            });
            req = httpMocks.createRequest({
              method: 'UPDATE',
              url: '/businesses/MAD17298',
              params: {
                id: 'MAD17298',
              },
              body: {
                address: 'new address',
              },
            });
            res = httpMocks.createResponse();

            updateBusinessController.run(req, res);
            setTimeout(() => {
              done();
            }, 1);
          });

          after(() => {
            businessService.updateBusinessAddress.restore();
          });

          it('should return a http code 200', () => {
            expect(res.statusCode).equals(200);
          });
          it('should return the udpated business', () => {
            const data = res._getData();
            expect(data).to.eqls(business);
          });
        });

        describe('and when it runs and businesess not found', () => {
          const businesessNotFound = new BusinessNotFoundError();
          let req;
          let res;

          before((done) => {
            sinon.stub(businessService, 'updateBusinessAddress', () => {
              return Promise.reject(businesessNotFound);
            });
            req = httpMocks.createRequest({
              method: 'UPDATE',
              url: '/businesses/MAD17298',
              params: {
                id: 'MAD17298',
              },
            });
            res = httpMocks.createResponse();

            updateBusinessController.run(req, res);
            setTimeout(() => {
              done();
            }, 1);
          });

          after(() => {
            businessService.updateBusinessAddress.restore();
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
            sinon.stub(businessService, 'updateBusinessAddress', () => {
              return Promise.reject(new Error('unexpected error'));
            });
            req = httpMocks.createRequest({
              method: 'UPDATE',
              url: '/businesses/MAD17298',
              params: {
                id: 'MAD17298',
              },
            });
            res = httpMocks.createResponse();

            updateBusinessController.run(req, res);
            setTimeout(() => {
              done();
            }, 1);
          });

          after(() => {
            businessService.updateBusinessAddress.restore();
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
