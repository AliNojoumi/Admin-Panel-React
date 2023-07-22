import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/main";
import Dashboard from "./components/dashboard";
import AddUser from "./pages/addUser";
import Error from "./pages/error";
import Chart from "./pages/chart";
import Users from "./pages/users";
import StakedChart from "./components/charts/stakedChart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />}>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/Users" element={<Users />}></Route>
            <Route path="/AddUsers" element={<AddUser />}></Route>
            <Route path="/Charts" element={<Chart />}>
              <Route path="/Charts/AreaChart" element={<p>hello world</p>}></Route>
              <Route path="/Charts/LineChart" element={<p>hello world2</p>}></Route>
              <Route path="/Charts/StackedChart" element={<StakedChart />}></Route>
              <Route path="/Charts/MixBarChart" element={<p>hello world4</p>}></Route>
            </Route>
          </Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
