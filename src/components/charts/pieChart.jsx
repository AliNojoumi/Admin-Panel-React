import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const min = 0;
const max = 100;

//---------- RANDOM data for charts ----------
const data = [
  { name: "Users", value: Math.floor(Math.random() * (max - min + 1)) + min, color: "#f15824" },
  { name: "Cities", value: Math.floor(Math.random() * (max - min + 1)) + min, color: "#202020" },
  { name: "Messages", value: Math.floor(Math.random() * (max - min + 1)) + min, color: "#808080" },
  { name: "Ages", value: Math.floor(Math.random() * (max - min + 1)) + min, color: "#00008B" },
];

export default function PieeChart() {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <PieChart>
        <Tooltip contentStyle={{ background: "whitesmoke", borderRadius: "0.5rem" }} />
        <Pie data={data} innerRadius={"82%"} outerRadius={"90%"} paddingAngle={2} dataKey="value" cornerRadius={40}>
          {data.map((item) => (
            <Cell key={item.name} fill={item.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
