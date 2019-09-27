var assert = require('assert');
var Cell = require('../classes/cell.js');

describe('Cell', function() {
  describe('#constructor()', function() {
    it('should exist', function() {
      let cell = new Cell();
      assert.ok(cell);
    });
  });
});