import style from "../styles/sideBar/sideBar.module.css";
import React, {useState} from "react";
import {Link, NavLink, isActive} from "react-router-dom";
import {
    TbChartTreemap, TbApps, TbUser, TbChartPie2, TbChevronRight, TbUserPlus, TbUserEdit, TbLogout
} from "react-icons/tb";

export default function SideNavBar(props) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // ---------- This variable is for className ----------
    const activeClassName = ({isActive}) => {
        return isActive ? `${style["nav-link"]} ${style["active-nav-link"]}` : `${style["nav-link"]}`;
    };

    return (<section
        className={isOpen ? `${style["side-bar-container"]} ${style["active"]}` : `${style["side-bar-container"]}`}>
        <button onClick={toggleNavbar}
                className={isOpen ? `${style["toggle-btn"]} ${style["active-toggle-btn"]}` : `${style["toggle-btn"]}`}>
            <TbChevronRight></TbChevronRight>
        </button>
        <NavLink to="/Dashboard" className={style["logo-container"]}>
            <TbChartTreemap className={style["logo"]}></TbChartTreemap>
            <h1 className={style["h1"]}>Test Dashboard</h1>
        </NavLink>
        <nav className={style["nav"]}>
            <div className={style["nav-link-container"]}>
                <NavLink to="/Dashboard" className={activeClassName}><TbApps
                    className={style["nav-link-icon"]}></TbApps>Dashboard</NavLink>
                <NavLink to="/Users" className={activeClassName}><TbUser className={style["nav-link-icon"]}></TbUser>Users</NavLink>
                <NavLink to="/AddUsers" className={activeClassName}><TbUserPlus
                    className={style["nav-link-icon"]}></TbUserPlus>Add User</NavLink>
                <NavLink to="/EditUsers" className={activeClassName}><TbUserEdit
                    className={style["nav-link-icon"]}></TbUserEdit>Edit User</NavLink>
                <NavLink to="/Charts" className={activeClassName}><TbChartPie2
                    className={style["nav-link-icon"]}></TbChartPie2>Charts</NavLink>
            </div>
            <NavLink to="/" className={activeClassName}><TbLogout
                className={style["nav-link-icon"]}></TbLogout>Log</NavLink>
        </nav>
    </section>);
}

