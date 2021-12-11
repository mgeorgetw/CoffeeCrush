import { useMemo } from "react";
import { arc, pie } from "d3";
import { DonutChart } from "./DonutChart";
import styles from "./DonutProgress.module.css";
// import { PieLabels } from "./PieLabels";

const width = window.innerWidth < 640 ? window.innerWidth * 0.6 : 640 * 0.6;
const height = width;

const pieRadius = width * 0.5;
const pieOuterMargin = pieRadius * 0.9;
const pieInnerMargin = pieRadius * 0.75;

const pieArc = arc().innerRadius(pieInnerMargin).outerRadius(pieOuterMargin);

const dataValue = (d) => d.duration;

export const DonutProgressContainer = ({
  data,
  isRunning,
  currentStep,
  untilNextStep,
}) => {
  const colorPie = useMemo(() => pie().sort(null).value(dataValue), []);
  return (
    <>
      {/* <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMinYMid"> */}
      <svg width={width} height={height}>
        <g transform={`translate(${pieRadius},${height / 2})`}>
          <DonutChart
            pieData={data}
            colorPie={colorPie}
            pieArc={pieArc}
            dataValue={dataValue}
            currentStep={currentStep}
          />
          <defs>
            <radialGradient
              id="grad1"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#3a3a3c", stopOpacity: 1 }}
              />
              <stop
                offset="90%"
                style={{ stopColor: "#3a3a3c", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#48484a", stopOpacity: 1 }}
              />
            </radialGradient>
          </defs>
          <circle
            className={styles.button}
            cx="0"
            cy="0"
            r={pieInnerMargin - 3}
          />
          <text
            className={`digits ${styles.countDownTimer}`}
            textAnchor="middle"
            dominantBaseline="middle"
            dy="0.07em"
          >
            {isRunning ? untilNextStep : "Start"}
          </text>
          {/* <PieLabels */}
          {/*   pieData={pieData} */}
          {/*   colorPie={colorPie} */}
          {/*   colorValue={colorValue} */}
          {/*   pieArc={pieArc} */}
          {/*   dataType={dataType} */}
          {/*   dataValue={dataValue} */}
          {/* /> */}
        </g>
      </svg>
    </>
  );
};
