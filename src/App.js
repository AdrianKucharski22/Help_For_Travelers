import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import main_page from "./main";
import Flags from "./Components/Flags";
import React from "react";


function App() {
    return (
       <main_page />
    );
}

export default App;
