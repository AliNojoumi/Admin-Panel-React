import style from "./addUserMessage.module.css";
import { useStateContext } from "../../context/contextProvider";
import { TbX, TbCircleXFilled } from "react-icons/tb";

export default function FailAddUser(props) {
  //----------This is for adding the data from the context and updating them ----------
  const { failAddUserHandler } = useStateContext();

  return (
    <section className={style["portal-container"]}>
      <div className={style["portal-background"]}>
        <div className={style["success-message-container"]}>
          <div className={style["close-fail-btn-container"]}>
            <TbX
              className={style["close-icon"]}
              onClick={() => {
                failAddUserHandler(false);
              }}
            />
          </div>
          <div className={style["message-container"]}>
            <div className={style["message"]}>
              <TbCircleXFilled className={style["fail-icon"]} />
              <p className={style["p"]}>Oops! The name is repetitive.</p>
            </div>
            <button
              className={style["btn"]}
              onClick={() => {
                failAddUserHandler(false);
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
