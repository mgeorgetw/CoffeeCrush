import { useState, useEffect } from "react";
import { TypeBrewMethod } from "../../types/TypeBrewMethod";
import { DonutProgressChart } from "./DonutProgressChart";
import { StepsList } from "./StepList";
import { Stopwatch } from "./Stopwatch";

// TODO: Stopwatch visualization: circular progress bar, real-time pouring suggestions.

export const InstructionView = ({
  methodDetails,
  water,
  isReady,
  setIsReady,
}: {
  methodDetails: TypeBrewMethod;
  beanWeight: number;
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
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, untilNextStep, currentStep, calculatedSteps, stepsLeft]);
  return (
    <div className={`slider ${!isReady && "close"}`}>
      <div className="topnav">
        <h3 className="nav_heading absolute_center">{methodDetails.method}</h3>
        <button
          className="nav-btn"
          onClick={() => {
            setIsReady(false);
            setIsRunning(false);
            setTime(0);
            setCurrentStep(1);
            setUntilNextStep(methodDetails.steps[0].duration);
          }}
        >
          Close
        </button>
      </div>
      <Stopwatch
        time={time}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
      />
      <DonutProgressChart
        steps={calculatedSteps}
        currentStep={currentStep}
        untilNextStep={untilNextStep}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
      />
      <StepsList
        isRunning={isRunning}
        steps={calculatedSteps}
        currentStep={currentStep}
      />
    </div>
  );
};
