import { useState, useEffect } from "react";
import { TypeBrewMethod } from "../../types/TypeBrewMethod";
import { Navigation } from "./Navigation";
import { DonutProgressChart } from "./DonutProgressChart";
import { StepsList } from "./StepList";
import { Stopwatch } from "./Stopwatch";
import styles from "./InstructionView.module.css";

export const InstructionView = ({
  methodDetails,
  water,
  isReady,
  setIsReady,
}: {
  methodDetails: TypeBrewMethod;
  water: number;
  isReady: boolean;
  setIsReady: Function;
}) => {
  const [time, setTime] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [untilNextStep, setUntilNextStep] = useState<number>(
    methodDetails.steps[0].duration
  );
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const calculatedSteps = methodDetails.steps.map((step) => {
    return {
      ...step,
      instruction: step.instruction.replace(
        /\{([^]+)\}/,
        ($0: string, $1: string) => Math.round(+$1 * water).toString()
      ),
    };
  });

  const stepsLeft = calculatedSteps.length - currentStep;

  useEffect(() => {
    let interval: number = 0;
    if (isRunning) {
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        if (untilNextStep > 0) setUntilNextStep(untilNextStep - 1);
        if (stepsLeft > 0 && untilNextStep === 1) {
          setCurrentStep((prevOrder) => prevOrder + 1);
          setUntilNextStep(calculatedSteps[currentStep].duration);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, untilNextStep, currentStep, calculatedSteps, stepsLeft]);
  return (
    <div className={`${styles.slider} ${!isReady && styles.close}`}>
      <Navigation
        methodDetails={methodDetails}
        setIsReady={setIsReady}
        setIsRunning={setIsRunning}
        setTime={setTime}
        setCurrentStep={setCurrentStep}
        setUntilNextStep={setUntilNextStep}
      />
      <div className={styles.flexLayout}>
        <div className={styles.upAndLeft}>
          <Stopwatch time={time} />
          <DonutProgressChart
            time={time}
            steps={calculatedSteps}
            currentStep={currentStep}
            stepsLeft={stepsLeft}
            untilNextStep={untilNextStep}
            isRunning={isRunning}
            setIsRunning={setIsRunning}
          />
        </div>
        <div className={styles.bottomAndRight}>
          <StepsList
            isRunning={isRunning}
            steps={calculatedSteps}
            currentStep={currentStep}
          />
        </div>
      </div>
    </div>
  );
};
