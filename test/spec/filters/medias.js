'use strict';

describe('Filter: medias', function () {

  // load the filter's module
  beforeEach(module('geomediaApp'));

  // initialize a new instance of the filter before each test
  var medias;
  beforeEach(inject(function ($filter) {
    medias = $filter('medias');
  }));

  it('should return the input prefixed with "medias filter:"', function () {
    var text = 'angularjs';
    expect(medias(text)).toBe('medias filter: ' + text);
  });

});
