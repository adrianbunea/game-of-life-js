let assert = require('assert');
let Cell = require('../classes/cell.js');
let World = require('../classes/world.js');
let Neighbours = require('../classes/neighbours.js');

describe('Neighbours', function () {
    describe('#nextGeneration()', function () {
      it('spawns a new Cell if there are exactly 3 neighbours', function () {
        let neighbours = new Neighbours();
        let cells = new Array(3).fill(new Cell());
        neighbours.cells.push(...cells);

        assert.ok(neighbours.nextGeneration());
      });

      [0, 1, 2, 4, 5, 6, 7, 8].forEach((neighbourCount) => {
        it(`does not spawn a Cell if there are ${neighbourCount} neighbours`, function () {
          let neighbours = new Neighbours();
          let cells = new Array(neighbourCount).fill(new Cell());
          neighbours.cells.push(...cells);

          assert.equal(neighbours.nextGeneration(), null);
        });
      });
    });

    describe('"#count()', function () {
      it("finds 3 neighbours around the center", function () {
        let cells = new Map();
        cells.set(JSON.stringify({ x:-1, y: 1 }), new Cell());
        cells.set(JSON.stringify({ x: 1, y:-1 }), new Cell());
        cells.set(JSON.stringify({ x: 1, y: 1 }), new Cell());
        cells.set(JSON.stringify({ x:-1, y:-1 }), new Cell());

        let world = new World();
        world.cells = cells;

        let neighbours = new Neighbours(world);
        
        assert.equal(neighbours.count({ x:0, y:0 }), 3);
      });
    });
  });