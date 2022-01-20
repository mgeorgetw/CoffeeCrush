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
  const ratio = methodDetails.ratio;
  const grindSize = methodDetails.grindSize;

  const methodRef = useRef(methodDetails);
  const animateRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<GSAPTimeline>();

  const handleInputChange = useCallback(
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
    const selector = gsap.utils.selector(animateRef);

    function runMethodChangeAnimation() {
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
    }

    methodDetails !== methodRef.current && runMethodChangeAnimation();
    methodRef.current = methodDetails;
  }, [methodDetails, methodRef]);

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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
