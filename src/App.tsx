import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback,
  PointerEvent,
} from "react";
import { GetReadyView } from "./views/GetReadyView";
import { InstructionView } from "./views/InstructionView";
import { TypeBrewMethod } from "./types/TypeBrewMethod";
import "./App.css";
import { gsap } from "gsap";

const useBrewMethods = (preferredOrder: string[]) => {
  const [methods, setMethods] = useState<TypeBrewMethod[]>([]);

  useEffect(() => {
    const context = require.context("./data/methods", false, /\.json$/);
    const importedMethods = context
      .keys()
      .map((file) => context<TypeBrewMethod>(file));

    const sortedMethods = importedMethods.sort((a, b) => {
      const indexA = preferredOrder.indexOf(a.name);
      const indexB = preferredOrder.indexOf(b.name);

      if (indexA === -1) return 1;
      if (indexB === -1) return -1;

      return indexA - indexB;
    });

    setMethods(sortedMethods);
  }, [preferredOrder]); // Safe if preferredOrder is stable

  return methods;
};

const BrewButton = ({
  isBrewing,
  onStartBrewing,
}: {
  isBrewing: boolean;
  onStartBrewing: () => void;
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const selector = gsap.utils.selector(buttonRef);

  const fadeIn = (e: PointerEvent<HTMLButtonElement>) => {
    gsap.to(e.target, { opacity: 1, border: "5px solid goldenrod" });
  };

  const fadeOut = (e: PointerEvent<HTMLButtonElement>) => {
    gsap.to(e.target, { opacity: 0.4, border: "none" });
  };

  useEffect(() => {
    if (!isBrewing) {
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
    <div ref={buttonRef}>
      <button
        className="prime-button"
        onPointerEnter={fadeIn}
        onPointerLeave={fadeOut}
        onClick={onStartBrewing}
      >
        Brew
      </button>
    </div>
  );
};

const App = () => {
  const preferredOrder = useMemo(
    () => ["The Ultimate V60", "1 Cup V60", "Hario Switch", "Origami"],
    [],
  );
  const methods = useBrewMethods(preferredOrder);

  const [selectedMethod, setSelectedMethod] = useState("The Ultimate V60");
  const [waterAmount, setWaterAmount] = useState(0);
  const [isBrewing, setIsBrewing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedMethodDetails = useMemo(
    () => methods.find((method) => method.name === selectedMethod),
    [methods, selectedMethod],
  );

  useEffect(() => {
    if (selectedMethodDetails) {
      setWaterAmount(selectedMethodDetails.defaultWaterInMl);
    }
  }, [selectedMethodDetails]);

  const scrollToBottomHandler = useCallback(() => {
    if (!containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    if (scrollTop + clientHeight === scrollHeight) {
      gsap.to(".prime-button", {
        opacity: 1,
        border: "5px solid goldenrod",
        duration: 0.5,
        ease: "power2.inout",
      });
    }
  }, []);

  if (!selectedMethodDetails) {
    return <div>Loading methods...</div>;
  }

  return (
    <div className="App" ref={containerRef} onScroll={scrollToBottomHandler}>
      <h1 className="app-title">Coffee Crush</h1>

      <GetReadyView
        methods={methods}
        selectedMethod={selectedMethod}
        onSelectMethod={setSelectedMethod}
        methodDetails={selectedMethodDetails}
        waterAmount={waterAmount}
        setWater={setWaterAmount}
      />

      <InstructionView
        methodDetails={selectedMethodDetails}
        waterAmount={waterAmount}
        isBrewing={isBrewing}
        onSetBrewing={setIsBrewing}
      />

      {!isBrewing && (
        <BrewButton
          isBrewing={isBrewing}
          onStartBrewing={() => setIsBrewing(true)}
        />
      )}
    </div>
  );
};

export default App;
