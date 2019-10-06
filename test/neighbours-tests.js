let assert = require('assert');
let Cell = require('../classes/cell.js');

describe('Neighbours', function () {
    class Neighbours {
      constructor () {
        this.cells = [];
      }
      willSpawnCell () {
        return this.cells.length === 3;
      }
    }

    describe('#willSpawnCell()', function () {
      it('spawns a new Cell if there are exactly 3 neighbours', function () {
        let neighbours = new Neighbours();
        let cells = new Array(3).fill(new Cell({ x:0, y:0 }));
        neighbours.cells.push(...cells);
        assert.equal(neighbours.willSpawnCell(), true);
      });

      [0, 1, 2, 4, 5, 6, 7, 8].forEach((neighbourCount) => {
        it(`does not spawn a Cell if there are ${neighbourCount} neighbours`, function () {
          let neighbours = new Neighbours();
          let cells = new Array(neighbourCount).fill(new Cell({ x:0, y:0 }));
          neighbours.cells.push(...cells);
          assert.equal(neighbours.willSpawnCell(), false);
        });
      });
    });
  });