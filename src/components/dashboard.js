import { useState, useEffect } from "react";
import style from "../styles/dashboard.module.css";
import PieChart from "./charts/pieChart";
import TinyLineChart from "../components/charts/lineChart";
import { TbUserCheck, TbMailCheck, TbMapPinCheck } from "react-icons/tb";

export default function Dashboard(props) {
  const shiftContent = true;

  const [date, setDate] = useState({
    hourTime: 0,
    minTime: 0,
    secTime: 0,
    yearTime: 0,
    monTime: 0,
    dayTime: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const timeDate = new Date();
      setDate({
        hourTime: timeDate.getHours().toString().padStart(2, "0"),
        minTime: timeDate.getMinutes().toString().padStart(2, "0"),
        secTime: timeDate.getSeconds().toString().padStart(2, "0"),
        yearTime: timeDate.getFullYear().toString().padStart(2, "0"),
        monTime: (timeDate.getMonth() + 1).toString().padStart(2, "0"),
        dayTime: timeDate.getMonth().toString().padStart(2, "0"),
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className={shiftContent ? `${style["content-container"]} ${style["shift"]}` : `${style["content-container"]}`}>
        <div className={style["dashboard-banner"]}>
          <div className={style["time-box"]}>
            {date.hourTime} : {date.minTime} : {date.secTime}
          </div>
          <div className={style["date-box"]}>
            {date.yearTime} / {date.monTime} / {date.dayTime}
          </div>
        </div>
        <div className={style["dashboard-content"]}>
          <div className={style["chart-conatiner"]}>
            <PieChart></PieChart>
          </div>
          <div className={style["data-conatiner"]}>
            <div className={style["users-container"]}>
              <div className={style["data-box"]}>
                <TbUserCheck className={style["icon"]}></TbUserCheck>
                <p className={style["p"]}>Users :</p>
                <h1 className={style["h1"]}>2500</h1>
              </div>
              <div className={style["chart"]}>
                <TinyLineChart></TinyLineChart>
              </div>
            </div>
            <div className={style["cities-container"]}>
              <div className={style["data-box"]}>
                <TbMapPinCheck className={style["icon"]}></TbMapPinCheck>
                <p className={style["p"]}>Cities :</p>
                <h1 className={style["h1"]}>500</h1>
              </div>
              <div className={style["chart"]}>
                <TinyLineChart></TinyLineChart>
              </div>
            </div>
            <div className={style["messages-container"]}>
              <div className={style["data-box"]}>
                <TbMailCheck className={style["icon"]}></TbMailCheck>
                <p className={style["p"]}>Messages :</p>
                <h1 className={style["h1"]}>7500</h1>
              </div>
              <div className={style["chart"]}>
                <TinyLineChart></TinyLineChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
