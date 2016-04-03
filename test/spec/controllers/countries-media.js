'use strict';

describe('Controller: CountriesMediaCtrl', function () {

  // load the controller's module
  beforeEach(module('geomediaApp'));

  var CountriesMediaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CountriesMediaCtrl = $controller('CountriesMediaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
