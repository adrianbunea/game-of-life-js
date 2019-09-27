var assert = require('assert');

describe('Game of Life', function() {
  describe('World', function() {
    class World{
      constructor(){
        this.cells = {};
      }
    }

    class Cell {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
    }

    it('has a list of cells', function() {
      let world = new World();
      assert.deepEqual(world.cells, {});
    });


  });

  describe('#willRevive', function(){
    function willRevive(numberOfNeighbours) {
      return numberOfNeighbours === 3;
    }

    it('should be true when there are 3 live neighbours', function() {
      assert.ok(willRevive(3));
    });

    it('should be false when there are 2 live neighbours', function() {
      assert.equal(willRevive(2), false);
    });

    it('should be false when there are 4 live neighbours', function() {
      assert.equal(willRevive(4), false);
    });
  });

  describe('#willSurvive()', function() {
    function willSurvive (numberOfNeighbors) {
      return (numberOfNeighbors === 2 || numberOfNeighbors === 3);
    }
    
    it('should be true when number of neighbors is 2', function() {  
      assert.ok(willSurvive(2));
    });

    it('should be true when number of neighbours is 3', function() {
      assert.ok(willSurvive(3))
    });

    it('should be false when number of neighbours is 0', function() {
      assert.equal(willSurvive(0), false);
    });

    it('should be false when number of neighbours is 1', function() {
      assert.equal(willSurvive(1), false);
    });

    it('should be false when number of neighbours is 4', function() {
      assert.equal(willSurvive(4), false);
    });
  });
});
