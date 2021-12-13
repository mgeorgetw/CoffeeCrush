import styles from "./DonutProgress.module.css";
export const DonutChart = ({ pieData, pieArc, colorPie, currentStep }) => {
  return colorPie(pieData).map((d) => {
    const type = d.data.type;
    let fill;
    // if (d.index < currentStep - 1) {
    //   fill = "darkgoldenrod";
    // } else if (d.index === currentStep - 1) {
    //   fill = "goldenrod";
    // } else {
    //   fill = "darkcyan";
    // }
    if (type === "pour") {
      fill = "steelblue";
    } else if (type === "wait") {
      fill = "#3a3a3c";
    } else if (type === "swirl" || type === "stir") {
      fill = "darkgoldenrod";
    } else {
      fill = "darkcyan";
    }
    return (
      <g className={styles.pieChart} key={d.index}>
        <path fill={fill} d={pieArc(d)} />
      </g>
    );
  });
};
