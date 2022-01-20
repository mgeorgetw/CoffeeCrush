import { Card } from "../../../elements/Card";
import { TypeBrewMethod } from "../../../types/TypeBrewMethod";
import { roundToInteger } from "../../../utils/math";
import styles from "./PreparationCard.module.css";

export const PreparationCard = ({
  methodDetails,
  coffeeNeeded,
  waterNeeded,
}: {
  methodDetails: TypeBrewMethod;
  coffeeNeeded: number;
  waterNeeded: number;
}) => (
  <Card>
    <h2 className="heading">Prepare</h2>
    <h4 className={styles.subtleHeading}>You will need ...</h4>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <a href={methodDetails.learn}>Knowledge on the method.</a>
      </li>

      <li className={styles.listItem}>
        {methodDetails.grindSize} ground coffee: {roundToInteger(coffeeNeeded)}{" "}
        g.
      </li>

      <li className={styles.listItem}>
        {methodDetails.waterTemperature} Water: {roundToInteger(waterNeeded)}{" "}
        ml.
      </li>

      {methodDetails.tools.map((t, index) => (
        <li key={index} className={styles.listItem}>
          {t}
        </li>
      ))}
    </ul>
  </Card>
);
