import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/main";
import Dashboard from "./components/dashboard";
import AddUser from "./pages/addUser";
import Error from "./pages/error";
import Chart from "./pages/chart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />}>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/AddUsers" element={<AddUser />}></Route>
            <Route path="/Charts" element={<Chart />}></Route>
          </Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
