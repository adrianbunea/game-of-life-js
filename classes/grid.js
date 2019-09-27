var Cell = require('../classes/cell.js');

class Grid {
  constructor (columns = 10, rows = 10) {
    this.columns = columns;
    this.rows = rows;
    this.cells = Array(columns).fill(Array(rows).fill(new Cell()));
  }
}

module.exports = Grid;