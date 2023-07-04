import React from "react";
import {useEffect} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {FiSettings} from "react-icons/fi";
import Dahboard from "./components/sideNavBar";
import './App.css';
import Dashboard from "./pages/dashboard";

function App() {

    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/Dashboard"></Navigate>}></Route>
                <Route path="/Dashboard" element={<Dashboard/>}></Route>
            </Routes>
        </BrowserRouter>
    </>);
}

export default App;
