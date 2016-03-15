'use strict';

describe('Controller: MediaCtrl', function () {

  // load the controller's module
  beforeEach(module('geomediaApp'));

  var MediaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MediaCtrl = $controller('MediaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MediaCtrl.awesomeThings.length).toBe(3);
  });
});
