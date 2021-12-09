import { useMemo } from "react";
import { arc, pie } from "d3";
import { DonutChart } from "./DonutChart";
// import { PieLabels } from "./PieLabels";

const width = window.innerWidth < 640 ? window.innerWidth * 0.7 : 640 * 0.7;
const height = width;

const pieRadius = width * 0.5;
const pieOuterMargin = pieRadius * 0.9;
const pieInnerMargin = pieRadius * 0.75;

const pieArc = arc().innerRadius(pieInnerMargin).outerRadius(pieOuterMargin);

const dataValue = (d) => d.duration;

export const DonutProgressContainer = ({
  data,
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
          <text
            className="digits countDownTimer"
            textAnchor="middle"
            dominantBaseline="middle"
            dy="0.07em"
          >
            {untilNextStep}
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
