import { Steps } from "../../../types/TypeBrewMethod";
import styles from "./StepsList.module.css";
export const StepsList = ({
  steps,
  currentStep,
  isRunning,
}: {
  steps: Array<Steps>;
  isRunning: boolean;
  currentStep: number;
}) => (
  <div className={styles.scrollable}>
    <h4 className={styles.heading}>Steps</h4>
    <ul className={styles.list}>
      {!isRunning ? (
        steps.map((step, index) => (
          <li className={styles.listItem} key={index}>
            <span className={styles.timeGuide}>
              {step.duration} second{step.duration > 1 ? "s" : ""}
            </span>
            <span
              className={`${styles.instruction} ${
                index === currentStep - 1 && styles.activeText
              }
                  }`}
            >
              {step.instruction}
            </span>
          </li>
        ))
      ) : (
        <>
          <li className={styles.listItem}>
            <span className={styles.timeGuide}>Do</span>
            <span className={styles.activeText}>
              {steps[currentStep - 1].instruction}
            </span>
          </li>
          {steps[currentStep] && (
            <li className={styles.listItem}>
              <span className={styles.timeGuide}>Next Up</span>
              <span className={styles.instruction}>
                {steps[currentStep].instruction}
              </span>
            </li>
          )}
        </>
      )}
    </ul>
  </div>
);
