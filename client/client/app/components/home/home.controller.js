class HomeController {
  constructor() {
    this.name = 'home';
    // TODO get from service
    this.cities = ['Madrid', 'Barcelona', 'Paris'];
  }
  selectCity(cityName) {
    console.log('cityName: ', cityName);
  }
}

export default HomeController;
