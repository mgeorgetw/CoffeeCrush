export const RadioButton = (
  item: string,
  label: string,
  selected: string,
  handleChange: Function
) => (
  <div className="radio-btn">
    <input
      id={item}
      type="radio"
      onChange={() => handleChange(item)}
      checked={item === selected}
    />
    <label htmlFor={item}>{label}</label>
  </div>
);
