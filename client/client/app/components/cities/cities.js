import angular from 'angular';
import uiRouter from 'angular-ui-router';
import citiesComponent from './cities.component';
import dropdown from 'angular-ui-bootstrap/src/dropdown';
import uibootstrap from 'angular-ui-bootstrap';

let citiesModule = angular.module('cities', [
  uiRouter,
  dropdown,
  uibootstrap,
])

.component('cities', citiesComponent)

.name;

export default citiesModule;
