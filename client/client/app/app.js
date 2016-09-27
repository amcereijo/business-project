import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import dropdown from 'angular-ui-bootstrap/src/dropdown';
import uibootstrap from 'angular-ui-bootstrap';

angular.module('app', [
    uiRouter,
    dropdown,
    uibootstrap,
    Components,
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
