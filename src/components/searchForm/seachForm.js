import style from "./searchForm.module.css";
import { useStateContext } from "../../context/contextProvider";
import { TbSearch, TbPlus } from "react-icons/tb";

export default function SearchForm(props) {
  const { activeResetSearchInput, activeResetSearchInputHandler, formSearchInput, formSearchInputHandler } = useStateContext();

  const searchInputHanlder = (event) => {
    activeResetSearchInputHandler(false);
    const { value } = event.target;
    formSearchInputHandler(value);
    if (formSearchInput.length <= 1) {
      activeResetSearchInputHandler(false);
    } else {
      activeResetSearchInputHandler(true);
    }
  };

  return (
    <form className={style["form-container"]}>
      <input
        type="search"
        name="searchInput"
        value={formSearchInput}
        placeholder="search..."
        className={style["search-input"]}
        onChange={searchInputHanlder}
      />
      <button className={style["search-button"]}>
        <TbSearch />
      </button>
      {activeResetSearchInput && (
        <button className={style["close-button"]}>
          <TbPlus className={style["close-icon"]} />
        </button>
      )}
    </form>
  );
}
