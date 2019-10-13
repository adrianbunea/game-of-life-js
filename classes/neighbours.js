let Cell = require('../classes/cell.js');

class Neighbours {
  constructor (world) {
    this.cells = [];
    this.world = world;
  }

  willSpawnCell () {
    return this.cells.length === 3;
  }

  spawnCell () {
    return new Cell();
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

module.exports = Neighbours;