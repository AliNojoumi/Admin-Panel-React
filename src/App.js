import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/main";
import Dashboard from "./components/dashboard";
import Error from "./pages/error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main></Main>}>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
          </Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
