import template from './cities.html';
import controller from './cities.controller';
import './cities.styl';

let citiesComponent = {
  restrict: 'E',
  bindings: {
    cities: '<'
  },
  template,
  controller
};

export default citiesComponent;
