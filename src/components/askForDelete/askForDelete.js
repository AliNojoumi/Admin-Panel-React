import style from "./askForDelete.module.css";
import { useStateContext } from "../../context/contextProvider";
import { TbX, TbAlertCircle } from "react-icons/tb";

export default function AskForDelete(props) {
  //---------- Global data from CONTEXT----------
  const { askingForDeletingHandler, deleteItemHandler, userItemId } = useStateContext();

  return (
    <section className={style["portal-container"]}>
      <div className={style["portal-background"]}>
        <div className={style["deleting-message-container"]}>
          <div className={style["close-btn-container"]}>
            <TbX
              className={style["close-icon"]}
              onClick={() => {
                askingForDeletingHandler(false);
              }}
            />
          </div>
          <div className={style["message-container"]}>
            <div className={style["message"]}>
              <TbAlertCircle className={style["warn-icon"]} />
              <p className={style["p"]}>Are you sure you wanna delete this item?</p>
            </div>
            <div className={style["button-container"]}>
              <button
                className={`${style["button"]} ${style["delete-button"]}`}
                onClick={() => {
                  deleteItemHandler(userItemId);
                }}
              >
                Delete
              </button>
              <button
                className={style["button"]}
                onClick={() => {
                  askingForDeletingHandler(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
