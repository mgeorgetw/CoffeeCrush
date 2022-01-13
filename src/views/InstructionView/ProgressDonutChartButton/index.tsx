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
  // Initial audio element.
  const audioRef = useRef<HTMLAudioElement>(new Audio());
  audioRef.current.autoplay = true;

  useEffect(() => {
    // Play alert sound while step changes
    if (stepsLeft > 0 && untilNextStep === 1) {
      // Typescript requires '.default'
      audioRef.current.src = bellAudio.default;
    }
  }, [stepsLeft, audioRef, untilNextStep]);
  return (
    <div
      id="donutProgressChart"
      onClick={() => {
        isRunning ? setIsRunning(false) : setIsRunning(true);
        // Audio needs to be initiated by user interaction.
        audioRef.current.src = buttonClickedAudio.default;
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