import styles from "./DonutProgress.module.css";
export const DonutNeedle = ({ pieData, pieArc, colorPie, time }) => {
  return colorPie(pieData).map((d) => {
    let fill;
    if (d.index === time) {
      fill = "goldenrod";
    } else {
      fill = "none";
    }
    return (
      <g className={styles.pieNeedle} key={d.index}>
        <path fill={fill} d={pieArc(d)} />
      </g>
    );
  });
};
