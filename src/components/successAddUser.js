import style from "../styles/successAddUser.module.css";
import { TbX, TbCheck } from "react-icons/tb";
import { useStateContext } from "../context/contextProvider";

export default function SuccessAddUser(props) {
  const { successAddUserHandler } = useStateContext();
  return (
    <section className={style["portal-container"]}>
      <div
        className={style["portal-background"]}
        onClick={() => {
          successAddUserHandler(false);
        }}
      >
        <div className={style["success-message-container"]}>
          <div className={style["close-btn-container"]}>
            <TbX
              className={style["close-icon"]}
              onClick={() => {
                successAddUserHandler(false);
              }}
            />
          </div>
          <div className={style["message-container"]}>
            <div className={style["success-message"]}>
              <TbCheck className={style["success-icon"]} />
              <p className={style["success-p"]}>The user was successfully submitted!</p>
            </div>
            <button
              className={style["success-btn"]}
              onClick={() => {
                successAddUserHandler(false);
              }}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
