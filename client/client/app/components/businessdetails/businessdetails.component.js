import template from './businessdetails.html';
import controller from './businessdetails.controller';
import './businessdetails.styl';

let businessdetailsComponent = {
  restrict: 'E',
  bindings: {
    business: '<',
    resetSelectedBusiness: '&',
    onSaveBusiness: '&',
    onDeleteSelectedBusiness: '&',
  },
  template,
  controller
};

export default businessdetailsComponent;
