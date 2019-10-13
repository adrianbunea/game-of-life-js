let assert = require('assert');

describe("GridMap", function () {
  class BadFormatError extends Error {
    constructor (message) {
      super(message);
      this.message = message;
      this.name = "Key formatting error";
    }
  }

  class GridMap {
    constructor () {
      var hash = function (key) {
        if (Object.keys(key).length !== 2) {
          throw new BadFormatError("key should have only 2 fields!");
        }

        console.log(`x in ${Object.keys(key)} ? `+ ('x' in key));
        if (!('x' in key)) {
          throw new BadFormatError("x field is missing!");
        }

        console.log(`y in ${Object.keys(key)} ? `+ ('y' in key));
        if (!('y' in key)) {
          throw new BadFormatError("y field is missing!");
        }

        let normalizedKey = { x:key.x, y:key.y };
        return JSON.stringify(normalizedKey);
      };

      var map = new Map;
      var _set = map.set;
      var _get = map.get;

      map.set = function (key, value) {
        return _set.call(map, hash(key), value);
      };

      map.get = function (key) {
        return _get.call(map, hash(key));
      };

      return map;
    }
  }

  describe("#set()", function () {
    it("saves { x:0, y:0 } key as {\"x\":0,\"y\":0} in the map", function () {
      let gridMap = new GridMap();
      gridMap.set({ x:0, y:0 }, 'foo');
      assert.ok(gridMap.get({ x:0, y:0 }), 'foo');
    });

    it("saves { y:0, x:0 } key as {\"x\":0,\"y\":0} in the map", function () {
      let gridMap = new GridMap();
      gridMap.set({ y:0, x:0 }, 'foo');
      assert.ok(gridMap.get({ x:0, y:0 }), 'foo');
    });

    it("throws 'BadFormatError' when given a key that is not a x,y coordinate", function () {
      let gridMap = new GridMap();
      let block = () => { 
        gridMap.set({ x:0, y:0, z:0 }, 'foo');
      };

      assert.throws(block, new BadFormatError("key should have only 2 fields!"));
    });

    it("throws 'BadFormatError' when given a key that does not contain x", function () {
      let gridMap = new GridMap();
      let block = () => { 
        gridMap.set({ y:0, z:0 }, 'foo');
      };

      assert.throws(block, new BadFormatError("x field is missing!"));
    });

    it("throws 'BadFormatError' when given a key that does not contain y", function () {
      let gridMap = new GridMap();
      let block = () => { 
        gridMap.set({ x:0, z:0 }, 'foo');
      };

      assert.throws(block, new BadFormatError("y field is missing!"));
    });
  });

  describe("#get()", function () {
    it("finds { x:0, y:0 } key at {\"x\":0,\"y\":0} in the map", function () {
      let gridMap = new GridMap();
      gridMap.set({ y:0, x:0 }, 'foo');
      assert.ok(gridMap.get({ x:0, y:0 }), 'foo');
    });

    it("finds { y:0, x:0 } key at {\"x\":0,\"y\":0} in the map", function () {
      let gridMap = new GridMap();
      gridMap.set({ x:0, y:0 }, 'foo');
      assert.ok(gridMap.get({ y:0, x:0 }), 'foo');
    });

    it("throws 'BadFormatError' when given a key that is not a x,y coordinate", function () {
      let gridMap = new GridMap();
      let block = () => { 
        gridMap.get({ y:0, x:0, z:0 });
      };

      assert.throws(block, new BadFormatError("key should have only 2 fields!"));
    });

    it("throws 'BadFormatError' when given a key that does not contain x", function () {
      let gridMap = new GridMap();
      let block = () => { 
        gridMap.get({ y:0, z:0 });
      };

      assert.throws(block, new BadFormatError("x field is missing!"));
    });

    it("throws 'BadFormatError' when given a key that does not contain y", function () {
      let gridMap = new GridMap();
      let block = () => { 
        gridMap.get({ x:0, z:0 });
      };

      assert.throws(block, new BadFormatError("y field is missing!"));
    });
  });
});