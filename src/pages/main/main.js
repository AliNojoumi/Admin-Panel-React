import SideNavBar from "../../components/sideBar/sideNavBar";
import style from "../main/dashboard.module.css";
import { Outlet } from "react-router-dom";

export default function Main(props) {
  return (
    <section className={style["dashboard-container"]}>
      <SideNavBar></SideNavBar>
      <Outlet></Outlet>
    </section>
  );
}
