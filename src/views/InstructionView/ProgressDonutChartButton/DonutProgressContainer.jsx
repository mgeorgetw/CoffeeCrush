import { useMemo } from "react";
import { arc, pie } from "d3";
import { DonutChart } from "./DonutChart";
import { DonutNeedle } from "./DonutNeedle";
import { TextDisplay } from "./TextDisplay";
import styles from "./DonutProgress.module.css";

const svgDiameter =
  window.innerWidth < window.innerHeight
    ? window.innerWidth * 0.6
    : window.innerHeight * 0.6;
const pieRadius = svgDiameter * 0.5;

const pieOuterMargin = pieRadius * 0.9;
const pieInnerMargin = pieRadius * 0.75;
const pieArc = arc().innerRadius(pieInnerMargin).outerRadius(pieOuterMargin);

const needleSize = 10;
const needleArc = arc()
  .outerRadius(pieInnerMargin)
  .innerRadius(pieInnerMargin - needleSize);

const dataValue = (d) => d.duration;
const needleValue = (d) => d.step;

const ClickableCircle = () => (
  <circle
    className={styles.button}
    cx="0"
    cy="0"
    r={pieInnerMargin - needleSize - 3}
  />
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

  const needleData = [];
  for (let i = 0; i <= totalDuration; i++) {
    needleData.push({ step: 1 });
  }

  const needlePie = useMemo(() => pie().sort(null).value(needleValue), []);
  const dataPie = useMemo(() => pie().sort(null).value(dataValue), []);

  return (
    <svg width={svgDiameter} height={svgDiameter}>
      <g transform={`translate(${pieRadius},${pieRadius})`}>
        <DonutNeedle
          time={time}
          pieData={needleData}
          pie={needlePie}
          pieArc={needleArc}
        />
        <DonutChart pieData={data} pie={dataPie} pieArc={pieArc} />
        <ClickableCircle />
        <TextDisplay
          data={data}
          currentStep={currentStep}
          untilNextStep={untilNextStep}
          isRunning={isRunning}
        />
      </g>
    </svg>
  );
};
