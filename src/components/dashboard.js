import { useState, useEffect } from "react";
import style from "../styles/dashboard.module.css";
import PieChart from "./charts/pieChart";
import SwipeSlide from "../components/UI/swipeSlide";

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
            <div className={style["swiper-container"]}>
              <SwipeSlide></SwipeSlide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
