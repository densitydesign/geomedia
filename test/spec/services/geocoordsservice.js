'use strict';

describe('Service: geocoordsservice', function () {

  // load the service's module
  beforeEach(module('geomediaApp'));

  // instantiate service
  var geocoordsservice;
  beforeEach(inject(function (_geocoordsservice_) {
    geocoordsservice = _geocoordsservice_;
  }));

  it('should do something', function () {
    expect(!!geocoordsservice).toBe(true);
  });

});
