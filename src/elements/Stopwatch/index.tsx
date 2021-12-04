import { useState, useEffect } from "react";
export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const minutes = ("0" + Math.floor((time / 60000) % 60)).toString().slice(-2);
  const seconds = ("0" + Math.floor((time / 1000) % 60)).toString().slice(-2);
  const milliseconds = ("0" + ((time / 10) % 1000)).toString().slice(-2);

  useEffect(() => {
    let interval: number = 0;
    if (start) {
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);
  return (
    <div id="stopwatch">
      <h1 className="digits">
        <span>{minutes}:</span>
        <span>{seconds}:</span>
        <span>{milliseconds}</span>
      </h1>

      <div id="stopwatch_controls">
        {!start && (
          <button className="control" onClick={() => setStart(true)}>
            Go
          </button>
        )}
        {start && (
          <>
            <button className="control" onClick={() => setStart(false)}>
              Pause
            </button>
            <button
              className="control"
              onClick={() => {
                setTime(0);
                setStart(false);
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
