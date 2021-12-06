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
  // const [time, setTime] = useState(0);
  // const [isRunning, setIsRunning] = useState(false);
  // const minutes = ("0" + Math.floor((time / 60000) % 60)).toString().slice(-2);
  // const seconds = ("0" + Math.floor((time / 1000) % 60)).toString().slice(-2);
  // const milliseconds = ("0" + ((time / 10) % 1000)).toString().slice(-2);

  // useEffect(() => {
  //   let interval: number = 0;
  //   if (isRunning) {
  //     interval = window.setInterval(() => {
  //       setTime((prevTime) => prevTime + 10);
  //     }, 10);
  //   } else {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [isRunning]);
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
