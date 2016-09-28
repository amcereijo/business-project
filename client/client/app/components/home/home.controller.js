class HomeController {
/*@ngInject*/
  constructor(CitiesService, BusinessService) {
    this.CitiesService = CitiesService;
    this.BusinessService =BusinessService;
    this.name = 'home';

    this.cities = [];
    this.businesses = []
    this.selectedCityName = '';
    this.selectedBusiness = null;
  }

  $onInit() {
    this.CitiesService.getCities().then((cities) => {
      this.cities = cities;
    })
    .catch((Err) => {
      console.error('Error get cities: ', Err);
    })
  }

  selectCity(cityName) {
    console.log('cityName: ', cityName);
    this.CitiesService.getBusinessesInCity(cityName)
      .then((businesses) => {
        this.businesses = businesses;
      })
    this.selectedCityName = cityName;
  }
  showBusiness(businessId) {
    console.log('businessId: ', businessId);
    this.selectedBusiness = this.businesses.filter((b) => b.id === businessId)[0];
    console.log('selectedBusiness: ', this.selectedBusiness);
  }
  resetSelectedBusiness() {
    this.selectedBusiness = null;
  }

  onSaveBusiness(id, address) {
    console.log(id, ' address: ', address);
    this.selectedBusiness = null;
    this.BusinessService.updateBusiness(id, address);
  }

  onDeleteSelectedBusiness(id) {
    console.log('delete id: ', id);
    this.selectedBusiness = null;
    this.BusinessService.removeBusiness(id)
      .then((businesses) => {
        this.businesses = businesses;
      });
  }
}

export default HomeController;
