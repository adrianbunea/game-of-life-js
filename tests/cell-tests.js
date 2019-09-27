var assert = require('assert');
var Cell = require('../classes/cell.js');

describe('Cell', function () {
  describe('#constructor()', function () {
    it('should be dead by default', function () {
      let cell = new Cell();
      assert.equal(cell.alive, false);
    });
  });

  describe('#kill()', function () {
    it('should be dead after calling kill', function () {
      let cell = new Cell();
      cell.alive = true;
      cell.kill();
      assert.equal(cell.alive, false);
    });
  });

  describe('#revive', function () {
    it('should be alive after calling revive', function () {
      let cell = new Cell();
      cell.revive();
      assert.equal(cell.alive, true);
    });
  });
});
