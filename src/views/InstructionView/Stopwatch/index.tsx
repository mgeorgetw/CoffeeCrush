import styles from "./Stopwatch.module.css";
export const Stopwatch = ({ time }: { time: number }) => {
  const minutes = ("0" + Math.floor((time / 60) % 60)).toString().slice(-2);
  const seconds = ("0" + Math.floor(time % 60)).toString().slice(-2);
  return (
    <div id="stopwatch">
      <div className={styles.clock}>
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
