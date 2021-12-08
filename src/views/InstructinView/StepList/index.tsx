export const StepsList = ({
  calculatedSteps,
  currentStep,
  isRunning,
  untilNextStep,
}: {
  calculatedSteps: Array<{
    order: number;
    duration: number;
    instruction: string;
  }>;
  isRunning: boolean;
  currentStep: number;
  untilNextStep: number;
}) => {
  return (
    <>
      <h4 className="low_key_heading">Steps</h4>
      <div className="scroll">
        <ul className="item-lists">
          {!isRunning ? (
            calculatedSteps.map((step, index) => (
              <li className="list-item" key={index}>
                <span className="digits">
                  {step.duration} second{step.duration > 1 ? "s" : ""}
                </span>
                <span
                  className={`instruction ${
                    step.order === currentStep && "active-text"
                  }`}
                >
                  {step.instruction}
                </span>
              </li>
            ))
          ) : (
            <>
              <li className="list-item">
                <span className="digits">
                  {untilNextStep} seconds remaining
                </span>
                <span className="instruction active-text">
                  {calculatedSteps[currentStep - 1].instruction}
                </span>
              </li>
              {calculatedSteps[currentStep] && (
                <li className="list-item">
                  <span className="digits">Next Up</span>
                  <span className="instruction">
                    {calculatedSteps[currentStep].instruction}
                  </span>
                </li>
              )}
            </>
          )}
        </ul>
      </div>
    </>
  );
};
