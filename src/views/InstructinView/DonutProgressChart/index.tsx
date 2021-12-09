import { Steps } from "../../../types/TypeBrewMethod";
import { DonutProgressContainer } from "./DonutProgressContainer";

// const LoadSpinner = () => <pre>loading...</pre>;

export const DonutProgressChart = ({
  steps,
  currentStep,
  untilNextStep,
  isRunning,
  setIsRunning,
}: {
  steps: Array<Steps>;
  currentStep: number;
  untilNextStep: number;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      id="donutProgressChart"
      onClick={() => (isRunning ? setIsRunning(false) : setIsRunning(true))}
    >
      <DonutProgressContainer
        data={steps}
        currentStep={currentStep}
        untilNextStep={untilNextStep}
      />
    </div>
  );
};
