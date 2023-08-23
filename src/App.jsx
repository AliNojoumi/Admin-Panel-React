import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import "./App.css";
import style from "./components/dashboard/dashboard.module.css";
import SideNavBar from "./components/sideBar/sideNavBar";
import Dashboard from "./components/dashboard/dashboard";
import AddUser from "./pages/addUser/addUser";
import Error from "./pages/error/error";
import Chart from "./pages/chart/chart";
import Users from "./pages/users/users";
import StakedChart from "./components/charts/stakedChart";
import DashedLineChart from "./components/charts/dashedLineChart";
import MixBarChart from "./components/charts/mixBarChart";
import BigPieChart from "./components/charts/bigPieChart";

function App() {
  return (
    <>
      <BrowserRouter>
        <section className={style["dashboard-container"]}>
          <SideNavBar></SideNavBar>
          <Routes>
            <Route path="/" element={<Navigate to={"/admin/Dashboard"}></Navigate>}></Route>
            <Route path="/admin" element={<Navigate to={"/admin/Dashboard"}></Navigate>}></Route>
            <Route path="/admin/Dashboard" element={<Dashboard />}></Route>
            <Route path="/admin/Users" element={<Users />}></Route>
            <Route path="/admin/AddUsers" element={<AddUser />}></Route>
            <Route path="/admin/Charts" element={<Chart />}>
              <Route path="/admin/Charts/PieChart" element={<BigPieChart />}></Route>
              <Route path="/admin/Charts/DashedLineChart" element={<DashedLineChart />}></Route>
              <Route path="/admin/Charts/StackedChart" element={<StakedChart />}></Route>
              <Route path="/admin/Charts/MixBarChart" element={<MixBarChart />}></Route>
            </Route>
            <Route path="*" element={<Error></Error>}></Route>
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
