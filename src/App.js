import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./main";
import Menu from "./Components/Menu";
import Holandia from "./Components/holandia";
import Niemcy from "./Components/niemcy";
import Czechy from "./Components/czechy";
import Wlochy from "./Components/wlochy";
import Slowacja from "./Components/slowacja";
import Francja from "./Components/francja";
import Austria from "./Components/austria";
import Bulgaria from "./Components/bulgaria";
import Chorwacja from "./Components/chorwacja";
import Czarnogora from "./Components/czarnogora";
import Dania from "./Components/dania";
import Estonia from "./Components/estonia";
import Finlandia from "./Components/finlandia";
import Grecja from "./Components/grecja";
import Hiszpania from "./Components/hiszpania";
import Litwa from "./Components/litwa";
import Lotwa from "./Components/lotwa";
import Norwegia from "./Components/norwegia";
import Portugalia from "./Components/portugalia";
import Slowenia from "./Components/slowenia";
import Szwajcaria from "./Components/szwajcaria";
import Szwecja from "./Components/szwecja";
import Wegry from "./Components/wegry";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import './App.css';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/Help_For_Travelers"} exact element={<MainPage />} />
                <Route path={"/Login"} exact element={<Login/>} />
                <Route path={"/Help_For_Travelers/Niemcy"} element={<Niemcy />} />
                <Route path={"/holandia"} exact element={<Holandia />} />
                <Route path={"/czechy"} exact element={<Czechy />} />
                <Route path={"/wlochy"} exact element={<Wlochy />} />
                <Route path={"/slowacja"} exact element={<Slowacja />} />
                <Route path={"/francja"} exact element={<Francja />} />
                <Route path={"/austria"} exact element={<Austria />} />
                <Route path={"/bulgaria"} exact element={<Bulgaria />} />
                <Route path={"/chorwacja"} exact element={<Chorwacja />} />
                <Route path={"/czarnogora"} exact element={<Czarnogora />} />
                <Route path={"/dania"} exact element={<Dania />} />
                <Route path={"/estonia"} exact element={<Estonia />} />
                <Route path={"/finlandia"} exact element={<Finlandia />} />
                <Route path={"/grecja"} exact element={<Grecja />} />
                <Route path={"/hiszpania"} exact element={<Hiszpania />} />
                <Route path={"/litwa"} exact element={<Litwa />} />
                <Route path={"/lotwa"} exact element={<Lotwa />} />
                <Route path={"/norwegia"} exact element={<Norwegia />} />
                <Route path={"/portugalia"} exact element={<Portugalia />} />
                <Route path={"/slowenia"} exact element={<Slowenia />} />
                <Route path={"/szwajcaria"} exact element={<Szwajcaria />} />
                <Route path={"/szwecja"} exact element={<Szwecja />} />
                <Route path={"/wegry"} exact element={<Wegry />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
