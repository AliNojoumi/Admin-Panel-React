import style from "../../pages/chart/chart.module.css";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

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

export default function MixBarChart() {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Usres" stackId="a" fill="#f15824" />
          <Bar dataKey="Cities" stackId="a" fill="#202020" />
          <Bar dataKey="Messages" fill="#808080" />
        </BarChart>
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
