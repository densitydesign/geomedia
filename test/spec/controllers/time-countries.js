'use strict';

describe('Controller: TimeCountriesCtrl', function () {

  // load the controller's module
  beforeEach(module('geomediaApp'));

  var TimeCountriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimeCountriesCtrl = $controller('TimeCountriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
