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
  groundCoffee,
  setGroundCoffee,
  water,
  setWater,
}: {
  method: string;
  setMethod: Function;
  chosenMethodDetails: TypeBrewMethod;
  groundCoffee: number;
  setGroundCoffee: Function;
  water: number;
  setWater: Function;
}) => {
  const handleRadioButtonChange = (item: TypeBrewMethod) => {
    setMethod(item.name);
    setGroundCoffee(item.defaultCoffeeInGram);
    setWater(item.defaultWaterInMl);
  };
  return (
    <>
      <CardContainer>
        <Card>
          <h2 className="heading">Choose a brew method</h2>
          <div className="spaced-container">
            {brewMethods.map((item) =>
              RadioButton(item, method, handleRadioButtonChange)
            )}
          </div>
        </Card>
        <DoseCard
          methodDetails={chosenMethodDetails!}
          groundCoffee={groundCoffee}
          water={water}
          setGroundCoffee={setGroundCoffee}
          setWater={setWater}
        />
        <PreparationCard
          methodDetails={chosenMethodDetails!}
          coffeeNeeded={groundCoffee}
          waterNeeded={water}
        />
      </CardContainer>
    </>
  );
};
