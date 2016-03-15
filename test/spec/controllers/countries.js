'use strict';

describe('Controller: CountriesCtrl', function () {

  // load the controller's module
  beforeEach(module('geomediaApp'));

  var CountriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CountriesCtrl = $controller('CountriesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CountriesCtrl.awesomeThings.length).toBe(3);
  });
});
