import style from "./searchForm.module.css";
import { useStateContext } from "../../context/contextProvider";
import { TbSearch, TbPlus } from "react-icons/tb";

export default function SearchForm(props) {
  const {
    activeResetSearchInput,
    activeResetSearchInputHandler,
    formSearchInput,
    formSearchInputHandler,
    fetchedData,
    fetchedDataHandler,
    fetchingDataApi,
  } = useStateContext();

  const searchInputHanlder = (e) => {
    activeResetSearchInputHandler(false);
    const { value } = e.target;
    formSearchInputHandler(value);
    if (formSearchInput.length <= 1) {
      activeResetSearchInputHandler(false);
      fetchingDataApi();
    } else {
      activeResetSearchInputHandler(true);
    }
  };

  const resetSeachInputHandler = (e) => {
    e.preventDefault();
    formSearchInputHandler("");
    activeResetSearchInputHandler(false);
    fetchingDataApi();
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    const filteredData = fetchedData.filter(
      (item) =>
        item.name.includes(formSearchInput.toLowerCase()) ||
        item.sureName.includes(formSearchInput.toLowerCase()) ||
        item.message.includes(formSearchInput.toLowerCase()) ||
        item.city.includes(formSearchInput.toLowerCase())
    );
    fetchedDataHandler(filteredData);
  };

  return (
    <form className={style["form-container"]} onSubmit={searchHandler}>
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
