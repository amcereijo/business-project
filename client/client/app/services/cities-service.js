function CitiesService($http, __env) {
  "ngInject";

  return {
    getCities: function () {
      return $http.get(`${__env.apiUrl}/business/api/cities`)
        .then(({ data, status, config, statusText }) => {
          if(data && status === 200) {
            return data;
          }
          throw new Error(data);
        });
    },
    getBusinessesInCity(cityName) {
      return $http.get(`${__env.apiUrl}/business/api/cities/${cityName}/businesess`)
        .then(({ data, status, config, statusText }) => {
          if(data && status === 200) {
            return data;
          }
          throw new Error(data);
        });
    }
  };
}

export default CitiesService;