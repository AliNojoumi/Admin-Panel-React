import style from "../users/users.module.css";
import AskForDelete from "../../components/askForDelete/askForDelete";
import SearchForm from "../../components/searchForm/seachForm";
import UsersData from "../../components/users/usersData";
import { useStateContext } from "../../context/contextProvider";

export default function Users(props) {
  const { askingForDeleting } = useStateContext();
  return (
    <section className={style["users-container"]}>
      {askingForDeleting && <AskForDelete />}
      <SearchForm />
      <UsersData></UsersData>
    </section>
  );
}
