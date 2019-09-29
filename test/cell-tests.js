let assert = require('assert');

describe('Cell', function () {
  class Cell {
    constructor ({ x, y }, alive = false) {
      this.x = x;
      this.y = y;
      this.alive = alive;
    }
  }

  function willSurvive (numberOfNeighbors) {
    return (numberOfNeighbors === 2 || numberOfNeighbors === 3);
  }

  function willRevive(numberOfNeighbours) {
    return numberOfNeighbours === 3;
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
  });

  describe('dead cell', function () {
    describe('#willRevive()', function () {
      it('is true when there are 3 live neighbours', function () {
        assert.equal(willRevive(3), true);
      });

      [0, 1, 2, 4, 5, 6, 7, 8].forEach((neighbourCount) => {
        it(`it is false when there are ${neighbourCount} live neighbours`, function () {
          assert.equal(willRevive(neighbourCount), false);
        });
      });
    });
  });

  describe('alive cell', function () {
    describe('#willSurvive()', function () {
      it('is true when there are 2 live neighbours', function () {  
        assert.equal(willSurvive(2), true);
      });
  
      it('is true when there are 3 live neighbours', function () {
        assert.equal(willSurvive(3), true);
      });
      
      [0, 1, 4, 5, 6, 7, 8].forEach((neighbourCount) => {
        it(`is false when there are ${neighbourCount} live neighbours`, function () {
          assert.equal(willSurvive(neighbourCount), false);
        });
      });
    });
  });

  describe('#willLive()', function () {
    function willLive(numberOfNeighbors, cell) {
      // function still returns a result if cell is undefined, should add guard clause?
      return (cell.alive ? willSurvive(numberOfNeighbors) : willRevive(numberOfNeighbors));
    }

    describe('for alive cell', function () {
      let cell = new Cell({ x:0, y:0 }, true);

      it('is true when there are 2 live neighbours', function () {
        assert.equal(willLive(2, cell), true);
      });

      it('is true when there are 3 live neighbours', function () {
        assert.equal(willLive(3, cell), true);
      });

      [0, 1, 4, 5, 6, 7, 8].forEach((neighbourCount) => {
        it(`is false when there are ${neighbourCount} live neighbours`, function () {
          assert.equal(willLive(neighbourCount, cell), false);
        });
      });
    });

    describe('for dead cell', function () {
      let cell = new Cell({ x:0, y:0 });

      it('is true when there are 3 live neighbors', function () {
        assert.equal(willLive(3, cell), true);
      });

      [0, 1, 2, 4, 5, 6, 7, 8].forEach((neighbourCount) => {
        it(`is false when there are ${neighbourCount} live neighbours`, function () {
          assert.equal(willLive(neighbourCount, cell), false);
        });
      });
    });
  });
});