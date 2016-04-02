'use strict';

describe('Directive: streamaxes', function () {

  // load the directive's module
  beforeEach(module('geomediaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<streamaxes></streamaxes>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the streamaxes directive');
  }));
});
