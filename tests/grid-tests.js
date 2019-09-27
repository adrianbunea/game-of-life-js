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
    });

    it('should have 10 rows by default', function () {
      let grid = new Grid();
      assert.equal(grid.rows, 10);
    });

    it('should have given amount of columns', function () {
      let grid = new Grid(5, undefined);
      assert.equal(grid.columns, 5);
    });

    it('should have given amount of rows', function () {
      let grid = new Grid(undefined ,5);
      assert.equal(grid.rows, 5);
    }); 
  });
});