import HeaderModule from './header'
import HeaderController from './header.controller';
import HeaderComponent from './header.component';
import HeaderTemplate from './header.html';

describe('Header', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HeaderModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HeaderController();
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
    it('has <h1> in template', () => {
      expect(HeaderTemplate).to.match(/<h1>Business Client<\/h1>/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = HeaderComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HeaderTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HeaderController);
      });
  });
});
