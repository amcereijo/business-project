import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import CitiesService from '../../services/cities-service';
import BusinessService from '../../services/business-service';

let homeModule = angular.module('home', [
  uiRouter,
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home', {
    url: '/',
    component: 'home'
  });
})
.component('home', homeComponent)
.factory('CitiesService', CitiesService)
.factory('BusinessService', BusinessService)

.name;

export default homeModule;
