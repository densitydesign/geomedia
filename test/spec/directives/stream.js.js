'use strict';

describe('Directive: stream.js', function () {

  // load the directive's module
  beforeEach(module('geomediaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<stream.js></stream.js>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stream.js directive');
  }));
});
