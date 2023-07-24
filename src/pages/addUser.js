import style from "../styles/addUser.module.css";
import { useState, useRef, useEffect } from "react";
import SuccessAddUser from "../components/successAddUser";
import { useStateContext } from "../context/contextProvider";

export default function AddUser(props) {
  const { successAddUser, successAddUserHandler } = useStateContext();
  const [userData, userDataHandler] = useState({ name: "", sureName: "", message: "", city: "", age: "" });

  const onCahngeHandler = (e) => {
    userDataHandler({ ...userData, [e.target.name]: e.target.value });
  };

  const refHanler = useRef();
  useEffect(() => {
    refHanler.current.focus();
  }, []);

  const disabledBtn = !userData.name || !userData.sureName || !userData.city || !userData.age || !userData.message;

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(userData);
    fetch("http://localhost:6630/api/v1/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((Response) => Response.ok)
      .then((data) => {
        if (data) {
          successAddUserHandler(true);
          userDataHandler({ name: "", sureName: "", message: "", city: "", age: "" });
        } else {
          successAddUserHandler(false);
        }
        setTimeout(() => {
          successAddUserHandler(false);
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className={style["add-user-container"]}>
      {!successAddUser && <SuccessAddUser></SuccessAddUser>}
      <form onSubmit={addUserHandler} className={style["form"]}>
        <div className={style["input-container"]}>
          <label className={style["label"]}>Name :</label>
          <input className={style["input"]} ref={refHanler} name="name" value={userData.name} onChange={onCahngeHandler} />
        </div>
        <div className={style["input-container"]}>
          <label className={style["label"]}>SureName :</label>
          <input className={style["input"]} name="sureName" value={userData.sureName} onChange={onCahngeHandler} />
        </div>
        <div className={style["input-container"]}>
          <label className={style["label"]}>City :</label>
          <input className={style["input"]} name="city" value={userData.city} onChange={onCahngeHandler} />
        </div>
        <div className={style["input-container"]}>
          <label className={style["label"]}>Age :</label>
          <input className={style["input"]} name="age" value={userData.age} onChange={onCahngeHandler} />
        </div>
        <div className={style["input-container"]}>
          <label className={style["label"]}>Message :</label>
          <input className={style["input"]} name="message" value={userData.message} onChange={onCahngeHandler} />
        </div>
        <button className={disabledBtn ? style["disabled-button"] : style["button"]} disabled={disabledBtn}>
          Add User
        </button>
      </form>
    </section>
  );
}
