let assert = require('assert');
let Cell = require('../classes/cell.js');

describe('Cell', function () {
  let cell = new Cell();

  describe('#willSurvive()', function () {
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
});