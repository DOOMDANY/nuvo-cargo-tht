import { useState, useEffect } from "react";

import { useInterval } from "#hooks/useInterval";
import { initGrid, conwayTick, cloneGrid } from "#util/conwayHelpers";

import styles from "#styles/Home.module.css";

const TICK_TIME = 100;

const ConwayGrid = ({
  seed,
  rows,
  columns,
  isPlaying,
}) => {
  const randomValue = useInterval(isPlaying ? TICK_TIME : null);

  const [grid, setGrid] = useState(seed || initGrid(rows, columns));

  const handleCellClick = (rowIndex, columnIndex) => () => {
    const newGrid = cloneGrid(grid);
    newGrid[rowIndex][columnIndex] = !newGrid[rowIndex][columnIndex];
    setGrid(newGrid)
  };

  useEffect(() => {
    if (!seed) return;
    setGrid(seed);
  }, [seed, columns, rows]);

  useEffect(() => {
    setGrid((grid) => conwayTick(grid, rows, columns));
  }, [columns, rows, randomValue]);

  return (
    <table>
      <tbody>
        {grid.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((isAlive, columnIndex) => (
              <td
                key={columnIndex}
                className={`${styles.conwayCell} ${isAlive ? styles.aliveCell : ""}`}
                onClick={handleCellClick(rowIndex, columnIndex)}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConwayGrid;
