import { useState } from "react";
import { GetReadyView } from "./views/GetReadyView";
import { InstructionView } from "./views/InstructionView";
import brewMethods from "./data/BrewMethods.json";
import "./App.css";

function App() {
  const [method, setMethod] = useState("The Ultimate V60");
  const [isReady, setIsReady] = useState<boolean>(false);
  const chosenMethodDetails = brewMethods.find((obj) => obj.method === method);
  const [beanWeight, setBeanWeight] = useState(
    chosenMethodDetails!.defaultCoffeeInGram
  );
  const [water, setWater] = useState(chosenMethodDetails!.defaultWaterInMl);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">Coffee Crush</h1>
      </header>

      <GetReadyView
        method={method}
        setMethod={setMethod}
        isReady={isReady}
        setIsReady={setIsReady}
        chosenMethodDetails={chosenMethodDetails!}
        beanWeight={beanWeight}
        setBeanWeight={setBeanWeight}
        water={water}
        setWater={setWater}
      />

      <InstructionView
        methodDetails={chosenMethodDetails!}
        beanWeight={beanWeight}
        water={water}
        isReady={isReady}
        setIsReady={setIsReady}
      />
    </div>
  );
}

export default App;
