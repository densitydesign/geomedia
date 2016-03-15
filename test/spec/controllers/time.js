'use strict';

describe('Controller: TimeCtrl', function () {

  // load the controller's module
  beforeEach(module('geomediaApp'));

  var TimeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimeCtrl = $controller('TimeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TimeCtrl.awesomeThings.length).toBe(3);
  });
});
