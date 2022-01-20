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

    switch (currentData.type) {
      case "pour":
        return `Pour until ${roundToInteger(currentData.fractionOfWater)}ml`;
      case "end":
        return `Push & Done`;
      default:
        return `${currentData.type} ${untilNextStep}sec`;
    }
  }, [data, currentStep, untilNextStep, isRunning]);

  return (
    <Text
      className={styles.countDownTimer}
      textAnchor="middle"
      verticalAnchor="middle"
      width={50}
    >
      {textToShow}
    </Text>
  );
};
