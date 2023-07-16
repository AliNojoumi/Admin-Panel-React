import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

const min = 0;
const max = 100;

//---------- Random Data Without Usin GET API ----------
const data = [
  {
    name: "Page A",
    Number: Math.floor(Math.random() * (max - min + 1)) + min,
    amt: 2400,
  },
  {
    name: "Page B",
    Number: Math.floor(Math.random() * (max - min + 1)) + min,
    amt: 2210,
  },
  {
    name: "Page C",
    Number: Math.floor(Math.random() * (max - min + 1)) + min,
    amt: 2290,
  },
  {
    name: "Page D",
    Number: Math.floor(Math.random() * (max - min + 1)) + min,
    amt: 2000,
  },
  {
    name: "Page E",
    Number: Math.floor(Math.random() * (max - min + 1)) + min,
    amt: 2181,
  },
  {
    name: "Page F",
    Number: Math.floor(Math.random() * (max - min + 1)) + min,
    amt: 2500,
  },
  {
    name: "Page G",
    Number: Math.floor(Math.random() * (max - min + 1)) + min,
    amt: 2100,
  },
];

export default function TinyLineChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={100} height={100} data={data}>
        <Tooltip />
        <Line type="monotone" dataKey="Number" stroke="#202020" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
