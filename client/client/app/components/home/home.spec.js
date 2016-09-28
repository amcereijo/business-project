import HomeModule from './home'

describe.only('Home', () => {
  let $rootScope, $state, $location, $componentController, $compile, CitiesService;

  beforeEach(window.module(HomeModule));

  beforeEach(angular.mock.module("home", function ($provide) {
        //Attempt to override the myConstant value that gets passed to config
        $provide.constant("__env", {});
    }));

  beforeEach(inject(($injector) => {
    CitiesService = $injector.get('CitiesService');
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');

    sinon.stub(CitiesService, 'getCities',() => Promise.resolve([]));

  }));

  afterEach(() => {
    CitiesService.getCities.restore();
  });

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('default component should be home', () => {
      $location.url('/');
      $rootScope.$digest();
      expect($state.current.component).to.eq('home');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('home', {
        $scope: $rootScope.$new(),
      });
    });

    it('has a name property', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('name');
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<home></home>')(scope);
      scope.$apply();
    });

    it('has "header" tag in template', () => {
      expect(template.find('header').length).to.eq(1);
    });

  });
});
