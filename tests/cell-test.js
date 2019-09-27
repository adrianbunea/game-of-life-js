var Cell = require('../classes/cell.js');
var assert = require('assert');

describe('Cell', function() {
  describe('#constructor()', function() {
    it('should be dead when created', function() {
      let cell = new Cell();    
      assert.equal(cell.state, false);
    });
  });

  describe('#kill()', function() {
    it ('should be dead after getting killed', function() {
      let cell = new Cell();
      cell.kill();
      assert.equal(cell.state, false);
    });
  });
});
