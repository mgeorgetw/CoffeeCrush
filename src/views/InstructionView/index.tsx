import { useState, useEffect } from "react";
import { TypeBrewMethod } from "../../types/TypeBrewMethod";
import styles from "./InstructionView.module.css";
import { Navigation } from "./Navigation";
import { Stopwatch } from "./Stopwatch";
import { ProgressDonutChartButton } from "./ProgressDonutChartButton";
import { StepsList } from "./StepList";
import { roundToInteger } from "../../utils/math";

export const InstructionView = ({
  methodDetails,
  water,
  isBrewing,
  setIsBrewing,
}: {
  methodDetails: TypeBrewMethod;
  water: number;
  isBrewing: boolean;
  setIsBrewing: Function;
}) => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [untilNextStep, setUntilNextStep] = useState<number>(
    methodDetails.steps[0].duration,
  );
  const [addedWater, setAddedWater] = useState<number>(0);

  const calculatedSteps = methodDetails.steps.map((step) => ({
    ...step,
    fractionOfWater: step.fractionOfWater! * water,
    instruction: step.instruction.replace(
      /\{(\d\.?\d{0,})\}/g,
      ($0: string, $1: string) => roundToInteger(+$1 * water),
    ),
  }));

  const waterAfterCurrentStep =
    calculatedSteps[currentStep - 1].fractionOfWater;

  const stepsLeft = calculatedSteps.length - currentStep;

  function resetAll() {
    setIsBrewing(false);
    setIsRunning(false);
    setTime(0);
    setCurrentStep(1);
    setUntilNextStep(methodDetails.steps[0].duration);
    setAddedWater(0);
  }

  useEffect(() => {
    if (!isRunning) return;

    let interval: number = 0;
    interval = window.setInterval(() => updateChart(), 1000);
    return () => window.clearInterval(interval);

    function updateChart() {
      setTime((prevTime) => prevTime + 1);
      if (untilNextStep > 0) setUntilNextStep(untilNextStep - 1);
      if (stepsLeft > 0 && untilNextStep === 1) {
        setCurrentStep((prevStep) => prevStep + 1);
        setUntilNextStep(calculatedSteps[currentStep].duration);
        waterAfterCurrentStep && setAddedWater(waterAfterCurrentStep);
      }
    }
  }, [
    isRunning,
    untilNextStep,
    currentStep,
    calculatedSteps,
    stepsLeft,
    waterAfterCurrentStep,
  ]);

  useEffect(() => {
    if (methodDetails.steps?.length > 0) {
      setUntilNextStep(methodDetails.steps[0].duration);
      setCurrentStep(1);
    }
  }, [methodDetails]);

  return (
    <div className={`${styles.slider} ${!isBrewing && styles.close}`}>
      <Navigation methodDetails={methodDetails} onClose={resetAll} />

      <div className={styles.flexDirectionSwichContainer}>
        <div className={styles.upAndLeft}>
          <Stopwatch time={time} />

          <ProgressDonutChartButton
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
          <FractionIndicator fraction={addedWater} total={water} unit="ml" />

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

export const FractionIndicator = ({
  fraction,
  total,
  unit,
}: {
  fraction: number;
  total: number;
  unit: string;
}) => (
  <div className={styles.largeDigit}>{`${roundToInteger(
    fraction,
  )}/${roundToInteger(total)}${unit}`}</div>
);
