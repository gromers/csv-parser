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

describe('when providing single line of input', function() {
  it('we expect the header to be filled', function() {
    expect(parser('wubba,lubba,dub,dub,').Header).to.deep.equal(['wubba', 'lubba', 'dub', 'dub', '']);
    expect(parser('wubba,lubba,dub,dub').Header).to.deep.equal(['wubba', 'lubba', 'dub', 'dub']);
  });
  it('we expect the data to be an empty array', function() {
    expect(parser('wubba,lubba,dub,dub,').Data).to.deep.equal([]);
  });
});
