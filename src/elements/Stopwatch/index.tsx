// import { useState, useEffect } from "react";
import styles from "./Stopwatch.module.css";
export const Stopwatch = ({
  time,
  setTime,
  isRunning,
  setIsRunning,
  setCurrentStep,
}: {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const minutes = ("0" + Math.floor((time / 60) % 60)).toString().slice(-2);
  const seconds = ("0" + Math.floor(time % 60)).toString().slice(-2);
  return (
    <div id="stopwatch">
      <h1 className="digits">
        <span>{minutes}:</span>
        <span>{seconds}</span>
      </h1>

      <div id="stopwatch_controls">
        <button
          className={
            isRunning
              ? `${styles.onOffButton} ${styles.active}`
              : styles.onOffButton
          }
          onClick={
            isRunning ? () => setIsRunning(false) : () => setIsRunning(true)
          }
        >
          Go
        </button>
      </div>
    </div>
  );
};
