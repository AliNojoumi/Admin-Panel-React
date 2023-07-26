import style from "./addUserMessage.module.css";
import { useStateContext } from "../../context/contextProvider";
import { TbX, TbCircleCheckFilled } from "react-icons/tb";

export default function SuccessAddUser(props) {
  //---------- Global data from CONTEXT----------
  const { successAddUserHandler } = useStateContext();

  return (
    <section className={style["portal-container"]}>
      <div className={style["portal-background"]}>
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
            <div className={style["message"]}>
              <TbCircleCheckFilled className={style["success-icon"]} />
              <p className={style["p"]}>The user was successfully submitted!</p>
            </div>
            <button
              className={style["btn"]}
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
