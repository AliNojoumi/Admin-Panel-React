import style from "../../pages/chart/chart.module.css";
import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const min = 0;
const max = 100;

const data = [
  { name: "Users", value: Math.floor(Math.random() * (max - min + 1)) + min, color: "#f15824" },
  { name: "Cities", value: Math.floor(Math.random() * (max - min + 1)) + min, color: "#202020" },
  { name: "Messages", value: Math.floor(Math.random() * (max - min + 1)) + min, color: "#808080" },
  { name: "Ages", value: Math.floor(Math.random() * (max - min + 1)) + min, color: "#00008B" },
];

export default function BigPieChart() {
  return (
    <>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <PieChart>
          <Tooltip contentStyle={{ background: "whitesmoke", borderRadius: "0.5rem" }} />
          <Pie data={data} innerRadius={"80%"} outerRadius={"90%"} paddingAngle={5} dataKey="value">
            {data.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
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
        <div className={style["icon-color-box"]}>
          <div className={`${style["icon-color"]} ${style["ages-color"]}`}></div>
          <p className={style["icon-p"]}>Ages</p>
        </div>
      </div>
    </>
  );
}
