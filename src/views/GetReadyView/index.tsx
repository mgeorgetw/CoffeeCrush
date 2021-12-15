import brewMethods from "../../data/BrewMethods.json";
import { TypeBrewMethod } from "../../types/TypeBrewMethod";
import { Card } from "../../elements/Card";
import { RadioButton } from "../../elements/RadioButton";
import { DoseCard } from "./DoseCard";
import { PreparationCard } from "./PreparationCard";

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
      <div className="flex-card-list">
        <Card>
          <h2 className="heading">Choose a brew method</h2>
          <div className="centerSpacedFlexContainer">
            {brewMethods.map((item, index) =>
              RadioButton(index, item.method, item.method, method, setMethod)
            )}
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
      </div>
      <button className="prime_button" onClick={() => setIsReady(true)}>
        I'm ready
      </button>
    </>
  );
};
