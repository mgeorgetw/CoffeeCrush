import React from "react";
import { TypeBrewMethod } from "../../../types/TypeBrewMethod";
import { Card } from "../../../elements/Card";
import { beanWaterCalculator } from "../../../utils/math";
import { roundToInteger } from "../../../utils/math";
import styles from "./DoseCard.module.css";

export const DoseCard = ({
  methodDetails,
  beanWeight,
  water,
  setBeanWeight,
  setWater,
}: {
  methodDetails: TypeBrewMethod;
  beanWeight: number;
  water: number;
  setBeanWeight: Function;
  setWater: Function;
}) => {
  const ratio = methodDetails.ratio;
  const grindSize = methodDetails.grindSize;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.id === "ground_coffee") {
      const result = beanWaterCalculator({ bean: Number(value), ratio: ratio });
      setBeanWeight(value);
      setWater(result.waterVolume);
    } else {
      const result = beanWaterCalculator({
        water: Number(value),
        ratio: ratio,
      });
      setBeanWeight(result.beanWeight);
      setWater(value);
    }
  };

  return (
    <Card>
      <div id="dose-section">
        <h2 className="heading">Decide on dose</h2>

        <div className="spaced-container">
          <div className={styles.formWrapper}>
            <div className={styles.formInCircle}>{grindSize}</div>
            <label className={styles.formLabel}>Grind Size</label>
          </div>

          <div className={styles.formWrapper}>
            <div className={styles.formInCircle}>
              <input
                className={styles.numberInput}
                type="number"
                name="ground_coffee"
                id="ground_coffee"
                value={roundToInteger(beanWeight)}
                onChange={handleChange}
              />{" "}
              g
            </div>
            <label className={styles.formLabel}>Ground Coffee</label>
          </div>

          <div className={styles.formWrapper}>
            <div className={styles.formInCircle}>
              <input
                className={styles.numberInput}
                type="number"
                name="water"
                id="water"
                value={roundToInteger(water)}
                onChange={handleChange}
              />{" "}
              ml
            </div>
            <label className={styles.formLabel}>Water</label>
          </div>
        </div>
      </div>
    </Card>
  );
};
