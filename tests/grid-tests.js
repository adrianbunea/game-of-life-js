var assert = require('assert');
var Grid = require('../classes/grid.js');

describe('Grid', function() {
  describe('#constructor()', function() {
    it('should exist', function() {
      let grid = new Grid();
      assert.ok(grid);
    });

    it('should have 10 columns by default', function () {
      let grid = new Grid();
      assert.equal(grid.columns, 10);
    })
  });
});