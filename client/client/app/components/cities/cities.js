import angular from 'angular';
import uiRouter from 'angular-ui-router';
import citiesComponent from './cities.component';

let citiesModule = angular.module('cities', [
  uiRouter
])

.component('cities', citiesComponent)

.name;

export default citiesModule;
