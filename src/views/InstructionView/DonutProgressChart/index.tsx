import { useEffect, useRef } from "react";
import { Steps } from "../../../types/TypeBrewMethod";
import { DonutProgressContainer } from "./DonutProgressContainer";

// Typescript does not seem to support 'import' of audio files.
const bellAudioClip = require("../../../assets/bell.mp3");
const silentAudioClip =
  "data:audio/mpeg;base64,suqzbaaaaaabevrywfgaaaataaady29tbwvudabcawdtb3vuzejhbmsuy29tic8gtgftb25vdghlcxvllm9yzwburu5daaaahqaaa1n3axrjacbqbhvzimkpie5dscbtb2z0d2fyzqbusvqyaaaabgaaaziymzuavfntrqaaaa8aaanmyxzmntcuodmumtawaaaaaaaaaaaaaad/80deaaaaa0gaaaaatefnrtmumtawvvvvvvvvvvvvvuxbtuuzljewmfvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvf/zqsrbaaadsaaaaabvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvf/zqmskaaadsaaaaabvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv";

export const DonutProgressChart = ({
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
    if (stepsLeft > 0 && untilNextStep === 1) {
      // Typescript requires '.default'
      audioRef.current.src = bellAudioClip.default;
      audioRef.current.play();
    }
  }, [stepsLeft, audioRef, untilNextStep]);
  return (
    <div
      id="donutProgressChart"
      onClick={() => {
        isRunning ? setIsRunning(false) : setIsRunning(true);
        // Audio needs to be initiated by user interaction.
        audioRef.current.src = silentAudioClip;
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
