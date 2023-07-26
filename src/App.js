import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Main from "./pages/main/main";
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
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/Users" element={<Users />}></Route>
            <Route path="/AddUsers" element={<AddUser />}></Route>
            <Route path="/Charts" element={<Chart />}>
              <Route path="/Charts/PieChart" element={<BigPieChart />}></Route>
              <Route path="/Charts/DashedLineChart" element={<DashedLineChart />}></Route>
              <Route path="/Charts/StackedChart" element={<StakedChart />}></Route>
              <Route path="/Charts/MixBarChart" element={<MixBarChart />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
