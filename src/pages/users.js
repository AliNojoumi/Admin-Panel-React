import style from "../styles/users.module.css";
import SearchForm from "../components/seachForm";

export default function Users(props) {
  return (
    <section className={style["users-container"]}>
      <SearchForm />
      <div></div>
    </section>
  );
}
