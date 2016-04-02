'use strict';

describe('Controller: MediaCountriesCtrl', function () {

  // load the controller's module
  beforeEach(module('geomediaApp'));

  var MediaCountriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MediaCountriesCtrl = $controller('MediaCountriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
