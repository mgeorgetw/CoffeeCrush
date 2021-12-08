import React from "react";
import { Card } from "../../../elements/Card";
import { beanWaterCalculator } from "../../../utils/math";

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
      <div id="dose-section">
        <h2 className="heading">Decide on dose</h2>
        <div className="centerSpacedFlexContainer">
          <div className="info-btn-group">
            <div className="btn-with-info">
              <div className="btn-with-info">{grindSize}</div>
            </div>
            <label className="info-btn-label">Grind Size</label>
          </div>

          <div className="info-btn-group">
            <div className="btn-with-info">
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
            <label className="info-btn-label">Ground Coffee</label>
          </div>
          <div className="info-btn-group">
            <div className="btn-with-info">
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
            <label className="info-btn-label">Water</label>
          </div>
        </div>
      </div>
    </Card>
  );
};
