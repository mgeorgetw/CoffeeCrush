import { useMemo } from "react";
import { arc, pie } from "d3";
import { DonutChart } from "./DonutChart";
import { DonutNeedle } from "./DonutNeedle";
import styles from "./DonutProgress.module.css";

const width = window.innerWidth < 640 ? window.innerWidth * 0.6 : 640 * 0.6;
const height = width;

const pieRadius = width * 0.5;
const pieOuterMargin = pieRadius * 0.9;
const pieInnerMargin = pieRadius * 0.75;

const pieArc = arc().innerRadius(pieInnerMargin).outerRadius(pieOuterMargin);
const needleArc = arc()
  .innerRadius(pieInnerMargin)
  .outerRadius(pieInnerMargin - 5);

const dataValue = (d) => d.duration;
const needleValue = (d) => d.step;

const SvgRoundButton = () => (
  <>
    <defs>
      <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="60%" fy="60%">
        <stop offset="0%" style={{ stopColor: "#3a3a3c", stopOpacity: 1 }} />
        <stop offset="85%" style={{ stopColor: "#3a3a3c", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#48484a", stopOpacity: 1 }} />
      </radialGradient>
    </defs>
    <circle className={styles.button} cx="0" cy="0" r={pieInnerMargin - 10} />
  </>
);

export const DonutProgressContainer = ({
  time,
  data,
  isRunning,
  currentStep,
  untilNextStep,
}) => {
  const totalDuration = useMemo(
    () => data.reduce((pre, cur) => pre + cur.duration, 0),
    [data]
  );

  let needleData = [];
  for (let i = 0; i <= totalDuration; i++) {
    needleData.push({ step: 1 });
  }

  const needlePie = useMemo(() => pie().sort(null).value(needleValue), []);
  const colorPie = useMemo(() => pie().sort(null).value(dataValue), []);

  const displayText = useMemo(() => {
    const currentData = data[currentStep - 1];
    if (currentData.type === "pour") {
      return [currentData.type, `${currentData.volume} ml`];
    } else {
      return [currentData.type, `${untilNextStep} sec`];
    }
  }, [data, currentStep, untilNextStep]);
  return (
    <>
      <svg width={width} height={height}>
        <g transform={`translate(${pieRadius},${height / 2})`}>
          <DonutNeedle
            time={time}
            pieData={needleData}
            colorPie={needlePie}
            pieArc={needleArc}
            dataValue={needleValue}
          />
          <DonutChart
            pieData={data}
            colorPie={colorPie}
            pieArc={pieArc}
            dataValue={dataValue}
            currentStep={currentStep}
          />
          <SvgRoundButton />
        </g>
        <text
          className={`digits ${styles.countDownTimer}`}
          textAnchor="middle"
          dominantBaseline="middle"
          x={pieRadius}
          y={pieRadius + 10}
        >
          <tspan dy="-0.5em">{isRunning ? displayText[0] : "Push to"}</tspan>
          <tspan x={pieRadius} dy="1em">
            {isRunning ? displayText[1] : "Start"}
          </tspan>
        </text>
      </svg>
    </>
  );
};
