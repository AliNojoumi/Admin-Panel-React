import React, { PureComponent } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

//---------- Random Data Without Usin GET API ----------
const data = [
  {
    name: "Page A",
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    pv: 4300,
    amt: 2100,
  },
];

export default function TinyLineChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={100} height={100} data={data}>
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#202020" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
