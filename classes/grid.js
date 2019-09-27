let Cell = require('./cell.js');

class Grid {
  constructor (columns = 10, rows = 10) {
    this.columns = columns;
    this.rows = rows;
    this.cells = new Array(rows).fill(new Array(columns).fill(new Cell()));
  }
}

module.exports = Grid;