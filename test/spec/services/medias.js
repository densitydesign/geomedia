'use strict';

describe('Service: medias', function () {

  // load the service's module
  beforeEach(module('geomediaApp'));

  // instantiate service
  var medias;
  beforeEach(inject(function (_medias_) {
    medias = _medias_;
  }));

  it('should do something', function () {
    expect(!!medias).toBe(true);
  });

});
