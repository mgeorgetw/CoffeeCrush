import { TypeBrewMethod } from "../../types/TypeBrewMethod";
import styles from "./RadioButton.module.css";
export const RadioButton = (
  item: TypeBrewMethod,
  selected: string,
  handleChange: Function
) => {
  return (
    <div className={styles.btnContainer} key={item.method}>
      <input
        className={styles.hiddenInput}
        id={item.method}
        type="radio"
        onChange={() => handleChange(item)}
        checked={item.method === selected}
      />
      <div className={styles.roundToggleButton}>
        <label className={styles.btnLabel} htmlFor={item.method}>
          {item.method}
        </label>
      </div>
    </div>
  );
};
