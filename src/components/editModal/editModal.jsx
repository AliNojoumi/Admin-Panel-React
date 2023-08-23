import style from "./editModal.module.css";
import React, { useState } from "react";
import { useStateContext } from "../../context/contextProvider";
import { TbX } from "react-icons/tb";

export default function EditModal() {
  //---------- Global data from CONTEXT----------
  const { editModalStateHandler, dataById, dataByIdHandler, updateUserDataById } = useStateContext();
  console.log(dataById);

  const handleInputs = (e) => {
    if (e.target.name === "name") {
      dataByIdHandler({
        id: dataById.id,
        name: e.target.value,
        sureName: dataById.sureName,
        message: dataById.message,
        city: dataById.city,
        age: dataById.age,
        active: dataById.active,
      });
    } else if (e.target.name === "sureName") {
      dataByIdHandler({
        id: dataById.id,
        name: dataById.name,
        sureName: e.target.value,
        message: dataById.message,
        city: dataById.city,
        age: dataById.age,
        active: dataById.active,
      });
    } else if (e.target.name === "city") {
      dataByIdHandler({
        id: dataById.id,
        name: dataById.name,
        sureName: dataById.sureName,
        message: dataById.message,
        city: e.target.value,
        age: dataById.age,
        active: dataById.active,
      });
    } else if (e.target.name === "message") {
      dataByIdHandler({
        id: dataById.id,
        name: dataById.name,
        sureName: dataById.sureName,
        message: e.target.value,
        city: dataById.city,
        age: dataById.age,
        active: dataById.active,
      });
    } else if (e.target.name === "age") {
      dataByIdHandler({
        id: dataById.id,
        name: dataById.name,
        sureName: dataById.sureName,
        message: dataById.message,
        city: dataById.city,
        age: e.target.value,
        active: dataById.active,
      });
    }
  };

  return (
    <section className={style["portal-container"]}>
      <div className={style["portal-background"]}>
        <div className={style["editing-message-container"]}>
          <div className={style["close-btn-container"]}>
            <TbX
              className={style["close-icon"]}
              onClick={() => {
                dataByIdHandler([]);
                editModalStateHandler(false);
              }}
            />
          </div>
          <div className={style["message-container"]}>
            <div>
              <section className={style["edit-user-container"]}>
                <form className={style["form"]} onSubmit={updateUserDataById}>
                  <div className={style["input-container"]}>
                    <label className={style["label"]}>Name :</label>
                    <input className={style["input"]} name="name" value={dataById.name} onChange={handleInputs} />
                  </div>
                  <div className={style["input-container"]}>
                    <label className={style["label"]}>SureName :</label>
                    <input className={style["input"]} name="sureName" value={dataById.sureName} onChange={handleInputs} />
                  </div>
                  <div className={style["input-container"]}>
                    <label className={style["label"]}>City :</label>
                    <input className={style["input"]} name="city" value={dataById.city} onChange={handleInputs} />
                  </div>
                  <div className={style["input-container"]}>
                    <label className={style["label"]}>Age :</label>
                    <input className={style["input"]} name="age" value={dataById.age} onChange={handleInputs} />
                  </div>
                  <div className={style["input-container"]}>
                    <label className={style["label"]}>Message :</label>
                    <input className={style["input"]} name="message" value={dataById.message} onChange={handleInputs} />
                  </div>
                </form>
              </section>
            </div>
            <div className={style["button-container"]}>
              <button className={`${style["button"]} ${style["submit-button"]}`} onClick={updateUserDataById}>
                Submit
              </button>
              <button
                className={style["button"]}
                onClick={() => {
                  dataByIdHandler([]);
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
