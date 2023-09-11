import React from "react";
import { useEffect, useState, useRef } from "react";
import LogInBannerImage from "../../image/dashboard-banner-background-image.jpg";
import style from "./logIn.module.css";

const LogIn = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <section className={style["log-in-container"]}>
      <img src={LogInBannerImage} alt="log_In_Page_Image" className={style["background-image"]} />
      <form className={style["form"]}>
        <h1 className={style["h1"]}>Login</h1>
        <div className={style["input-container"]}>
          <div className={style["input-box"]}>
            <label className={style["label"]}>Number :</label>
            <input ref={ref} type="number" name="number" className={style["input"]} />
          </div>
          <div className={style["input-box"]}>
            <label className={style["label"]}>Password :</label>
            <input type="password" name="password" className={style["input"]} />
          </div>
        </div>
        <button className={style["button"]}>Login!</button>
      </form>
    </section>
  );
};

export default LogIn;
