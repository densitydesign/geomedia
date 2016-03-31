'use strict';

describe('Filter: countries', function () {

  // load the filter's module
  beforeEach(module('geomediaApp'));

  // initialize a new instance of the filter before each test
  var countries;
  beforeEach(inject(function ($filter) {
    countries = $filter('countries');
  }));

  it('should return the input prefixed with "countries filter:"', function () {
    var text = 'angularjs';
    expect(countries(text)).toBe('countries filter: ' + text);
  });

});
