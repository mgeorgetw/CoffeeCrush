import { useState, useMemo, useLayoutEffect, useRef } from "react";
import { GetReadyView } from "./views/GetReadyView";
import { InstructionView } from "./views/InstructionView";
import brewMethods from "./data/BrewMethods.json";
import "./App.css";
import { gsap } from "gsap";
import { start } from "repl";

function App() {
  const [method, setMethod] = useState("The Ultimate V60");
  const [isReady, setIsReady] = useState<boolean>(false);
  const chosenMethodDetails = useMemo(
    () => brewMethods.find((obj) => obj.name === method),
    [method]
  );
  const [beanWeight, setBeanWeight] = useState(
    chosenMethodDetails!.defaultCoffeeInGram
  );
  const [water, setWater] = useState(chosenMethodDetails!.defaultWaterInMl);

  const animateRef = useRef<HTMLDivElement>(null);
  const selector = gsap.utils.selector(animateRef);
  const timelineRef = useRef<GSAPTimeline>();

  const onEnter = ({ currentTarget }: { currentTarget: HTMLButtonElement }) => {
    gsap.to(currentTarget, { opacity: 1, border: "5px solid goldenrod" });
  };

  const onLeave = ({ currentTarget }: { currentTarget: HTMLButtonElement }) => {
    gsap.to(currentTarget, { opacity: 0.4, border: "none" });
  };

  useLayoutEffect(() => {
    timelineRef.current = gsap.timeline().from(selector(".prime-button"), {
      opacity: 1,
      border: "5px solid goldenrod",
      duration: 2,
      ease: "power2.inOut",
    });
  }, [selector]);

  return (
    <div className="App" ref={animateRef}>
      <h1 className="app-title">Coffee Crush</h1>

      <GetReadyView
        method={method}
        setMethod={setMethod}
        chosenMethodDetails={chosenMethodDetails!}
        beanWeight={beanWeight}
        setBeanWeight={setBeanWeight}
        water={water}
        setWater={setWater}
      />

      <InstructionView
        methodDetails={chosenMethodDetails!}
        water={water}
        isReady={isReady}
        setIsReady={setIsReady}
      />

      {!isReady && (
        <button
          className="prime-button"
          onPointerEnter={onEnter}
          onPointerLeave={onLeave}
          onClick={() => setIsReady(true)}
        >
          Brew
        </button>
      )}
    </div>
  );
}

export default App;
