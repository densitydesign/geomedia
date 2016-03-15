'use strict';

describe('Service: fileservice', function () {

  // load the service's module
  beforeEach(module('geomediaApp'));

  // instantiate service
  var fileservice;
  beforeEach(inject(function (_fileservice_) {
    fileservice = _fileservice_;
  }));

  it('should do something', function () {
    expect(!!fileservice).toBe(true);
  });

});
