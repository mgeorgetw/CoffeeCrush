import styles from "./DonutProgress.module.css";

export const DonutChart = ({ pieData, pieArc, pie }) =>
  pie(pieData).map((d) => {
    let fillColor;

    switch (d.data.type) {
      case "pour":
        fillColor = "steelblue";
        break;
      case "wait":
        fillColor = "#3a3a3c";
        break;
      case "swirl":
        fillColor = "darkgoldenrod";
        break;
      case "stir":
        fillColor = "darkgoldenrod";
        break;
      case "close switch":
        fillColor = "midnightblue";
        break;
      case "open switch":
        fillColor = "darkgoldenrod";
        break;
      default:
        fillColor = "darkcyan";
    }

    return (
      <g className={styles.pieChart} key={d.index}>
        <path fill={fillColor} d={pieArc(d)} />
      </g>
    );
  });
