import style from "../styles/users.module.css";
import DataTable from "../components/dataTable/dataTable";

export default function Users(props) {
  return (
    <section className={style["users-container"]}>
      <DataTable></DataTable>
    </section>
  );
}
