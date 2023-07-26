import style from "./usersData.module.css";
import { useStateContext } from "../../context/contextProvider";
import { TbLoader, TbEdit, TbArchive, TbAlertCircle } from "react-icons/tb";

export default function UsersData(props) {
  //----------This is for adding the data from the context and updating them ----------
  const {
    fetchedData,
    loadingData,
    askingForDeletingHandler,
    userItemIdHandler,
    editModalStateHandler,
    fetchingDataById,
    editUserItemIdHandler,
  } = useStateContext();

  return (
    <>
      {loadingData ? (
        <div className={style["loading-list-container"]}>
          <TbLoader className={style["loading-icon"]} />
          <p className={style["loading-p"]}>Loading data...</p>
        </div>
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
                      <TbEdit
                        className={style["edit-icon"]}
                        onClick={() => {
                          editUserItemIdHandler(item.id);
                          fetchingDataById(item.id);
                          editModalStateHandler(true);
                        }}
                      />
                      <TbArchive
                        className={style["delete-icon"]}
                        onClick={() => {
                          askingForDeletingHandler(true);
                          userItemIdHandler(item.id);
                        }}
                      />
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
