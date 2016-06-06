'use strict';

describe('Filter: prettyurl', function () {

  // load the filter's module
  beforeEach(module('geomediaApp'));

  // initialize a new instance of the filter before each test
  var prettyurl;
  beforeEach(inject(function ($filter) {
    prettyurl = $filter('prettyurl');
  }));

  it('should return the input prefixed with "prettyurl filter:"', function () {
    var text = 'angularjs';
    expect(prettyurl(text)).toBe('prettyurl filter: ' + text);
  });

});
