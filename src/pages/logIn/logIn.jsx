import React, { useEffect, useState, useRef, useReducer } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import LogInBannerImage from "../../image/dashboard-banner-background-image.jpg";
import { TbEye, TbEyeClosed } from "react-icons/tb";
import style from "./logIn.module.css";

const LogIn = () => {
  const { logInInputData, logInInputDataHandler, dispath } = useAuthContext();
  const [inputErrorState, inputErrorStateHandler] = useState(false);
  const [passwordViewState, passwordViewStateHandler] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();

  const [loggingInState, loggingInStateDispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "IS-LOGGING-IN":
          return { ...state, connecting: true };
        case "IS-LOGGED-IN":
          return { ...state, connecting: false };
        default:
          return state;
      }
    },
    { connecting: false }
  );

  useEffect(() => {
    ref.current.focus();
  }, []);

  function LogInInputHandler(event) {
    logInInputDataHandler({ ...logInInputData, [event.target.name]: event.target.value });
  }

  async function logInFormSubmit(event) {
    event.preventDefault();
    if (logInInputData.phone.trim().length === 0 || logInInputData.password.trim().length === 0) {
      inputErrorStateHandler(true);
      setTimeout(() => {
        inputErrorStateHandler(false);
      }, 3000);
      return;
    } else {
      try {
        loggingInStateDispatch({ type: "IS-LOGGING-IN" });
        const response = await fetch("http://localhost:6630/api/v1/login", {
          method: "POST",
          headers: { accept: "*/*", "Content-Type": "application/json" },
          body: JSON.stringify(logInInputData),
        });
        if (response.status === 200) {
          const result = await response.json();
          dispath({ type: "LOG-IN", payload: result.data.accessToken });
          toast.success(`${result.message} login!`, {
            style: { backgroundColor: "#f4f4f4", fontSize: "0.875rem", color: "#202020" },
          });
          loggingInStateDispatch({ type: "IS-LOGGED-IN" });
          navigate("/Admin/Dashboard");
          logInInputDataHandler({ phone: "", password: "" });
        } else {
          toast.error(`Error ${response.status}, ${response.statusText}`);
          loggingInStateDispatch({ type: "IS-LOGGED-IN" });
        }
      } catch (error) {
        console.log(`Oops! Something went wrong. The error was: ${error}`);
      }
    }
  }

  return (
    <section className={style["log-in-container"]}>
      <img src={LogInBannerImage} alt="log_In_Page_Image" className={style["background-image"]} />
      <form className={style["form"]} onSubmit={logInFormSubmit}>
        <h1 className={style["h1"]}>Login</h1>
        <div className={style["input-container"]}>
          <div className={style["input-box"]}>
            <label className={style["label"]}>
              Number :{inputErrorState && <p className={style["error-p"]}>* please enter number!</p>}
            </label>
            <input
              ref={ref}
              type="number"
              name="phone"
              value={logInInputData.phone}
              className={inputErrorState ? style["red-border-input"] : style["input"]}
              onChange={LogInInputHandler}
              onFocus={() => {
                inputErrorStateHandler(false);
              }}
            />
          </div>
          <div className={style["input-box"]}>
            <label className={style["label"]}>
              Password :{inputErrorState && <p className={style["error-p"]}>* please enter password!</p>}
            </label>
            <div className={inputErrorState ? style["red-password-input-div"] : style["password-input-div"]}>
              <input
                type={passwordViewState ? "text" : "password"}
                name="password"
                value={logInInputData.password}
                className={style["password-input"]}
                onChange={LogInInputHandler}
                onFocus={() => {
                  inputErrorStateHandler(false);
                }}
              />
              <span
                className={style["eye-icon"]}
                onClick={() => {
                  passwordViewStateHandler(!passwordViewState);
                }}
              >
                {passwordViewState ? <TbEye /> : <TbEyeClosed />}
              </span>
            </div>
          </div>
        </div>
        <button className={style["button"]}>{!loggingInState.connecting ? "Login!" : "Is Logging In!"}</button>
      </form>
    </section>
  );
};

export default LogIn;
