var assert = require('assert');
var Grid = require('../classes/grid.js');
var Cell = require('../classes/cell.js');

describe('Grid', function () {
  describe('#constructor()', function () {
    it('should have 10 columns by default', function () {
      let grid = new Grid();
      assert.equal(grid.columns, 10);
    });

    it('should have 10 rows by default', function () {
      let grid = new Grid();
      assert.equal(grid.rows, 10);
    });

    it('should have columns equal to given parameter', function () {
      let grid = new Grid(5);
      assert.equal(grid.columns, 5);
    });

    it('should have rows equal to given parameter', function () {
      let grid = new Grid(undefined, 5);
      assert.equal(grid.rows, 5);
    });

    it('should contain only dead cells by default', function () {
      let grid = new Grid();
      let expectedCells = Array(10).fill(Array(10).fill(new Cell()));
      assert.equal(JSON.stringify(grid.cells), JSON.stringify(expectedCells));
    });
  });
});
