import { useState, useEffect } from "react";
import { TypeBrewMethod } from "./data/TypeBrewMethod";
import { PreparationCard } from "./PreparationCard";
import { DoseCard } from "./DoseCard";
import { Stopwatch } from "./elements/Stopwatch";
import { RadioButton } from "./elements/RadioButton";
import { Card } from "./elements/Card";
import brewMethods from "./data/BrewMethods.json";
import "./App.css";

// TODO: Hide instruction card before the user presses the ready button.
// TODO: Sync instruction with stopwatch.
// TODO: Stopwatch visualization: circular progress bar, real-time pouring suggestions.

const InstructionCard = ({
  methodDetails,
  water,
}: {
  methodDetails: TypeBrewMethod;
  beanWeight: number;
  water: number;
}) => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const minutes = ("0" + Math.floor((time / 60000) % 60)).toString().slice(-2);
  const seconds = ("0" + Math.floor((time / 1000) % 60)).toString().slice(-2);
  const milliseconds = ("0" + ((time / 10) % 1000)).toString().slice(-2);

  const steps = methodDetails.steps.map((step) =>
    step.replace(/\{([^}]+)\}/, ($0: string, $1: string) =>
      Math.round(+$1 * water).toString()
    )
  );
  const timedSteps = steps.map((step) => step.split("|"));

  useEffect(() => {
    let interval: number = 0;
    if (isRunning) {
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <Card>
      <Stopwatch
        setTime={setTime}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        minutes={minutes}
        seconds={seconds}
        milliseconds={milliseconds}
      />
      <h2 className="heading">Steps</h2>
      <div className="scroll">
        <ul className="item-lists">
          {timedSteps.map((step, index) => (
            <li className="list-item" key={index}>
              <span className="digits timestamp">{step[0]}</span>
              <span className="instruction">{step[1]}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

function App() {
  const [method, setMethod] = useState("Hario V60");
  const chosenMethodDetails = brewMethods.find((obj) => obj.method === method);
  const [beanWeight, setBeanWeight] = useState(
    chosenMethodDetails!.defaultCoffeeInGram
  );
  const [water, setWater] = useState(chosenMethodDetails!.defaultWaterInMl);
  if (!brewMethods) return <p>Loading</p>;
  const grindSize = chosenMethodDetails?.grindSize;

  return (
    <div className="App">
      <header className="App-header">Coffee Guide</header>

      <Card>
        <div id={"brewing_method_options"}>
          <h2 className={"heading"}>Choose a brew method</h2>
          {brewMethods.map((item, index) => (
            <div className="rounded_button" key={index}>
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
      />
    </div>
  );
}

export default App;
