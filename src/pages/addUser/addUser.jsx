import style from "./addUser.module.css";
import { useRef, useEffect } from "react";
import SuccessAddUser from "../../components/fail&successAddUser/successAddUser";
import FailAddUser from "../../components/fail&successAddUser/failAddUser";
import { useStateContext } from "../../context/contextProvider";

export default function AddUser(props) {
  //---------- Global data from CONTEXT----------
  const { successAddUser, successAddUserHandler, failAddUser, failAddUserHandler, userData, userDataHandler } = useStateContext();

  const onCahngeHandler = (e) => {
    userDataHandler({ ...userData, [e.target.name]: e.target.value });
  };

  const refHanler = useRef();
  useEffect(() => {
    refHanler.current.focus();
  }, []);

  //---------- Disable add user button if one input is empty ----------
  const disabledBtn = !userData.name || !userData.sureName || !userData.city || !userData.age || !userData.message;

  //---------- POST API for posting new users ----------
  const addUserHandler = (e) => {
    e.preventDefault();
    // console.log(userData);
    fetch("http://localhost:6630/api/v1/user", {
      method: "POST",
      headers: { "Content-Type": "application/json", accept: "*/*" },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.status === 400) {
          successAddUserHandler(false);
          failAddUserHandler(true);
        } else if (response.status === 200) {
          successAddUserHandler(true);
          failAddUserHandler(false);
          userDataHandler({ name: "", sureName: "", message: "", city: "", age: "" });
        }
        setTimeout(() => {
          successAddUserHandler(false);
          failAddUserHandler(false);
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className={style["add-user-container"]}>
      {successAddUser && <SuccessAddUser />}
      {failAddUser && <FailAddUser />}
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
