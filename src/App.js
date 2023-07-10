import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/main";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main></Main>}>
            <Route path="/Dashboard" element={<Dashboard /> }></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
