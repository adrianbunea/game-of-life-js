let assert = require('assert');

describe('World', function () {
    class World {
      constructor () {
        this.cells = [];
      }
    }

    describe('#constructor()', function () {
      it('has a list of cells', function () {
        let world = new World();
        assert.ok(world.cells);
      });
    });
  });