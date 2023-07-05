import SideNavBar from "../components/sideNavBar";
import style from "../styles/dashboard.module.css";

export default function Dashboard(props) {
    const shiftContent = true;

    return (<section className={style["dashboard-container"]}>
        <SideNavBar></SideNavBar>
        <div
            className={shiftContent ? `${style["content-container"]} ${style["shift"]}` : `${style["content-container"]}`}>
            <p>hello world</p>
        </div>
    </section>);
}