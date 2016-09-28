import template from './home.html';
import controller from './home.controller';
import './home.styl';
import 'bootstrap/dist/css/bootstrap.css';

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
};

export default homeComponent;
