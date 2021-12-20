import { useState, useMemo } from "react";
import { GetReadyView } from "./views/GetReadyView";
import { InstructionView } from "./views/InstructionView";
import brewMethods from "./data/BrewMethods.json";
import "./App.css";

function App() {
  const [method, setMethod] = useState("The Ultimate V60");
  const [isReady, setIsReady] = useState<boolean>(false);
  const chosenMethodDetails = useMemo(
    () => brewMethods.find((obj) => obj.name === method),
    [method]
  );
  const [beanWeight, setBeanWeight] = useState(
    chosenMethodDetails!.defaultCoffeeInGram
  );
  const [water, setWater] = useState(chosenMethodDetails!.defaultWaterInMl);

  return (
    <div className="App">
      <h1 className="app-title">Coffee Crush</h1>

      <GetReadyView
        method={method}
        setMethod={setMethod}
        chosenMethodDetails={chosenMethodDetails!}
        beanWeight={beanWeight}
        setBeanWeight={setBeanWeight}
        water={water}
        setWater={setWater}
      />

      <InstructionView
        methodDetails={chosenMethodDetails!}
        water={water}
        isReady={isReady}
        setIsReady={setIsReady}
      />

      <button className="prime-button" onClick={() => setIsReady(true)}>
        I'm ready
      </button>
    </div>
  );
}

export default App;
