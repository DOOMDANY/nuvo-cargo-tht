import { useState, useEffect } from "react";
import Head from "next/head";

import ConwayGrid from "#components/ConwayGrid";
import { initGrid, randomGrid } from "#util/conwayHelpers";

import styles from "#styles/Home.module.css";

const DEFAULT_COLUMNS = 100;
const DEFAULT_ROWS = 50;

const HomePage = () => {
  const [seedGrid, setSeedGrid] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStartClick = () => {
    setIsPlaying(true);
  };

  const handleStopClick = () => {
    setIsPlaying(false);
  };

  const handleClearClick = () => {
    setSeedGrid(initGrid(DEFAULT_ROWS, DEFAULT_COLUMNS));
  };

  const handleRandomClick = () => {
    setSeedGrid(randomGrid(DEFAULT_ROWS, DEFAULT_COLUMNS));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{"Conway's Game of Life"}</title>
        <meta name="description" content="https://docs.google.com/document/d/1TZR-lqjYCAw1EcdCu_Htv1BBs7c8cWZp4-Q_XaFfyZY" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{"Conway's Game of Life"}</h1>

        <p className={styles.description}>
          <a href="https://docs.google.com/document/d/1TZR-lqjYCAw1EcdCu_Htv1BBs7c8cWZp4-Q_XaFfyZY">
            See THT description
          </a>
        </p>

        <ConwayGrid
          seed={seedGrid}
          rows={DEFAULT_ROWS}
          columns={DEFAULT_COLUMNS}
          isPlaying={isPlaying}
        />

        <div className={styles.buttonsContainer}>
          {!isPlaying && <input type="button" value="START" onClick={handleStartClick} />}
          {isPlaying && <input type="button" value="STOP" onClick={handleStopClick} />}
          <input type="button" value="CLEAR" onClick={handleClearClick} />
          <input type="button" value="RANDOM" onClick={handleRandomClick} />
        </div>
      </main>
    </div>
  )
};

export default HomePage;
