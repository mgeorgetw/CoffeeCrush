import { useState, useEffect } from "react";
import { TypeBrewMethod } from "./data/TypeBrewMethod";
import { PreparationCard } from "./PreparationCard";
import { DoseCard } from "./DoseCard";
import { RadioButton } from "./elements/RadioButton";
import { Card } from "./elements/Card";
import brewMethods from "./data/BrewMethods.json";
import "./App.css";

// import { pourStepsGenerator } from "./utils/pourStepsGenerator";

// const replaceJSONPlaceholders = (message: string, variables: string[]) => {
//   for (let v in variables) {
//     message = message.replace("{" + v + "}", variables[v]);
//   }
//   return message;
// };

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const minutes = ("0" + Math.floor((time / 60000) % 60)).toString().slice(-2);
  const seconds = ("0" + Math.floor((time / 1000) % 60)).toString().slice(-2);
  const milliseconds = ("0" + ((time / 10) % 1000)).toString().slice(-2);

  useEffect(() => {
    let interval: number = 0;
    if (start) {
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);
  return (
    <div id="stopwatch">
      <h1 className="digits">
        <span>{minutes}:</span>
        <span>{seconds}:</span>
        <span>{milliseconds}</span>
      </h1>

      <div>
        {!start && <button onClick={() => setStart(true)}>Go</button>}
        {start && (
          <>
            <button onClick={() => setStart(false)}>Pause</button>
            <button
              onClick={() => {
                setTime(0);
                setStart(false);
              }}
            >
              Reset
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const InstructionCard = ({
  methodDetails,
  beanWeight,
  water,
}: {
  methodDetails: TypeBrewMethod;
  beanWeight: number;
  water: number;
}) => {
  // const { bloomWater, secondPour, finalPour } = pourStepsGenerator(
  //   beanWeight,
  //   water
  // );
  // const placeholders = {
  //   bloomWater: bloomWater,
  //   secondPour: secondPour,
  //   finalPour: finalPour,
  // };
  // TODO: Fill steps with calculated water
  // TODO: Sync instructions with stopwatch
  return (
    <Card>
      <Stopwatch />
      <h2 className="heading">Steps</h2>
      <ul>
        {methodDetails.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
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
  const grindSize = chosenMethodDetails && chosenMethodDetails.grindSize;

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
