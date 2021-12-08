import styles from "./RadioButton.module.css";
export const RadioButton = (
  key: number,
  item: string,
  label: string,
  selected: string,
  handleChange: Function
) => (
  <div className={styles.btnContainer} key={key}>
    <input
      className={styles.hiddenInput}
      id={item}
      type="radio"
      onChange={() => handleChange(item)}
      checked={item === selected}
    />
    <div className={styles.roundToggleButton}>
      <label className={styles.btnLabel} htmlFor={item}>
        {label}
      </label>
    </div>
  </div>
);
