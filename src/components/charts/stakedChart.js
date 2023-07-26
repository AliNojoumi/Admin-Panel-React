import style from "../../pages/chart/chart.module.css";
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

//---------- RANDOM data for charts ----------
const data = [
  {
    name: "Monday",
    Usres: Math.floor(Math.random() * 5000),
    Cities: Math.floor(Math.random() * 10000),
    Messages: Math.floor(Math.random() * 10000),
  },
  {
    name: "Tuesday",
    Usres: Math.floor(Math.random() * 5000),
    Cities: Math.floor(Math.random() * 10000),
    Messages: Math.floor(Math.random() * 10000),
  },
  {
    name: "Wednesday",
    Usres: Math.floor(Math.random() * 5000),
    Cities: Math.floor(Math.random() * 10000),
    Messages: Math.floor(Math.random() * 10000),
  },
  {
    name: "Thursday",
    Usres: Math.floor(Math.random() * 5000),
    Cities: Math.floor(Math.random() * 10000),
    Messages: Math.floor(Math.random() * 10000),
  },
  {
    name: "Friday",
    Usres: Math.floor(Math.random() * 5000),
    Cities: Math.floor(Math.random() * 10000),
    Messages: Math.floor(Math.random() * 10000),
  },
  {
    name: "Saturday",
    Usres: Math.floor(Math.random() * 5000),
    Cities: Math.floor(Math.random() * 10000),
    Messages: Math.floor(Math.random() * 10000),
  },
  {
    name: "Sunday",
    Usres: Math.floor(Math.random() * 5000),
    Cities: Math.floor(Math.random() * 10000),
    Messages: Math.floor(Math.random() * 10000),
  },
];

export default function StakedChart() {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip wrapperStyle={{ backgroundColor: "#f4f4f4", borderRadius: 6, border: "1px solid #d5d5d5" }} />
          <Area type="monotone" dataKey="Usres" stackId="1" stroke="#f15824" fill="#f15824" />
          <Area type="monotone" dataKey="Cities" stackId="1" stroke="#202020" fill="#202020" />
          <Area type="monotone" dataKey="Messages" stackId="1" stroke="#808080" fill="#808080" />
        </AreaChart>
      </ResponsiveContainer>
      <div className={style["chart-description-box"]}>
        <div className={style["icon-color-box"]}>
          <div className={style["icon-color"]}></div>
          <p className={style["icon-p"]}>Users</p>
        </div>
        <div className={style["icon-color-box"]}>
          <div className={`${style["icon-color"]} ${style["messages-color"]}`}></div>
          <p className={style["icon-p"]}>Messages</p>
        </div>
        <div className={style["icon-color-box"]}>
          <div className={`${style["icon-color"]} ${style["cities-color"]}`}></div>
          <p className={style["icon-p"]}>Cities</p>
        </div>
      </div>
    </>
  );
}
