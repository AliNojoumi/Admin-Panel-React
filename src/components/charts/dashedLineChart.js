import style from "../../pages/chart/chart.module.css";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// ---------- These are dummy random data, We can use real data from the backend with get api and use them here ----------

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

export default function DashedLineChart() {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="Usres" stroke="#f15824" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="Cities" stroke="#202020" strokeDasharray="3 4 5 2" />
          <Line type="monotone" dataKey="Messages" stroke="#808080" strokeDasharray="3 4 5 2" />
        </LineChart>
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
