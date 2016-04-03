'use strict';

describe('Directive: dorlingSingle', function () {

  // load the directive's module
  beforeEach(module('geomediaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dorling-single></dorling-single>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dorlingSingle directive');
  }));
});
