import style from "./editModal.module.css";
import React from "react";
import { useStateContext } from "../../context/contextProvider";
import { TbX } from "react-icons/tb";

export default function EditModal() {
  //----------This is for adding the data from the context and updating them ----------
  const { editModalStateHandler, dataById } = useStateContext();

  return (
    <section className={style["portal-container"]}>
      <div
        className={style["portal-background"]}
        onClick={() => {
          editModalStateHandler(false);
        }}
      >
        <div className={style["editing-message-container"]}>
          <div className={style["close-btn-container"]}>
            <TbX
              className={style["close-icon"]}
              onClick={() => {
                editModalStateHandler(false);
              }}
            />
          </div>
          <div className={style["message-container"]}>
            <div>
              <section className={style["edit-user-container"]}>
                <form className={style["form"]}>
                  <div className={style["input-container"]}>
                    <label className={style["label"]}>Name :</label>
                    <input className={style["input"]} defaultValue={dataById.name} />
                  </div>
                  <div className={style["input-container"]}>
                    <label className={style["label"]}>SureName :</label>
                    <input className={style["input"]} defaultValue={dataById.sureName} />
                  </div>
                  <div className={style["input-container"]}>
                    <label className={style["label"]}>City :</label>
                    <input className={style["input"]} defaultValue={dataById.city} />
                  </div>
                  <div className={style["input-container"]}>
                    <label className={style["label"]}>Age :</label>
                    <input className={style["input"]} defaultValue={dataById.age} />
                  </div>
                  <div className={style["input-container"]}>
                    <label className={style["label"]}>Message :</label>
                    <input className={style["input"]} defaultValue={dataById.message} />
                  </div>
                </form>
              </section>
            </div>
            <div className={style["button-container"]}>
              <button className={`${style["button"]} ${style["submit-button"]}`}>Submit</button>
              <button
                className={style["button"]}
                onClick={() => {
                  editModalStateHandler(false);
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
