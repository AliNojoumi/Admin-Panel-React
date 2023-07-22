import style from "../styles/chart.module.css";
import { Outlet, NavLink, isActive } from "react-router-dom";
import { TbChartDonut, TbChartBar, TbChartLine, TbChartSankey } from "react-icons/tb";

export default function Chart() {
  const activeClassName = ({ isActive }) => {
    return isActive ? `${style["nav-link"]} ${style["active-nav-link"]}` : `${style["nav-link"]}`;
  };

  return (
    <section className={style["chart-container"]}>
      <ul className={style["charts-ul"]}>
        <NavLink to="/Charts/PieChart" className={activeClassName}>
          <TbChartDonut className={style["nav-link-icon"]} />
          Pie Chart
        </NavLink>
        <NavLink to="/Charts/DashedLineChart" className={activeClassName}>
          <TbChartLine className={style["nav-link-icon"]} />
          Line Chart
        </NavLink>
        <NavLink to="/Charts/StackedChart" className={activeClassName}>
          <TbChartSankey className={style["nav-link-icon"]} />
          Stacked Chart
        </NavLink>
        <NavLink to="/Charts/MixBarChart" className={activeClassName}>
          <TbChartBar className={style["nav-link-icon"]} />
          Mix Bar Chart
        </NavLink>
      </ul>
      <Outlet></Outlet>
    </section>
  );
}
