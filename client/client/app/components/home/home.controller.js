class HomeController {
  constructor() {
    this.name = 'home';
    // TODO get from service
    this.cities = ['Madrid', 'Barcelona', 'Paris'];
    this.TOTAL_BUSINESESS = [
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
      {
        "city": "Madrid",
        "id": "MAD767329",
        "name": "Panadería Zurro",
        "address": "Avenida del Pardo, 32"
      },
      {
        "city": "Madrid",
        "id": "MAD72365139",
        "name": "Ferretería el martillo",
        "address": "Paseo de la tuerca, 12, 4o B"
      }
    ];
    this.businesses = []
    this.selectedCityName = '';
  }
  selectCity(cityName) {
    console.log('cityName: ', cityName);
    this.businesses = this.TOTAL_BUSINESESS;
    this.selectedCityName = cityName;
  }
}

export default HomeController;
