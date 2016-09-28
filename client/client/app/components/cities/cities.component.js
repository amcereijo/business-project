import template from './cities.html';
import controller from './cities.controller';
import './cities.styl';

let citiesComponent = {
  restrict: 'E',
  bindings: {
    cities: '<',
    onChangeCity: '&',
  },
  template,
  controller
};

export default citiesComponent;
