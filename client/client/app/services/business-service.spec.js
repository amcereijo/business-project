import BusinessService from './business-service'

describe('BusinessService', () => {
  const __env = {
    apiUrl: 'http://localhost:7000',
  };
  let $http;
  let $httpBackend;
  let BusinessServiceInstance ;

  beforeEach(inject(($injector) => {
    $http = $injector.get('$http');
    $httpBackend = $injector.get('$httpBackend');
    BusinessServiceInstance = BusinessService($http, __env);
  }));

  describe('Module', () => {
    it('should be defined', () => {
      expect(BusinessServiceInstance).to.exist;
    });

    it('should have "updateBusiness" method', () => {
      expect(BusinessServiceInstance.updateBusiness).to.be.a('function');
    });

    describe('when run "updateBusiness"', () => {
      const id = 1;
      const address = 'new addres';
      const business =  {
        "city": "Madrid",
        "id": "1",
        "name": "Panadería San Martín",
        "address": address,
      }
      beforeEach(() => {
        $httpBackend.when('UPDATE', `${__env.apiUrl}/business/api/businesess/${id}`).respond(business);
      });
      it('should response with the updated business', (done) => {
        // TODO complete
        done();
      });
    });

    it('should have "removeBusiness" method', () => {
      expect(BusinessServiceInstance.removeBusiness).to.be.a('function');
    });

    describe('when run "removeBusiness"', () => {
      const id = 1;
      const businesses = [
        {
          "city": "Madrid",
          "id": "MAD71639921",
          "name": "Panadería San Martín",
          "address": "Calle del Hostal, 5"
        },
        {
          "city": "Madrid",
          "id": "MAD714329",
          "name": "Calzados la suela",
          "address": "Calle Jardín, 33, 1o A"
        },
      ];
      beforeEach(() => {
        $httpBackend.when('DELETE', `${__env.apiUrl}/business/api/businesess/${id}`).respond(businesses);
      });
      it('should return correct businesess', (done) => {
        // TODO complete
        done();
      });
    });
  });
});
