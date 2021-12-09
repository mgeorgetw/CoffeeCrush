import styles from "./OverviewPie.module.css";
export const DonutChart = ({ pieData, pieArc, colorPie, currentStep }) => {
  return colorPie(pieData).map((d) => {
    let fill;
    if (d.index < currentStep - 1) {
      fill = "darkgoldenrod";
    } else if (d.index === currentStep - 1) {
      fill = "goldenrod";
    } else {
      fill = "#3a3a3c";
    }
    return (
      <g className={styles.pieChart} key={d.index}>
        <path fill={fill} d={pieArc(d)} />
      </g>
    );
  });
};
