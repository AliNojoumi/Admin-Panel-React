import style from "../users/users.module.css";
import SearchForm from "../../components/searchForm/seachForm";
import UsersData from "../../components/users/usersData";

export default function Users(props) {
  return (
    <section className={style["users-container"]}>
      <SearchForm />
      <UsersData></UsersData>
    </section>
  );
}
