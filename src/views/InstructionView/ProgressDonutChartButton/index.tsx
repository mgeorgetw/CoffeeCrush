import { useEffect, useRef } from "react";
import { Steps } from "../../../types/TypeBrewMethod";
import { DonutProgressContainer } from "./DonutProgressContainer";

export const ProgressDonutChartButton = ({
  time,
  steps,
  currentStep,
  stepsLeft,
  untilNextStep,
  isRunning,
  setIsRunning,
}: {
  time: number;
  steps: Array<Steps>;
  currentStep: number;
  stepsLeft: number;
  untilNextStep: number;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  const buttonClickedAudio = "/CoffeeCrush/assets/start.mp3";
  const bellAudio = "/CoffeeCrush/assets/bell.mp3";

  function playAudio(src: string) {
    const audio = audioRef.current;
    audio.src = src;
    audio.play().catch((err) => console.error("Audio play failed:", err));
  }

  useEffect(() => {
    const isStepsChanging: boolean = stepsLeft > 0 && untilNextStep === 1;
    if (isStepsChanging) {
      playAudio(bellAudio);
    }
  }, [stepsLeft, untilNextStep]);

  return (
    <div
      id="donutProgressChart"
      onClick={() => {
        setIsRunning(!isRunning);
        playAudio(buttonClickedAudio);
      }}
    >
      <DonutProgressContainer
        time={time}
        data={steps}
        isRunning={isRunning}
        currentStep={currentStep}
        untilNextStep={untilNextStep}
      />
    </div>
  );
};
