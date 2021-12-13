import styles from "./Stopwatch.module.css";
export const Stopwatch = ({
  time,
}: // isRunning,
// setIsRunning,
{
  time: number;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const minutes = ("0" + Math.floor((time / 60) % 60)).toString().slice(-2);
  const seconds = ("0" + Math.floor(time % 60)).toString().slice(-2);
  return (
    <div id="stopwatch">
      <div className={`digits ${styles.clock}`}>
        <span>{minutes}:</span>
        <span>{seconds}</span>
      </div>

      {/* <div id="stopwatch_controls"> */}
      {/*   <button */}
      {/*     className={ */}
      {/*       isRunning */}
      {/*         ? `${styles.onOffButton} ${styles.active}` */}
      {/*         : styles.onOffButton */}
      {/*     } */}
      {/*     onClick={ */}
      {/*       isRunning ? () => setIsRunning(false) : () => setIsRunning(true) */}
      {/*     } */}
      {/*   > */}
      {/*     Go */}
      {/*   </button> */}
      {/* </div> */}
    </div>
  );
};
