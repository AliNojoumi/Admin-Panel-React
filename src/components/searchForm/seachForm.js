import style from "./searchForm.module.css";
import { useStateContext } from "../../context/contextProvider";
import { TbSearch, TbPlus } from "react-icons/tb";

export default function SearchForm(props) {
  const { activeResetSearchInput, activeResetSearchInputHandler, formSearchInput, formSearchInputHandler } = useStateContext();

  const searchInputHanlder = (e) => {
    activeResetSearchInputHandler(false);
    const { value } = e.target;
    formSearchInputHandler(value);
    if (formSearchInput.length <= 1) {
      activeResetSearchInputHandler(false);
    } else {
      activeResetSearchInputHandler(true);
    }
  };

  const resetSeachInputHandler = (e) => {
    e.preventDefault();
    formSearchInputHandler("");
    activeResetSearchInputHandler(false);
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
        <button className={style["close-button"]} onClick={resetSeachInputHandler}>
          <TbPlus className={style["close-icon"]} />
        </button>
      )}
    </form>
  );
}
