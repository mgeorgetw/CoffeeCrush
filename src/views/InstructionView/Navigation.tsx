import { TypeBrewMethod } from "../../types/TypeBrewMethod";
import styles from "./Navigation.module.css";
export const Navigation = ({
  methodDetails,
  setIsReady,
  setIsRunning,
  setTime,
  setCurrentStep,
  setUntilNextStep,
}: {
  methodDetails: TypeBrewMethod;
  setIsReady: Function;
  setIsRunning: Function;
  setTime: Function;
  setCurrentStep: Function;
  setUntilNextStep: Function;
}) => {
  const resetAll = () => {
    setIsReady(false);
    setIsRunning(false);
    setTime(0);
    setCurrentStep(1);
    setUntilNextStep(methodDetails.steps[0].duration);
  };
  return (
    <div className={styles.navigation}>
      <h3 className={styles.title}>{methodDetails.method}</h3>
      <button className={styles.leftButton} onClick={resetAll}>
        Close
      </button>
      <a
        className={styles.linkButton}
        href={methodDetails.learn}
        target="_blank"
        rel="noreferrer"
      >
        Learn
      </a>
    </div>
  );
};
