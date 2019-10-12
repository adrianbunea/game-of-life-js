let assert = require('assert');
let Cell = require('../classes/cell.js');
let World = require('../classes/world.js');

describe('Neighbours', function () {
    class Neighbours {
      constructor (world) {
        this.cells = [];
        this.world = world;
      }

      willSpawnCell () {
        return this.cells.length === 3;
      }

      spawnCell () {
        return new Cell({ x:0, y:0 });
      }

      nextGeneration () {
        return this.willSpawnCell() ? this.spawnCell() : null;
      }

      count (center) {
        let cellCount = 0;

        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            let cellX = center.x + x;
            let cellY = center.y + y;
            if (this.world.cells.get(JSON.stringify({ x:cellX, y:cellY }))) cellCount++; 
          }
        }
        cellCount--;
        
        return cellCount;
      }
    }

    describe('#nextGeneration()', function () {
      it('spawns a new Cell if there are exactly 3 neighbours', function () {
        let neighbours = new Neighbours();
        let cells = new Array(3).fill(new Cell({ x:0, y:0 }));
        neighbours.cells.push(...cells);

        assert.ok(neighbours.nextGeneration());
      });

      [0, 1, 2, 4, 5, 6, 7, 8].forEach((neighbourCount) => {
        it(`does not spawn a Cell if there are ${neighbourCount} neighbours`, function () {
          let neighbours = new Neighbours();
          let cells = new Array(neighbourCount).fill(new Cell({ x:0, y:0 }));
          neighbours.cells.push(...cells);

          assert.equal(neighbours.nextGeneration(), null);
        });
      });
    });

    describe('"#count()', function () {
      it("finds 3 neighbours around the center", function () {
        let cells = new Map();
        cells.set(JSON.stringify({ x:-1, y: 1 }), new Cell({ x:-1, y: 1 }));
        cells.set(JSON.stringify({ x: 1, y:-1 }), new Cell({ x: 1, y:-1 }));
        cells.set(JSON.stringify({ x: 1, y: 1 }), new Cell({ x: 1, y: 1 }));
        cells.set(JSON.stringify({ x:-1, y:-1 }), new Cell({ x:-1, y:-1 }));

        let world = new World();
        world.cells = cells;

        let neighbours = new Neighbours(world);
        
        assert.equal(neighbours.count({ x:0, y:0 }), 3);
      });
    });
  });