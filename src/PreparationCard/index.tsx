import { Card } from "../elements/Card";
import { TypeBrewMethod } from "../data/TypeBrewMethod";

export const PreparationCard = ({
  methodDetails,
  coffeeNeeded,
  waterNeeded,
}: {
  methodDetails: TypeBrewMethod;
  coffeeNeeded: number;
  waterNeeded: number;
}) => {
  return (
    <Card>
      <div id="ready_page">
        <h2 className={"heading"}>You will need...</h2>
        <ul>
          <li>
            {methodDetails.grindSize} ground coffee: {Math.round(coffeeNeeded)}{" "}
            g
          </li>
          <li>
            {methodDetails.waterTemperature} Water: {Math.round(waterNeeded)} ml
          </li>
          {methodDetails.tools.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      </div>
      <button type="submit">I'm ready</button>
    </Card>
  );
};
