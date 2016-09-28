import CitiesService from './cities-service'

describe('CitiesService', () => {
  const __env = {
    apiUrl: 'http://localhost:7000',
  };
  let $http;
  let $httpBackend;
  let citiesServiceInstance ;

  beforeEach(inject(($injector) => {
    $http = $injector.get('$http');
    $httpBackend = $injector.get('$httpBackend');
    citiesServiceInstance = CitiesService($http, __env);
  }));

  describe('Module', () => {
    it('should be defined', () => {
      expect(citiesServiceInstance).to.exist;
    });

    it('should have "getCities" method', () => {
      expect(citiesServiceInstance.getCities).to.be.a('function');
    });

    describe('when run "getCities"', () => {
      const cities = ['Madrid', 'Other'];
      beforeEach(() => {
        $httpBackend.when('GET', `${__env.apiUrl}/business/api/cities`).respond(cities);
      });
      it('should return correct cities', (done) => {
        // TODO complete
        done();
      });
    });

    it('should have "getBusinessesInCity" method', () => {
      expect(citiesServiceInstance.getBusinessesInCity).to.be.a('function');
    });

    describe('when run "getBusinessesInCity"', () => {
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
      const cityName = 'Madrid';
      beforeEach(() => {
        $httpBackend.when('GET', `${__env.apiUrl}/business/api/cities/${cityName}/businesess`).respond(businesses);
      });
      it('should return correct businesess', (done) => {
        // TODO complete
        done();
      });
    });
  });
});
