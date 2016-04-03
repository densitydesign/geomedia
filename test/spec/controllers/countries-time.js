'use strict';

describe('Controller: CountriesTimeCtrl', function () {

  // load the controller's module
  beforeEach(module('geomediaApp'));

  var CountriesTimeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CountriesTimeCtrl = $controller('CountriesTimeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
