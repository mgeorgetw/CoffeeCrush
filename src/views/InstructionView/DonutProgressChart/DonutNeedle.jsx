import styles from "./DonutProgress.module.css";
export const DonutNeedle = ({ pieData, pieArc, pie, time }) =>
  pie(pieData).map((d) => {
    let fill;
    if (d.index === time) {
      fill = "goldenrod";
    } else if (d.index < time) {
      fill = "darkgoldenrod";
    } else {
      fill = "none";
    }
    return (
      <g className={styles.pieNeedle} key={d.index}>
        <path fill={fill} d={pieArc(d)} />
      </g>
    );
  });
