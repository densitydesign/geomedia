'use strict';

describe('Service: dorlingservice', function () {

  // load the service's module
  beforeEach(module('geomediaApp'));

  // instantiate service
  var dorlingservice;
  beforeEach(inject(function (_dorlingservice_) {
    dorlingservice = _dorlingservice_;
  }));

  it('should do something', function () {
    expect(!!dorlingservice).toBe(true);
  });

});
