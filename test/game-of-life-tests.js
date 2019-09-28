let assert = require('assert');

describe('Game of Life', function () {
  describe('#willRevive()', function () {
    function willRevive(numberOfNeighbours) {
      return numberOfNeighbours === 3;
    }

    it('is true when there are 3 live neighbours', function () {
      assert.equal(willRevive(3), true);
    });

    it('is false when there are 2 live neighbours', function () {
      assert.equal(willRevive(2), false);
    });

    it('is false when there are 4 live neighbours', function () {
      assert.equal(willRevive(4), false);
    });
  });

  describe('#willSurvive()', function () {
    function willSurvive (numberOfNeighbors) {
      return (numberOfNeighbors === 2 || numberOfNeighbors === 3);
    }
    
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
