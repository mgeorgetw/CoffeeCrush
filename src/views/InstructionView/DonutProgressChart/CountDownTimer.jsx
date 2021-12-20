import { useMemo } from "react";
import styles from "./DonutProgress.module.css";

export const CountDownTimer = ({
  data,
  currentStep,
  isRunning,
  untilNextStep,
}) => {
  const displayText = useMemo(() => {
    const currentData = data[currentStep - 1];
    if (currentData.type === "pour") {
      return [
        `${currentData.type} to`,
        `${Math.round(currentData.fractionOfWater)}ml`,
      ];
    } else if (currentData.type === "end") {
      return [`Push &`, `Done`];
    } else {
      return [currentData.type, `${untilNextStep}sec`];
    }
  }, [data, currentStep, untilNextStep]);

  return (
    <text
      className={`${styles.countDownTimer}`}
      textAnchor="middle"
      dy="-0.17em"
    >
      <tspan>{isRunning ? displayText[0] : "Push &"}</tspan>
      <tspan x={0} dy="1em">
        {isRunning ? displayText[1] : "Start"}
      </tspan>
    </text>
  );
};
