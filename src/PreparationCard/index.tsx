import { Card } from "../elements/Card";
import { TypeBrewMethod } from "../data/TypeBrewMethod";

export const PreparationCard = ({
  methodDetails,
  coffeeNeeded,
  waterNeeded,
  setIsReady,
}: {
  methodDetails: TypeBrewMethod;
  coffeeNeeded: number;
  waterNeeded: number;
  setIsReady: Function;
}) => {
  return (
    <Card>
      <div id="ready_page">
        <h2 className={"heading"}>You will need...</h2>
        <ul className="item-lists">
          <li className="list-item">
            {methodDetails.grindSize} ground coffee: {Math.round(coffeeNeeded)}{" "}
            g
          </li>
          <li className="list-item">
            {methodDetails.waterTemperature} Water: {Math.round(waterNeeded)} ml
          </li>
          {methodDetails.tools.map((t, index) => (
            <li key={index} className="list-item">
              {t}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => setIsReady(true)}>I'm ready</button>
    </Card>
  );
};
