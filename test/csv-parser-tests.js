var expect = require('chai').expect;
var parser = require('../index');

describe('when input is empty', function() {
  it('we expect an object with empty header array', function() {
    expect(parser('').Header).to.deep.equal([]);
  });
  it('we expect an object with empty data array', function() {
    expect(parser('').Data).to.deep.equal([]);
  });
});
