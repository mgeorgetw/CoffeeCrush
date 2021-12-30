import { useState, useEffect } from "react";
import { TypeBrewMethod } from "../../types/TypeBrewMethod";
import { Navigation } from "./Navigation";
import { ProgressDonutChartButton } from "./ProgressDonutChartButton";
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
  const [addedWater, setAddedWater] = useState<number>(0);

  const calculatedSteps = methodDetails.steps.map((step) => ({
    ...step,
    fractionOfWater: step.fractionOfWater! * water,
    instruction: step.instruction.replace(
      /\{(\d\.?\d{0,})\}/g,
      ($0: string, $1: string) => Math.round(+$1 * water).toString()
    ),
  }));

  const stepsLeft = calculatedSteps.length - currentStep;

  const resetAll = () => {
    setIsReady(false);
    setIsRunning(false);
    setTime(0);
    setCurrentStep(1);
    setUntilNextStep(methodDetails.steps[0].duration);
    setAddedWater(0);
  };

  const waterForCurrentStep = calculatedSteps[currentStep - 1].fractionOfWater;

  const FractionIndicator = ({
    fraction,
    total,
    unit,
  }: {
    fraction: number;
    total: number;
    unit: string;
  }) => (
    <div className={styles.largeDigit}>{`${fraction}/${total}${unit}`}</div>
  );

  useEffect(() => {
    if (!isRunning) return;

    let interval: number = 0;
    interval = window.setInterval(() => {
      setTime((prevTime) => prevTime + 1);
      if (untilNextStep > 0) setUntilNextStep(untilNextStep - 1);
      if (stepsLeft > 0 && untilNextStep === 1) {
        setCurrentStep((prevStep) => prevStep + 1);
        setUntilNextStep(calculatedSteps[currentStep].duration);
        waterForCurrentStep && setAddedWater(waterForCurrentStep);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [
    isRunning,
    untilNextStep,
    currentStep,
    calculatedSteps,
    stepsLeft,
    waterForCurrentStep,
  ]);
  return (
    <div className={`${styles.slider} ${!isReady && styles.close}`}>
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
