import brewMethods from "../../data/BrewMethods.json";
import { TypeBrewMethod } from "../../types/TypeBrewMethod";
import { Card, CardContainer } from "../../elements/Card";
import { RadioButton } from "../../elements/RadioButton";
import { DoseCard } from "./DoseCard";
import { PreparationCard } from "./PreparationCard";

export const GetReadyView = ({
  method,
  setMethod,
  chosenMethodDetails,
  beanWeight,
  setBeanWeight,
  water,
  setWater,
}: {
  method: string;
  setMethod: Function;
  chosenMethodDetails: TypeBrewMethod;
  beanWeight: number;
  setBeanWeight: Function;
  water: number;
  setWater: Function;
}) => {
  const handleRadioButtonChange = (item: TypeBrewMethod) => {
    setMethod(item.method);
    setBeanWeight(item.defaultCoffeeInGram);
    setWater(item.defaultWaterInMl);
  };
  return (
    <>
      <CardContainer>
        <Card>
          <h2 className="heading">Choose a brew method</h2>
          <div className="centerd-and-spaced-container">
            {brewMethods.map((item) =>
              RadioButton(item, method, handleRadioButtonChange)
            )}
          </div>
        </Card>
        <DoseCard
          methodDetails={chosenMethodDetails!}
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
      </CardContainer>
    </>
  );
};
