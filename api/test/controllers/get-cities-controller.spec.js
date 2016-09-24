'use strict';
require('app-module-path').addPath(`${__dirname}/../../`);

describe('get-cities-controller', () => {
  const getCitiesControllerModule = require('src/controllers/get-cities-controller');

  it('should be a function', () => {
    expect(getCitiesControllerModule).to.be.a('function');
  });

  describe('and when it runs', () => {
    const config = {
      controllers: {
        getCities: {
          endpoint: '/cities',
        },
      },
    };
    const businessService = require('src/services/business-service')({});

    let getCitiesController;

    before(() => {
      getCitiesController = getCitiesControllerModule(config, businessService);
    });

    describe('should return an object', () => {
      it('with "endpoint" property', () => {
        expect(getCitiesController.endpoint).to.exitst;
      });

      describe('with "run" function', () => {
        it('', () => {
          expect(getCitiesController.run).to.be.a('function');
        });

        describe('when it runs', () => {
          const httpMocks = require('node-mocks-http');

          const cities = ['One', 'Two'];
          let req;
          let res;

          before((done) => {
            sinon.stub(businessService, 'getCities', () => {
              return Promise.resolve(cities);
            });
            req = httpMocks.createRequest();
            res = httpMocks.createResponse();

            getCitiesController.run(req, res);
            setTimeout(() => {
              done();
            }, 1);
          });

          it('should return a http code 200', () => {
            expect(res.statusCode).equals(200);
          });
          it('should return the list of cities', () => {
            const data = res._getData();
            expect(data).to.eqls(cities);
          });
        });
      });
    });
  });
});
