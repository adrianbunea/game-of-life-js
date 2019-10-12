let assert = require('assert');
let World = require('../classes/world.js');

describe('World', function () {
  describe('#constructor()', function () {
    it('has a map of cells', function () {
      let world = new World();
      assert.ok(world.cells);
    });
  });
});