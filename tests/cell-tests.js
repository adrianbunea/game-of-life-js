var assert = require('assert');
var Cell = require('../classes/cell.js');

describe('Cell', function() {
  describe('#constructor()', function() {
    it('should exist', function() {
      let cell = new Cell();
      assert.ok(cell);
    });

    it('should be dead by default', function () {
      let cell = new Cell();
      assert.equal(cell.alive, false)
    });
  });
});