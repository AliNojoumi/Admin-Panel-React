import style from "./sideBar.module.css";
import React, { useEffect } from "react";
import { NavLink, Link, isActive } from "react-router-dom";
import { useStateContext } from "../../context/contextProvider";
import { useAuthContext } from "../../context/authContext";
import { TbChartTreemap, TbApps, TbUser, TbChartPie2, TbChevronRight, TbUserPlus, TbLogout } from "react-icons/tb";
import { toast } from "react-toastify";

export default function SideNavBar(props) {
  //---------- Global data from CONTEXT----------
  const { dispath } = useAuthContext();
  const { activeMenu, setActiveMenu, screenSize, setScreenSize, fetchingDataApi } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const toggleNavbar = () => {
    setActiveMenu(!activeMenu);
  };

  // ---------- Variable for className ----------
  const activeClassName = ({ isActive }) => {
    return isActive ? `${style["nav-link"]} ${style["active-nav-link"]}` : `${style["nav-link"]}`;
  };

  return (
    <section className={activeMenu ? `${style["side-bar-container"]} ${style["active"]}` : `${style["side-bar-container"]}`}>
      <button
        onClick={toggleNavbar}
        className={activeMenu ? `${style["toggle-btn"]} ${style["active-toggle-btn"]}` : `${style["toggle-btn"]}`}
      >
        <TbChevronRight></TbChevronRight>
      </button>
      <NavLink to="/Admin/Dashboard" className={style["logo-container"]}>
        <TbChartTreemap className={style["logo"]}></TbChartTreemap>
        <h1 className={style["h1"]}>Test Dashboard</h1>
      </NavLink>
      <nav className={style["nav"]}>
        <div className={style["nav-link-container"]}>
          <NavLink to="/Admin/Dashboard" className={activeClassName}>
            <TbApps className={style["nav-link-icon"]}></TbApps>Dashboard
          </NavLink>
          <NavLink to="/Admin/Users" className={activeClassName} onClick={fetchingDataApi}>
            <TbUser className={style["nav-link-icon"]}></TbUser>Users
          </NavLink>
          <NavLink to="/Admin/AddUsers" className={activeClassName}>
            <TbUserPlus className={style["nav-link-icon"]}></TbUserPlus>Add User
          </NavLink>
          <NavLink to="/Admin/Charts" className={activeClassName}>
            <TbChartPie2 className={style["nav-link-icon"]}></TbChartPie2>Charts
          </NavLink>
        </div>
        <Link
          to="/LogIn"
          onClick={() => {
            dispath({ type: "LOG-OUT" });
            toast.success("Logged out successfully!", {
              style: { backgroundColor: "#f4f4f4", color: "#202020", fontSize: "0.875rem" },
            });
          }}
          className={style["nav-link"]}
        >
          <TbLogout className={style["nav-link-icon"]}></TbLogout>Log Out
        </Link>
      </nav>
    </section>
  );
}
