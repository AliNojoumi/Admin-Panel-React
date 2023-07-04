import React from "react";
import {useEffect} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {FiSettings} from "react-icons/fi";
import SideNavBar from "./components/sideNavBar";
import './App.css';

function App() {

    return (<>
        <BrowserRouter>
            <SideNavBar></SideNavBar>

        </BrowserRouter>
    </>);
}

export default App;
