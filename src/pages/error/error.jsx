import style from "./error.module.css";
import { useNavigate } from "react-router-dom";

export default function Error(props) {
  const navigator = useNavigate();

  return (
    <section className={style["error-container"]}>
      <h1 className={style["h1"]}>
        4<span className={style["span"]}>0</span>4!
      </h1>
      <div className={style["message-container"]}>
        <h1 className={style["h1-title"]}>Oops! This page was not found!</h1>
        <p className={style["p"]}>
          This page is not available!<br></br> Please return to the previous page by clicking on the button!
        </p>
      </div>
      <button
        className={style["button"]}
        onClick={() => {
          navigator(-1);
        }}
      >
        Go Back
      </button>
    </section>
  );
}
