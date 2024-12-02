import React, { useState } from "react";

import { TypeBrewMethod } from "../../types/TypeBrewMethod";
import { Card, CardContainer } from "../../elements/Card";
import { RadioButton } from "../../elements/RadioButton";
import { DoseCard } from "./DoseCard";
import { PreparationCard } from "./PreparationCard";

export const GetReadyView = ({
  methods,
  selectedMethod,
  onSelectMethod,
  methodDetails,
  waterAmount,
  setWater,
}: {
  methods: TypeBrewMethod[];
  selectedMethod: string;
  onSelectMethod: Function;
  methodDetails: TypeBrewMethod;
  waterAmount: number;
  setWater: Function;
}) => {
  const [groundCoffee, setGroundCoffee] = useState(
    methodDetails.defaultCoffeeInGram,
  );
  const handleRadioButtonChange = (item: TypeBrewMethod) => {
    onSelectMethod(item.name);
    setGroundCoffee(item.defaultCoffeeInGram);
    setWater(item.defaultWaterInMl);
  };
  return (
    <CardContainer>
      <Card>
        <h2 className="heading">Choose a brew method</h2>
        <div className="spaced-container">
          {methods.map((item) =>
            RadioButton(item, selectedMethod, handleRadioButtonChange),
          )}
        </div>
      </Card>

      <DoseCard
        methodDetails={methodDetails!}
        groundCoffee={groundCoffee}
        water={waterAmount}
        setGroundCoffee={setGroundCoffee}
        setWater={setWater}
      />

      <PreparationCard
        methodDetails={methodDetails!}
        coffeeNeeded={groundCoffee}
        waterNeeded={waterAmount}
      />
    </CardContainer>
  );
};
