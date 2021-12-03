import React from "react";
import { Card } from "../elements/Card";
import { beanWaterCalculator } from "../utils/math";

export const DoseCard = ({
  ratio,
  grindSize,
  beanWeight,
  water,
  setBeanWeight,
  setWater,
}: {
  grindSize: string;
  ratio: number;
  beanWeight: number;
  water: number;
  setBeanWeight: Function;
  setWater: Function;
}) => {
  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const coffeeInGram = event.target.value;
    const result = beanWaterCalculator({
      bean: Number(coffeeInGram),
      ratio: ratio,
    });
    setBeanWeight(coffeeInGram);
    setWater(result.finalAmount);
  };
  const handleWaterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const water = event.target.value;
    const result = beanWaterCalculator({
      water: Number(water),
      ratio: ratio,
    });
    setBeanWeight(result.calcBean);
    setWater(water);
  };
  return (
    <Card>
      <div id="dose_options">
        <h2 className="heading">Change dose when needed</h2>
        <div className="button_with_info">Grind Size: {grindSize}</div>
        <div className="button_with_info">
          <label>Ground Coffee: </label>
          <input
            className="number_input"
            type="number"
            name="ground_coffee"
            id="ground_coffee"
            value={Math.round(beanWeight)}
            onChange={handleWeightChange}
          />{" "}
          g
        </div>
        <div className="button_with_info">
          <label>Water: </label>
          <input
            className="number_input"
            type="number"
            name="water"
            id="water"
            value={Math.round(water)}
            onChange={handleWaterChange}
          />{" "}
          ml
        </div>
      </div>
    </Card>
  );
};
