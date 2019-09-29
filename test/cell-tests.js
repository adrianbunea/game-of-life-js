let assert = require('assert');
let Cell = require('../classes/cell.js');

describe('Cell', function () {
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

  describe('#willRevive()', function () {
    let cell = new Cell({ x:0, y:0 });

    it('is true when there are 3 live neighbours', function () {
      assert.equal(cell.willRevive(3), true);
    });

    [0, 1, 2, 4, 5, 6, 7, 8].forEach((numberOfNeighbours) => {
      it(`it is false when there are ${numberOfNeighbours} live neighbours`, function () {
        assert.equal(cell.willRevive(numberOfNeighbours), false);
      });
    });
  });

  describe('#willSurvive()', function () {
    let cell = new Cell({ x:0, y:0 });

    it('is true when there are 2 live neighbours', function () {  
      assert.equal(cell.willSurvive(2), true);
    });

    it('is true when there are 3 live neighbours', function () {
      assert.equal(cell.willSurvive(3), true);
    });
    
    [0, 1, 4, 5, 6, 7, 8].forEach((numberOfNeighbours) => {
      it(`is false when there are ${numberOfNeighbours} live neighbours`, function () {
        assert.equal(cell.willSurvive(numberOfNeighbours), false);
      });
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