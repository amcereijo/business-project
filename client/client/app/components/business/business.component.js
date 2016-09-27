import template from './business.html';
import controller from './business.controller';
import './business.styl';

let businessComponent = {
  restrict: 'E',
  bindings: {
    cityName: '<',
    businesses: '<',
    onSelectBusiness: '&',
    selectedBusiness: '<',
    resetSelectedBusiness: '&',
    onSaveBusiness: '&',
  },
  template,
  controller
};

export default businessComponent;
