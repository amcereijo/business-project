module.exports = {
  port: 7000,
  path: '/business/api',
  controllers: {
    getCities: {
      endpoint: '/cities',
    },
    getBusiness: {
      endpoint: '/cities/:city/businesess',
    },
    updateBusiness: {
      endpoint: '/businesess/:id',
    },
    removeBusiness: {
      endpoint: '/businesess/:id',
    },
  },
};
