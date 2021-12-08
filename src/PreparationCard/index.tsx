import { Card } from "../elements/Card";
import { TypeBrewMethod } from "../data/TypeBrewMethod";
import styles from "./PreparationCard.module.css";

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
        <h2 className={"heading"}>Prepare</h2>
        <h4 className="low_key_heading">You will need ...</h4>
        <ul className="item-lists">
          <li className="list-item active-text">
            {methodDetails.grindSize} ground coffee: {Math.round(coffeeNeeded)}{" "}
            g
          </li>
          <li className="list-item active-text">
            {methodDetails.waterTemperature} Water: {Math.round(waterNeeded)} ml
          </li>
          {methodDetails.tools.map((t, index) => (
            <li key={index} className="list-item active-text">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
