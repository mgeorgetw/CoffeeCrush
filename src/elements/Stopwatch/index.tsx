// import { useState, useEffect } from "react";
export const Stopwatch = ({
  setTime,
  isRunning,
  setIsRunning,
  minutes,
  seconds,
  milliseconds,
}: {
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  minutes: string;
  seconds: string;
  milliseconds: string;
}) => {
  return (
    <div id="stopwatch">
      <h1 className="digits">
        <span>{minutes}:</span>
        <span>{seconds}:</span>
        <span>{milliseconds}</span>
      </h1>

      <div id="stopwatch_controls">
        {!isRunning && (
          <button className="control" onClick={() => setIsRunning(true)}>
            Go
          </button>
        )}
        {isRunning && (
          <>
            <button className="control" onClick={() => setIsRunning(false)}>
              Pause
            </button>
            <button
              className="control"
              onClick={() => {
                setTime(0);
                setIsRunning(false);
              }}
            >
              Reset
            </button>
          </>
        )}
      </div>
    </div>
  );
};
