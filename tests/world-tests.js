let assert = require('assert');

describe('World', function () {
    class World {
      constructor () {
        this.cells = [];
      }
    }

    class Cell {
      constructor (x, y) {
        this.x = x;
        this.y = y;
      }
    }

    describe('#constructor()', function () {
      it('has a list of cells', function () {
        let world = new World();
        assert.ok(world.cells);
      });
    });
  });