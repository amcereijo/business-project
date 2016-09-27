import angular from 'angular';
import Home from './home/home';
import Cities from './cities/cities';
import Header from './header/header';

let componentModule = angular.module('app.components', [
  Home,
  Cities,
  Header,
]).name;

export default componentModule;
