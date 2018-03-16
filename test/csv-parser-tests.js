var expect = require('chai').expect;
var csvParser = require('../index');

describe('input tests', function() {
  describe('when input is empty', function() {
    var parseResult = csvParser.parse('');
    it('we expect an object with empty header array', function() {
      expect(parseResult.Header).to.deep.equal([]);
    });
    it('we expect an object with empty data array', function() {
      expect(parseResult.Data).to.deep.equal([]);
    });
  });
});

describe('header tests', function() {
  describe('when input is \'wubba,lubba,dub,dub,\'', function() {
    it('the header should contain 5 elements', function() {
      expect(csvParser.parse('wubba,lubba,dub,dub,').Header).to.deep.equal(['wubba', 'lubba', 'dub', 'dub', '']);
    });
  });
  describe('when input is \'wubba,lubba,dub,dub\'', function() {
    it('the header should contain 4 elements', function() {
      expect(csvParser.parse('wubba,lubba,dub,dub').Header).to.deep.equal(['wubba', 'lubba', 'dub', 'dub']);
    });
  });
  describe('when input is \'wubba,lubba\\n,dub,dub,\'', function() {
    it('the header should contain 2 elements', function() {
      expect(csvParser.parse('wubba,lubba\n,dub,dub,').Header).to.deep.equal(['wubba', 'lubba']);
    });
  })
});

describe('data tests', function() {
  describe('when input is \'wubba,lubba,dub,dub,\'', function() {
    it('the data should be an empty array', function() {
      expect(csvParser.parse('wubba,lubba,dub,dub,').Data).to.deep.equal([]);
    });
  });
  describe('when input is \'wubba,lubba,dub,dub,\\n\'', function() {
    it('the data array should have one array with one element in it', function() {
      expect(csvParser.parse('wubba,lubba,dub,dub,\n').Data).to.deep.equal([['']]);
    });
  });
  describe('when input is \'wubba,lubba\\ndub,dub,\'', function() {
    it('the data array should have one array with [\'dub\', \'dub\', \'\']', function() {
      expect(csvParser.parse('wubba,lubba\ndub,dub,').Data).to.deep.equal([['dub', 'dub', '']]);
    });
  });
  describe('when input is \'wubba,lubba\\ndub\\ndub,\'', function() {
    it('the data array should have two arrays. The first array should be: [\'dub\'] and the second: [\'dub\', \'\']', function() {
      expect(csvParser.parse('wubba,lubba\ndub\ndub,').Data).to.deep.equal([['dub'], ['dub', '']]);
    });
  });
});
