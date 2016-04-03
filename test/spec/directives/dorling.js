'use strict';

describe('Directive: dorling', function () {

  // load the directive's module
  beforeEach(module('geomediaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dorling></dorling>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dorling directive');
  }));
});
