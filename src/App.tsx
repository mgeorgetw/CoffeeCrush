import { useState, useEffect } from "react";
import { TypeBrewMethod } from "./data/TypeBrewMethod";
import { PreparationCard } from "./PreparationCard";
import { DoseCard } from "./DoseCard";
import { Stopwatch } from "./elements/Stopwatch";
import { RadioButton } from "./elements/RadioButton";
import { Card } from "./elements/Card";
import brewMethods from "./data/BrewMethods.json";
import "./App.css";

// TODO: Stopwatch visualization: circular progress bar, real-time pouring suggestions.

const StepsList = ({
  calculatedSteps,
  currentStep,
  isRunning,
}: {
  calculatedSteps: Array<{
    order: number;
    duration: number;
    instruction: string;
  }>;
  isRunning: boolean;
  currentStep: number;
}) => {
  return (
    <>
      <h4 className="low_key_heading">Steps</h4>
      <div className="scroll">
        <ul className="item-lists">
          {!isRunning ? (
            calculatedSteps.map((step, index) => (
              <li className="list-item" key={index}>
                <span className="digits">
                  {step.duration} second{step.duration > 1 ? "s" : ""}
                </span>
                <span
                  className={`instruction ${
                    step.order === currentStep && "active-text"
                  }`}
                >
                  {step.instruction}
                </span>
              </li>
            ))
          ) : (
            <>
              <li className="list-item">
                <span className="digits">Do</span>
                <span className="instruction active-text">
                  {calculatedSteps[currentStep - 1].instruction}
                </span>
              </li>
              <li className="list-item">
                <span className="digits">Next Up</span>
                <span className="instruction">
                  {calculatedSteps[currentStep].instruction}
                </span>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

const InstructionCard = ({
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
    if (isRunning && stepsLeft !== 0) {
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        setUntilNextStep(untilNextStep - 1);
        if (untilNextStep === 1) {
          setCurrentStep((prevOrder) => prevOrder + 1);
          setUntilNextStep(methodDetails.steps[currentStep].duration);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, untilNextStep, currentStep, methodDetails.steps, stepsLeft]);
  return (
    <Card className={`slider ${!isReady && "close"}`}>
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
        setTime={setTime}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        setCurrentStep={setCurrentStep}
      />
      <StepsList
        isRunning={isRunning}
        calculatedSteps={calculatedSteps}
        currentStep={currentStep}
      />
    </Card>
  );
};

function App() {
  const [method, setMethod] = useState("Hario V60");
  const [isReady, setIsReady] = useState<boolean>(false);
  const chosenMethodDetails = brewMethods.find((obj) => obj.method === method);
  const [beanWeight, setBeanWeight] = useState(
    chosenMethodDetails!.defaultCoffeeInGram
  );
  const [water, setWater] = useState(chosenMethodDetails!.defaultWaterInMl);
  const grindSize = chosenMethodDetails?.grindSize;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">Coffee Guide</h1>
      </header>

      <Card>
        <h2 className="heading">Choose a brew method</h2>
        <div className="radio-btn-group">
          {brewMethods.map((item, index) => (
            <div className="input-container" key={index}>
              {RadioButton(item.method, item.method, method, setMethod)}
            </div>
          ))}
        </div>
      </Card>
      <DoseCard
        ratio={chosenMethodDetails!.ratio}
        grindSize={grindSize!}
        beanWeight={beanWeight}
        water={water}
        setBeanWeight={setBeanWeight}
        setWater={setWater}
      />
      <PreparationCard
        methodDetails={chosenMethodDetails!}
        coffeeNeeded={beanWeight}
        waterNeeded={water}
      />
      <InstructionCard
        methodDetails={chosenMethodDetails!}
        beanWeight={beanWeight}
        water={water}
        isReady={isReady}
        setIsReady={setIsReady}
      />
      <button className="prime_button" onClick={() => setIsReady(true)}>
        I'm ready
      </button>
    </div>
  );
}

export default App;
