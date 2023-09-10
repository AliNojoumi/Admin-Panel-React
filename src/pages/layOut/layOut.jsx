import { Outlet } from "react-router-dom";
import SideNavBar from "../../components/sideBar/sideNavBar";
import style from "../dashboard/dashboard.module.css";

export default function Layout() {
  return (
    <section className={style["dashboard-container"]}>
      <SideNavBar />
      <Outlet />
    </section>
  );
}
