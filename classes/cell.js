class Cell {
  constructor () {
    this.alive = false;
  }

  kill () {
    this.alive = false;
  }

  revive () {
    this.alive = true;
  }
}

module.exports = Cell;