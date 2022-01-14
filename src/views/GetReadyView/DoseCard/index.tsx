import React, { useRef, useLayoutEffect, useCallback } from "react";
import { gsap } from "gsap";
import { TypeBrewMethod } from "../../../types/TypeBrewMethod";
import { Card } from "../../../elements/Card";
import { getBeanWeightAndBrewWaterVolume } from "../../../utils/math";
import { roundToInteger } from "../../../utils/math";
import styles from "./DoseCard.module.css";

export const DoseCard = ({
  methodDetails,
  groundCoffee,
  water,
  setGroundCoffee,
  setWater,
}: {
  methodDetails: TypeBrewMethod;
  groundCoffee: number;
  water: number;
  setGroundCoffee: Function;
  setWater: Function;
}) => {
  const methodRef = useRef(methodDetails);
  const animateRef = useRef<HTMLDivElement>(null);
  const selector = gsap.utils.selector(animateRef);
  const timelineRef = useRef<GSAPTimeline>();

  const ratio = methodDetails.ratio;
  const grindSize = methodDetails.grindSize;

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      if (event.target.id === "ground_coffee") {
        const result = getBeanWeightAndBrewWaterVolume({
          bean: value,
          ratio: ratio,
        });
        setGroundCoffee(value);
        setWater(result.waterVolume);
      } else {
        const result = getBeanWeightAndBrewWaterVolume({
          water: value,
          ratio: ratio,
        });
        setGroundCoffee(result.groundCoffee);
        setWater(value);
      }
    },
    [ratio, setGroundCoffee, setWater]
  );

  useLayoutEffect(() => {
    if (methodDetails !== methodRef.current)
      timelineRef.current = gsap
        .timeline()
        .to(selector(".toTilt"), {
          rotation: 25,
          duration: 0.3,
        })
        .to(selector(".toTilt"), {
          rotation: 0,
          duration: 1,
          ease: "back",
        });
    methodRef.current = methodDetails;
  }, [methodDetails, methodRef, selector]);

  return (
    <Card>
      <div id="dose-section">
        <h2 className="heading">Decide on dose</h2>

        <div ref={animateRef} className="spaced-container">
          <div className={styles.formWrapper}>
            <div className={` ${styles.formInCircle} toTilt`}>{grindSize}</div>
            <label className={styles.formLabel}>Grind Size</label>
          </div>

          <div className={styles.formWrapper}>
            <div className={` ${styles.formInCircle} toTilt`}>
              <input
                className={styles.numberInput}
                type="number"
                name="ground_coffee"
                id="ground_coffee"
                value={roundToInteger(groundCoffee)}
                onChange={handleChange}
              />{" "}
              g
            </div>
            <label className={styles.formLabel}>Ground Coffee</label>
          </div>

          <div className={styles.formWrapper}>
            <div className={` ${styles.formInCircle} toTilt`}>
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
