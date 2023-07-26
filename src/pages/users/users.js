import style from "../users/users.module.css";
import AskForDelete from "../../components/askForDelete/askForDelete";
import EditModal from "../../components/editModal/editModal";
import SearchForm from "../../components/searchForm/seachForm";
import UsersData from "../../components/users/usersData";
import { useStateContext } from "../../context/contextProvider";

export default function Users(props) {
  const { askingForDeleting, editModalState } = useStateContext();
  return (
    <section className={style["users-container"]}>
      {editModalState && <EditModal />}
      {askingForDeleting && <AskForDelete />}
      <SearchForm />
      <UsersData></UsersData>
    </section>
  );
}
