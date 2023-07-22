import { TbSearch } from "react-icons/tb";
import style from "../styles/searchForm.module.css";

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
