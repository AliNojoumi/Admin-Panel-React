import style from "./searchForm.module.css";
import { TbSearch } from "react-icons/tb";

export default function SearchForm(props) {
  return (
    <form className={style["form-container"]}>
      <input type="search" placeholder="search..." className={style["search-input"]} />
      <button className={style["search-button"]}>
        <TbSearch />
      </button>
    </form>
  );
}
