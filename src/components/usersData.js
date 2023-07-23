import { useEffect, useState } from "react";
import { TbLoader } from "react-icons/tb";
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
        .then((finalData) => fetchedDataHandler(finalData))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      {loadingData ? (
        <p className={style["loading-p"]}>
          Loading Data <TbLoader className={style["loading-icon"]} />
        </p>
      ) : (
        <ul className={style["ul"]}>
          {fetchedData.map((item) => {
            return (
              <li key={item.id} className={style["item-li"]}>
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
