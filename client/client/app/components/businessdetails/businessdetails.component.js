import template from './businessdetails.html';
import controller from './businessdetails.controller';
import './businessdetails.styl';

let businessdetailsComponent = {
  restrict: 'E',
  bindings: {
    business: '<',
    resetSelectedBusiness: '&',
    onSaveBusiness: '&',
  },
  template,
  controller
};

export default businessdetailsComponent;
