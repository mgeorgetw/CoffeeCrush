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
  const audioRefs = useRef({
    buttonClickedAudio: new Audio(),
    bellAudio: new Audio(),
  });

  const audioSources = {
    buttonClickedAudio: "/CoffeeCrush/assets/start",
    bellAudio: "/CoffeeCrush/assets/bell",
  };

  function playAudio(audioRef: HTMLAudioElement) {
    audioRef.play().catch((err) => console.error("Audio play failed:", err));
  }

  useEffect(() => {
    // Preload audio files
    Object.entries(audioRefs.current).forEach(([key, audioRef]) => {
      const baseSrc = audioSources[key as keyof typeof audioSources];
      audioRef.innerHTML = `
        <source src="${baseSrc}.mp3" type="audio/mpeg">
        <source src="${baseSrc}.ogg" type="audio/ogg">
      `;
      audioRef.preload = "auto";
      audioRef.load();
    });
  }, []);

  useEffect(() => {
    const { bellAudio } = audioRefs.current;
    const isStepsChanging: boolean = stepsLeft > 0 && untilNextStep === 1;

    if (isStepsChanging) {
      playAudio(bellAudio);
    }
  }, [stepsLeft, untilNextStep]);

  return (
    <div
      id="donutProgressChart"
      onClick={() => {
        const { buttonClickedAudio } = audioRefs.current;
        setIsRunning(!isRunning);
        playAudio(buttonClickedAudio);
      }}
    >
      {/* Audio elements are preloaded */}
      {Object.keys(audioSources).map((key) => (
        <audio
          key={key}
          ref={(el) => {
            if (el) audioRefs.current[key as keyof typeof audioRefs.current] = el;
          }}
        ></audio>
      ))}
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

