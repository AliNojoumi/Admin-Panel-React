import SideNavBar from "../components/sideNavBar";
import style from "../styles/dashboard.module.css";

export default function Dashboard(props) {
    return (<section className={style["dashboard-container"]}>
        <SideNavBar></SideNavBar>
        <div className={style["content-container"]}>
            <p>hello world</p>
        </div>
    </section>);
}