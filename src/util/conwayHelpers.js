export const initGrid = (rows, columns) => {
  const grid = [];

  for (let i = 0; i < rows; ++i) {
    grid[i] = [];
    for (let j = 0; j < columns; ++j) {
      grid[i][j] = false;
    }
  }

  return grid;
};

export const cloneGrid = (srcGrid) => {
  const destGrid = [];

  for (const srcRow of srcGrid) {
    const destRow = [];
    for (const srcCell of srcRow) {
      destRow.push(srcCell);
    }
    destGrid.push(destRow);
  }

  return destGrid;
};

export const randomGrid = (rows, columns) => {
  const grid = [];

  for (let i = 0; i < rows; ++i) {
    grid[i] = [];
    for (let j = 0; j < columns; ++j) {
      grid[i][j] = Math.random() > 0.50;
    }
  }

  return grid;
};

export const conwayTick = (prevGrid, rows, columns) => {
  const nextGrid = initGrid(rows, columns);

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      let aliveNeighborsCount = 0;

      if (prevGrid[i - 1]?.[j - 1]) ++aliveNeighborsCount;
      if (prevGrid[i - 1]?.[j]) ++aliveNeighborsCount;
      if (prevGrid[i - 1]?.[j + 1]) ++aliveNeighborsCount;
      if (prevGrid[i]?.[j - 1]) ++aliveNeighborsCount;
      if (prevGrid[i]?.[j + 1]) ++aliveNeighborsCount;
      if (prevGrid[i + 1]?.[j - 1]) ++aliveNeighborsCount;
      if (prevGrid[i + 1]?.[j]) ++aliveNeighborsCount;
      if (prevGrid[i + 1]?.[j + 1]) ++aliveNeighborsCount;

      if (prevGrid[i][j] && aliveNeighborsCount === 2) nextGrid[i][j] = true;
      else if (aliveNeighborsCount === 3) nextGrid[i][j] = true;
      else nextGrid[i][j] = false;
    }
  }

  return nextGrid;
};
