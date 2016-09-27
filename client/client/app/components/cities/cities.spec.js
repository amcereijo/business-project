import CitiesModule from './cities'
import CitiesController from './cities.controller';
import CitiesComponent from './cities.component';
import CitiesTemplate from './cities.html';

describe('Cities', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CitiesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CitiesController();
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
    it('has name in template [REMOVE]', () => {
      expect(CitiesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CitiesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CitiesTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CitiesController);
      });
  });
});
