import { useState, useEffect } from "react";
import { json } from "d3";

const jsonUrl = "https://covid19dashboard.cdc.gov.tw/dash3";

const convertStringToNumber = (d) => {
  Object.keys(d).forEach((key) => {
    if (typeof d[key] !== "number") {
      d[key] = d[key].replaceAll(",", "");
      d[key] = +d[key];
    }
  });
  return d;
};

// Use JSON data
export const useData = () => {
  const [data, setData] = useState(null);
  // if (data) console.log(data);

  useEffect(() => {
    json(jsonUrl).then((d) => {
      d = convertStringToNumber(d[0]);
      d.confirmed = +d["確診"];
      d.recovered = +d["解除隔離"];
      d.deaths = +d["死亡"];
      d.excludedYesterday = +d["昨日排除"];
      d.confirmedYesterday = +d["昨日確診"];
      d.testsYesterday = +d["昨日送驗"];
      d.tests = +d["送驗"];
      d.excluded = +d["排除"];
      setData(d);
    });
  }, []);
  return data;
};
