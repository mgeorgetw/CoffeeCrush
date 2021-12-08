import { RadioButton } from "../../elements/RadioButton";
import { Card } from "../../elements/Card";
import { PreparationCard } from "./PreparationCard";
import { DoseCard } from "./DoseCard";
import brewMethods from "../../data/BrewMethods.json";
import "../../App.css";
import { TypeBrewMethod } from "../../types/TypeBrewMethod";

// TODO: Stopwatch visualization: circular progress bar, real-time pouring suggestions.

export const GetReadyView = ({
  method,
  setMethod,
  setIsReady,
  chosenMethodDetails,
  beanWeight,
  setBeanWeight,
  water,
  setWater,
}: {
  method: string;
  setMethod: Function;
  isReady: boolean;
  setIsReady: Function;
  chosenMethodDetails: TypeBrewMethod;
  beanWeight: number;
  setBeanWeight: Function;
  water: number;
  setWater: Function;
}) => {
  const grindSize = chosenMethodDetails?.grindSize;

  return (
    <>
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
      <button className="prime_button" onClick={() => setIsReady(true)}>
        I'm ready
      </button>
    </>
  );
};
