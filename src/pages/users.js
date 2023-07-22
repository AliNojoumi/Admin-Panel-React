import style from "../styles/users.module.css";
import SearchForm from "../components/seachForm";
import UsersData from "../components/usersData";

export default function Users(props) {
  return (
    <section className={style["users-container"]}>
      <SearchForm />
      <UsersData></UsersData>
    </section>
  );
}
