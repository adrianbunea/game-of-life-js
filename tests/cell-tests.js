let assert = require('assert');

describe('Cell', function () {
  class Cell {
    constructor ({ x, y }, alive = false) {
      this.x = x;
      this.y = y;
      this.alive = alive;
    }
  }

  describe('#constructor()', function () {
    describe('sets x and y correctly', function () {
      [0, 1, 2, 3].forEach((x) => {
        it(`has x set to ${x}`, function () {
          let cell = new Cell({ y:0, x:x });
          assert.equal(cell.x, x);
        });
      });
      
      [0, 1, 2, 3].forEach((y) => {
        it(`has y set to ${y}`, function () {
          let cell = new Cell({ x:0, y:y });
          assert.equal(cell.y, y);
        });
      });
    });

    it('is dead by default', function () {
      let cell = new Cell({ x:0, y:0 });
      assert.equal(cell.alive, false);
    });

    it('is alive if alive parameter is true', function () {
      let cell = new Cell({ x:0, y:0 }, true);
      assert.equal(cell.alive, true);
    });
  });
});