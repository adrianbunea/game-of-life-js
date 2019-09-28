let assert = require('assert');

describe('Cell', function () {
  class Cell {
    constructor ({ x, y }) {
      this.x = x;
      this.y = y;
    }
  }

  describe('#constructor()', function () {
    describe('sets x and y correctly', function () {
      [0, 1, 2, 3].forEach((x) => {
        it(`has x set to ${x}`, function () {
          let cell = new Cell({ y: 0, x: x });
          assert.equal(cell.x, x);
        });
      });
      
      [0, 1, 2, 3].forEach((y) => {
        it(`has y set to ${y}`, function () {
          let cell = new Cell({ x: 0, y: y });
          assert.equal(cell.y, y);
        });
      });
    });
  });
});