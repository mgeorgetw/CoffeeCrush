import { TypeBrewMethod } from "../../types/TypeBrewMethod";
import styles from "./RadioButton.module.css";
export const RadioButton = (
  item: TypeBrewMethod,
  selected: string,
  handleChange: Function
) => {
  return (
    <div className={styles.btnContainer} key={item.name}>
      <input
        className={styles.hiddenInput}
        id={item.name}
        type="radio"
        onChange={() => handleChange(item)}
        checked={item.name === selected}
      />
      <div className={styles.roundToggleButton}>
        <label className={styles.btnLabel} htmlFor={item.name}>
          {item.name}
        </label>
      </div>
    </div>
  );
};
