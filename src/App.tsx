import { useState, useMemo, useLayoutEffect, useRef, useCallback } from "react";
import { GetReadyView } from "./views/GetReadyView";
import { InstructionView } from "./views/InstructionView";
import brewMethods from "./data/BrewMethods.json";
import "./App.css";
import { gsap } from "gsap";

function App() {
  const [method, setMethod] = useState<string>("The Ultimate V60");
  const [isBrewing, setIsBrewing] = useState<boolean>(false);
  const chosenMethodDetails = useMemo(
    () => brewMethods.find((obj) => obj.name === method),
    [method]
  );
  const [groundCoffee, setGroundCoffee] = useState<number>(
    chosenMethodDetails!.defaultCoffeeInGram
  );
  const [water, setWater] = useState<number>(
    chosenMethodDetails!.defaultWaterInMl
  );

  // Initiate animation elements
  const animateRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<GSAPTimeline>();
  const onEnter = ({ currentTarget }: { currentTarget: HTMLButtonElement }) => {
    gsap.to(currentTarget, { opacity: 1, border: "5px solid goldenrod" });
  };
  const onLeave = ({ currentTarget }: { currentTarget: HTMLButtonElement }) => {
    gsap.to(currentTarget, { opacity: 0.4, border: "none" });
  };

  const onScrollToBottom = useCallback(() => {
    const selector = gsap.utils.selector(animateRef);

    if (animateRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = animateRef.current;
      const reachedBottom: boolean = scrollTop + clientHeight === scrollHeight;
      reachedBottom &&
        gsap.to(selector(".prime-button"), {
          opacity: 1,
          border: "5px solid goldenrod",
          duration: 0.5,
          ease: "power2.inout",
        });
    }
  }, []);

  useLayoutEffect(() => {
    const selector = gsap.utils.selector(animateRef);

    const runButtonFadeAnimation = () =>
      (timelineRef.current = gsap.timeline().from(selector(".prime-button"), {
        delay: 1,
        opacity: 1,
        border: "5px solid goldenrod",
        duration: 2,
        ease: "power2.inout",
      }));

    !isBrewing && runButtonFadeAnimation();
  }, [isBrewing]);

  return (
    <div className="App" ref={animateRef} onScroll={onScrollToBottom}>
      <h1 className="app-title">Coffee Crush</h1>

      <GetReadyView
        method={method}
        setMethod={setMethod}
        chosenMethodDetails={chosenMethodDetails!}
        groundCoffee={groundCoffee}
        setGroundCoffee={setGroundCoffee}
        water={water}
        setWater={setWater}
      />

      <InstructionView
        methodDetails={chosenMethodDetails!}
        water={water}
        isBrewing={isBrewing}
        setIsBrewing={setIsBrewing}
      />

      {!isBrewing && (
        <button
          className="prime-button"
          onPointerEnter={onEnter}
          onPointerLeave={onLeave}
          onClick={() => setIsBrewing(true)}
        >
          Brew
        </button>
      )}
    </div>
  );
}

export default App;
