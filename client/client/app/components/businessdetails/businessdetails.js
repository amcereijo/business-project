import angular from 'angular';
import uiRouter from 'angular-ui-router';
import businessdetailsComponent from './businessdetails.component';

let businessdetailsModule = angular.module('businessdetails', [
  uiRouter
])

.component('businessdetails', businessdetailsComponent)

.name;

export default businessdetailsModule;
