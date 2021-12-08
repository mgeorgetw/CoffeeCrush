export const RadioButton = (
  item: string,
  label: string,
  selected: string,
  handleChange: Function
) => (
  <>
    <input
      className="radio-btn"
      id={item}
      type="radio"
      onChange={() => handleChange(item)}
      checked={item === selected}
    />
    <div className="radio-tile">
      {/* <div className="icon walk-icon"> */}
      {/*   <svg */}
      {/*     fill="#000000" */}
      {/*     height="24" */}
      {/*     viewBox="0 0 24 24" */}
      {/*     width="24" */}
      {/*     xmlns="http://www.w3.org/2000/svg" */}
      {/*   > */}
      {/*     <path d="M0 0h24v24H0z" fill="none" /> */}
      {/*     <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" /> */}
      {/*   </svg> */}
      {/* </div> */}
      <label className="radio-btn-label" htmlFor={item}>
        {label}
      </label>
    </div>
  </>
);
