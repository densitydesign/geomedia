'use strict';

describe('Directive: packSingle', function () {

  // load the directive's module
  beforeEach(module('geomediaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pack-single></pack-single>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the packSingle directive');
  }));
});
