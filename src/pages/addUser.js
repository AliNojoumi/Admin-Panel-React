import style from "../styles/addUser.module.css";
import { useState, useRef, useEffect } from "react";

export default function AddUser(props) {
  const [userData, userDataHandler] = useState({ name: "", sureName: "", message: "", city: "", age: "" });
  const [successMessage, successMessageHandler] = useState(false);
  const [errorMessageShow, errorMessageShowHandler] = useState(false);
  const [errorMessage, errorMessageHandler] = useState("");

  const onCahngeHandler = (e) => {
    userDataHandler({ ...userData, [e.target.name]: e.target.value });
    successMessageHandler(false);
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
      .then((Response) => Response.json())
      .then((data) => {
        successMessageHandler(true);
        userDataHandler({ name: "", sureName: "", message: "", city: "", age: "" });
        setTimeout(() => {
          successMessageHandler(false);
        }, 2000);
      })
      .catch((error) => {
        errorMessageHandler(error);
        errorMessageShowHandler(true);
      });
  };

  return (
    <section className={style["add-user-container"]}>
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
        {successMessage && <p className={style["submition-message"]}>Submition was successful!</p>}
        {errorMessageShow && <p className={style["error-message"]}>Oops! Something is wrong! ${errorMessage}</p>}
      </form>
    </section>
  );
}
