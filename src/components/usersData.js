import { useEffect, useState } from "react";
import { TbLoader, TbEdit, TbArchive, TbAlertCircle } from "react-icons/tb";
import style from "../styles/usersData.module.css";

export default function UsersData(props) {
  const [fetchedData, fetchedDataHandler] = useState([]);
  const [loadingData, loadingDataHandler] = useState(false);

  useEffect(() => {
    loadingDataHandler(true);
    try {
      fetch("http://localhost:6630/api/v1/user", {
        method: "GET",
        headers: { "Content-Type": "application/json", accept: "*/*", page: 1, pageSize: 10 },
      })
        .then((response) => response.json())
        .then((result) => result.data)
        .then((data) => data.items)
        .then((finalData) => {
          fetchedDataHandler(finalData);
          loadingDataHandler(false);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const deleteItemHandler = (itemId) => {
    try {
      fetch(`http://localhost:6630/api/v1/user/${itemId}`, { method: "DELETE", headers: { accept: "*/*" } })
        .then((response) => response.ok)
        .then((result) => {
          if (result) {
            fetchedDataHandler((prevItems) => prevItems.filter((item) => item.id !== itemId));
          } else {
            throw new Error("Something went wrong while deleting the item");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loadingData ? (
        <p className={style["loading-p"]}>
          Loading Data <TbLoader className={style["loading-icon"]} />
        </p>
      ) : (
        <div className={style["ul-container"]}>
          {fetchedData.length !== 0 ? (
            <ul className={style["ul"]}>
              {fetchedData.map((item) => {
                return (
                  <li key={item.id} className={style["item-li"]}>
                    <div className={style["item-container"]}>
                      <p className={style["item-p"]}>
                        Name : <span className={style["span"]}>{item.name}</span>
                      </p>
                      <p className={style["item-p"]}>
                        SurName : <span className={style["span"]}>{item.sureName}</span>
                      </p>
                      <p className={style["item-p"]}>
                        Age : <span className={style["span"]}>{item.age}</span>
                      </p>
                      <p className={style["item-p"]}>
                        City : <span className={style["span"]}>{item.city}</span>
                      </p>
                      <p className={`${style["item-p"]} ${style["item-message"]}`}>
                        Message : <span className={style["span"]}>{item.message}</span>
                      </p>
                    </div>
                    <div className={style["icon-container"]}>
                      <TbEdit className={style["edit-icon"]} />
                      <TbArchive className={style["delete-icon"]} onClick={() => deleteItemHandler(item.id)} />
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className={style["empty-list-container"]}>
              <TbAlertCircle className={style["nothing-icon"]} />
              <p className={style["nothing-p"]}>Nothing found!</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
