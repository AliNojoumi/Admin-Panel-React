import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { ToastContainer } from "react-toastify";
import { useAuthContext } from "./context/authContext";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Layout from "./pages/layOut/layOut";
import Dashboard from "./pages/dashboard/dashboard";
import AddUser from "./pages/addUser/addUser";
import Error from "./pages/error/error";
import Chart from "./pages/chart/chart";
import Users from "./pages/users/users";
import StakedChart from "./components/charts/stakedChart";
import DashedLineChart from "./components/charts/dashedLineChart";
import MixBarChart from "./components/charts/mixBarChart";
import BigPieChart from "./components/charts/bigPieChart";
import LogIn from "./pages/logIn/logIn";

function App() {
  const { userLogInState } = useAuthContext();

  function AuthProtectedRoutes({ children }) {
    return userLogInState.user === null ? <Navigate to={"/LogIn"}></Navigate> : children;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/admin/Dashboard"} />}></Route>
          <Route path="/Admin" element={<Navigate to="/Admin/Dashboard" />} />
          <Route
            path="/Admin"
            element={
              <AuthProtectedRoutes>
                <Layout />
              </AuthProtectedRoutes>
            }
          >
            <Route path="Dashboard" element={<Dashboard />}></Route>
            <Route path="Users" element={<Users />}></Route>
            <Route path="AddUsers" element={<AddUser />}></Route>
            <Route path="Charts" element={<Chart />}>
              <Route path="PieChart" element={<BigPieChart />}></Route>
              <Route path="DashedLineChart" element={<DashedLineChart />}></Route>
              <Route path="StackedChart" element={<StakedChart />}></Route>
              <Route path="MixBarChart" element={<MixBarChart />}></Route>
            </Route>
            <Route path="*" element={<Error></Error>}></Route>
          </Route>
          <Route path="/LogIn" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
