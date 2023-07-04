import styles from "../styles/sideBar/sideBar.module.css";
import React from "react";

export default function SideNavBar(props){
    const activeMenu = true;
    return(
        <section>
            {activeMenu ? (<div className={styles["active-container"]}>Sidebar</div>) : (<div
                className={`${styles["active-container"]} ${styles["no-active-container"]}`}>Sidebar-w-0</div>)}
        </section>
    );
}