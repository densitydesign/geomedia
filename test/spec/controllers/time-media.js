'use strict';

describe('Controller: TimeMediaCtrl', function () {

  // load the controller's module
  beforeEach(module('geomediaApp'));

  var TimeMediaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimeMediaCtrl = $controller('TimeMediaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TimeMediaCtrl.awesomeThings.length).toBe(3);
  });
});
