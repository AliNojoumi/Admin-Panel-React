import React from "react";
import { useEffect, useState, useRef } from "react";
import LogInBannerImage from "../../image/dashboard-banner-background-image.jpg";
import style from "./logIn.module.css";

const LogIn = () => {
  const ref = useRef();
  const [logInInputData, logInInputDataHandler] = useState({ phone: "", password: "" });

  useEffect(() => {
    ref.current.focus();
  }, []);

  function LogInInputHandler(event) {
    logInInputDataHandler({ ...logInInputData, [event.target.name]: event.target.value });
  }

  async function logInFormSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:6630/api/v1/login", {
        method: "POST",
        headers: { accept: "*/*", "Content-Type": "application/json" },
        body: JSON.stringify(logInInputData),
      });
      const result = await response.json();
      console.log(result);
      console.log(result.message);
      console.log(result.data.accessToken);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className={style["log-in-container"]}>
      <img src={LogInBannerImage} alt="log_In_Page_Image" className={style["background-image"]} />
      <form className={style["form"]} onSubmit={logInFormSubmit}>
        <h1 className={style["h1"]}>Login</h1>
        <div className={style["input-container"]}>
          <div className={style["input-box"]}>
            <label className={style["label"]}>Number :</label>
            <input
              ref={ref}
              type="number"
              name="phone"
              value={logInInputData.phone}
              className={style["input"]}
              onChange={LogInInputHandler}
            />
          </div>
          <div className={style["input-box"]}>
            <label className={style["label"]}>Password :</label>
            <input
              type="password"
              name="password"
              value={logInInputData.password}
              className={style["input"]}
              onChange={LogInInputHandler}
            />
          </div>
        </div>
        <button className={style["button"]}>Login!</button>
      </form>
    </section>
  );
};

export default LogIn;
