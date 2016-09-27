import BusinessdetailsModule from './businessdetails'
import BusinessdetailsController from './businessdetails.controller';
import BusinessdetailsComponent from './businessdetails.component';
import BusinessdetailsTemplate from './businessdetails.html';

describe('Businessdetails', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BusinessdetailsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BusinessdetailsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
  });

  describe('Component', () => {
      // component/directive specs
      let component = BusinessdetailsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BusinessdetailsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BusinessdetailsController);
      });
  });
});
