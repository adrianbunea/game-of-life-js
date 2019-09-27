var assert = require('assert');
var God = require('../classes/god.js');

describe('God', function() {
  describe('#constructor()', function() {
    it('should exist', function() {
      let god = new God();
      assert.ok(god);
    });

    it('should contain currentGeneration', function () {
      let god = new God();
      assert.ok(god.currentGeneration);
    })
  });
});