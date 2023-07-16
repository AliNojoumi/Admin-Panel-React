import style from "../styles/error.module.css";
import { useNavigate } from "react-router-dom";

export default function Error(props) {
  const navigator = useNavigate();

  const navigateHandler = () => {
    navigator("/Dashboard");
  };

  return (
    <section className={style["error-container"]}>
      <h1 className={style["h1"]}>Oops! This page is not available!</h1>
      <div className={style["message-container"]}>
        <p className={style["p"]}>
          This page is not available!<br></br> Please return to the previous page by clicking on the button!
        </p>
        <button className={style["button"]} onClick={navigateHandler}>
          Go Back
        </button>
      </div>
    </section>
  );
}
