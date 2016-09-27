import angular from 'angular';
import Home from './home/home';
import Header from './header/header';

let componentModule = angular.module('app.components', [
  Home,
  Header,
]).name;

export default componentModule;
