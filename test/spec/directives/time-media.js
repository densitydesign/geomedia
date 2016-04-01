'use strict';

describe('Directive: timeMedia', function () {

  // load the directive's module
  beforeEach(module('geomediaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<time-media></time-media>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the timeMedia directive');
  }));
});
