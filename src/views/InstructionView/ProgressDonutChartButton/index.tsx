import { useEffect, useRef } from "react";
import { Steps } from "../../../types/TypeBrewMethod";
import { DonutProgressContainer } from "./DonutProgressContainer";

// Typescript does not seem to support 'import' of audio files.
const bellAudio = require("../../../assets/bell.mp3");
const buttonClickedAudio = require("../../../assets/start.mp3");

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
  audioRef.current.autoplay = true;

  function playButtonClickAudio() {
    audioRef.current.src = buttonClickedAudio.default;
  }

  function playBellAudio() {
    // Typescript requires '.default'
    audioRef.current.src = bellAudio.default;
  }

  useEffect(() => {
    const isStepsChanging: boolean = stepsLeft > 0 && untilNextStep === 1;
    isStepsChanging && playBellAudio();
  }, [stepsLeft, untilNextStep]);

  return (
    <div
      id="donutProgressChart"
      onClick={() => {
        isRunning ? setIsRunning(false) : setIsRunning(true);
        /* On iOS, Audio needs to be initiated by user interaction.
         * While initiated, we can change audio source and will autoplay. */
        playButtonClickAudio();
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
