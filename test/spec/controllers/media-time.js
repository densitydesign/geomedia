'use strict';

describe('Controller: MediaTimeCtrl', function () {

  // load the controller's module
  beforeEach(module('geomediaApp'));

  var MediaTimeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MediaTimeCtrl = $controller('MediaTimeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
