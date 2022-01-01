import { useMemo } from "react";
import { Text } from "@visx/text";
import styles from "./DonutProgress.module.css";
import { roundToInteger } from "../../../utils/math";

export const TextDisplay = ({
  data,
  currentStep,
  isRunning,
  untilNextStep,
}) => {
  const textToShow = useMemo(() => {
    const currentData = data[currentStep - 1];
    if (!isRunning) return "Push & Start";
    if (currentData.type === "pour") {
      return `Pour until ${roundToInteger(currentData.fractionOfWater)}ml`;
    } else if (currentData.type === "end") {
      return `Push & Done`;
    } else {
      return `${currentData.type} ${untilNextStep}sec`;
    }
  }, [data, currentStep, untilNextStep, isRunning]);

  return (
    <Text
      className={styles.countDownTimer}
      textAnchor="middle"
      verticalAnchor="middle"
      width={30}
    >
      {textToShow}
    </Text>
  );
};
