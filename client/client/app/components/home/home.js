import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import CitiesService from '../../services/cities-service';

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

.name;

export default homeModule;
