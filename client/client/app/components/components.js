import angular from 'angular';
import Home from './home/home';
import Cities from './cities/cities';
import Header from './header/header';
import Business from './business/business';
import BusinessDetails from './businessdetails/businessdetails';

let componentModule = angular.module('app.components', [
  Home,
  Cities,
  Header,
  Business,
  BusinessDetails,
]).name;

export default componentModule;
