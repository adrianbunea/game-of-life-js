class Cell {
  constructor ({ x, y }, alive = false) {
    this.x = x;
    this.y = y;
    this.alive = alive;
  }

  willLive (numberOfNeighbours) {
    return (this.alive ? this.willSurvive(numberOfNeighbours) : this.willRevive(numberOfNeighbours));
  }

  willSurvive (numberOfNeighbours) {
    return (numberOfNeighbours === 2 || numberOfNeighbours === 3);
  }

  willRevive (numberOfNeighbours) {
    return numberOfNeighbours === 3;
  }
}

module.exports = Cell;