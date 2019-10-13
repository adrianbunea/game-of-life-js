class Cell {
  willSurvive (numberOfNeighbours) {
    return (numberOfNeighbours === 2 || numberOfNeighbours === 3);
  }
}

module.exports = Cell;