import {
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback,
  PointerEvent,
} from "react";
import { GetReadyView } from "./views/GetReadyView";
import { InstructionView } from "./views/InstructionView";
import brewMethods from "./data/BrewMethods.json";
import "./App.css";
import { gsap } from "gsap";

function App() {
  const [method, setMethod] = useState("The Ultimate V60");
  const chosenMethodDetails = useMemo(
    () => brewMethods.find((obj) => obj.name === method),
    [method]
  );
  const [groundCoffee, setGroundCoffee] = useState(
    chosenMethodDetails!.defaultCoffeeInGram
  );
  const [water, setWater] = useState(chosenMethodDetails!.defaultWaterInMl);
  const [isBrewing, setIsBrewing] = useState(false);

  const animateRef = useRef<HTMLDivElement>(null!);
  const selector = gsap.utils.selector(animateRef);

  const onScrollToBottom = useCallback(() => {
    if (!animateRef.current) throw Error("animateRef is not assigned");
    reachedAppBottom() && runButtonFadeInAnimation();

    function reachedAppBottom() {
      const { scrollTop, scrollHeight, clientHeight } = animateRef.current;
      return scrollTop + clientHeight === scrollHeight;
    }

    function runButtonFadeInAnimation() {
      gsap.to(selector(".prime-button"), {
        opacity: 1,
        border: "5px solid goldenrod",
        duration: 0.5,
        ease: "power2.inout",
      });
    }
  }, [selector]);

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
        <BrewButton isBrewing={isBrewing} setIsBrewing={setIsBrewing} />
      )}
    </div>
  );
}

const BrewButton = ({
  isBrewing,
  setIsBrewing,
}: {
  isBrewing: boolean;
  setIsBrewing: Function;
}) => {
  const animatedButtonRef = useRef<HTMLDivElement>(null);
  const selector = gsap.utils.selector(animatedButtonRef);

  const animationOnEnter = (e: PointerEvent<HTMLButtonElement>) => {
    gsap.to(e.target, { opacity: 1, border: "5px solid goldenrod" });
  };
  const animationOnLeave = (e: PointerEvent<HTMLButtonElement>) => {
    gsap.to(e.target, { opacity: 0.4, border: "none" });
  };

  useEffect(() => {
    !isBrewing && runButtonFadeOutAnimation();

    function runButtonFadeOutAnimation() {
      gsap.from(selector(".prime-button"), {
        delay: 1,
        opacity: 1,
        border: "5px solid goldenrod",
        duration: 2,
        ease: "power2.inout",
      });
    }
  }, [isBrewing, selector]);

  return (
    <div ref={animatedButtonRef}>
      <button
        className="prime-button"
        onPointerEnter={animationOnEnter}
        onPointerLeave={animationOnLeave}
        onClick={() => setIsBrewing(true)}
      >
        Brew
      </button>
    </div>
  );
};

export default App;
