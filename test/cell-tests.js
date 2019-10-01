let assert = require('assert');
let Cell = require('../classes/cell.js');

describe('Cell', function () {
  describe('#constructor()', function () {
    it('is dead by default', function () {
      let cell = new Cell({ x:0, y:0 });
      assert.equal(cell.alive, false);
    });
  });

  describe('#willLive()', function () {
    describe('for alive cell', function () {
      let cell = new Cell({ x:0, y:0 }, true);

      it('is true when there are 2 live neighbours', function () {
        assert.equal(cell.willLive(2), true);
      });

      it('is true when there are 3 live neighbours', function () {
        assert.equal(cell.willLive(3), true);
      });

      [0, 1, 4, 5, 6, 7, 8].forEach((numberOfNeighbours) => {
        it(`is false when there are ${numberOfNeighbours} live neighbours`, function () {
          assert.equal(cell.willLive(numberOfNeighbours), false);
        });
      });
    });

    describe('for dead cell', function () {
      let cell = new Cell({ x:0, y:0 });

      it('is true when there are 3 live neighbours', function () {
        assert.equal(cell.willLive(3), true);
      });

      [0, 1, 2, 4, 5, 6, 7, 8].forEach((numberOfNeighbours) => {
        it(`is false when there are ${numberOfNeighbours} live neighbours`, function () {
          assert.equal(cell.willLive(numberOfNeighbours), false);
        });
      });
    });
  });
});