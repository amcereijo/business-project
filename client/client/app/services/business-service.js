function BusinessService($http, __env) {
  "ngInject";

  return {
    updateBusiness: function(id, address) {
      return $http.put(`${__env.apiUrl}/business/api/businesess/${id}`, { address });
    },
    removeBusiness: function(id) {
      return $http.delete(`${__env.apiUrl}/business/api/businesess/${id}`)
        .then(({ data, status, config, statusText }) => {
          if(data && status === 200) {
            return data;
          }
          throw new Error(data);
        });
    }
  };
}

export default BusinessService;