import { useMemo } from "react";
import styles from "./DonutProgress.module.css";

export const CountDownTimer = ({
  data,
  currentStep,
  isRunning,
  untilNextStep,
  pieRadius,
}) => {
  const displayText = useMemo(() => {
    const currentData = data[currentStep - 1];
    if (currentData.type === "pour") {
      return [currentData.type, `${currentData.volume}ml`];
    } else {
      return [currentData.type, `${untilNextStep}sec`];
    }
  }, [data, currentStep, untilNextStep]);

  return (
    <text
      className={`digits ${styles.countDownTimer}`}
      textAnchor="middle"
      dominantBaseline="middle"
      x={pieRadius}
      y={pieRadius}
    >
      <tspan dy="-0.3em">{isRunning ? displayText[0] : "Push to"}</tspan>
      <tspan x={pieRadius} dy="1em">
        {isRunning ? displayText[1] : "Start"}
      </tspan>
    </text>
  );
};
