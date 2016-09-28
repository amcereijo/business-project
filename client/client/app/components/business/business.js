import angular from 'angular';
import uiRouter from 'angular-ui-router';
import businessComponent from './business.component';

let businessModule = angular.module('business', [
  uiRouter
])

.component('business', businessComponent)

.name;

export default businessModule;
