import { useState, useEffect } from "react";

/**
 * Creates a loop which triggers redender every 'interval'.
 *
 * @param {number} [interval] - The interval in miliseconds.
 *
 * @return {number} - A random value.
 */
export const useInterval = (interval) => {
  const [intervalId, setIntervalId] = useState(null);
  const [randomValue, setRandomValue] = useState(null);

  useEffect(() => {
    if (!interval) return;

    const intervalId = setInterval(() => {
      setRandomValue(Math.random);
    }, interval);

    setIntervalId(intervalId);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);

  return randomValue;
};
