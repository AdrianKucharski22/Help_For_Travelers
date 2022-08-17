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
            <Menu />
            <Routes>
                <Route path={"/"} exact element={<MainPage />} />
                <Route path={"/Login"} exact element={<Login/>} />
                <Route path={"/niemcy"} element={<Niemcy />} />
                <Route path={"/holandia"} element={<Holandia />} />
                <Route path={"/czechy"} element={<Czechy />} />
                <Route path={"/wlochy"} element={<Wlochy />} />
                <Route path={"/slowacja"} element={<Slowacja />} />
                <Route path={"/francja"} element={<Francja />} />
                <Route path={"/austria"} element={<Austria />} />
                <Route path={"/bulgaria"} element={<Bulgaria />} />
                <Route path={"/chorwacja"} element={<Chorwacja />} />
                <Route path={"/czarnogora"} element={<Czarnogora />} />
                <Route path={"/dania"} element={<Dania />} />
                <Route path={"/estonia"} element={<Estonia />} />
                <Route path={"/finlandia"} element={<Finlandia />} />
                <Route path={"/grecja"} element={<Grecja />} />
                <Route path={"/hiszpania"} element={<Hiszpania />} />
                <Route path={"/litwa"} element={<Litwa />} />
                <Route path={"/lotwa"} element={<Lotwa />} />
                <Route path={"/norwegia"} element={<Norwegia />} />
                <Route path={"/portugalia"} element={<Portugalia />} />
                <Route path={"/slowenia"} element={<Slowenia />} />
                <Route path={"/szwajcaria"} element={<Szwajcaria />} />
                <Route path={"/szwecja"} element={<Szwecja />} />
                <Route path={"/wegry"} element={<Wegry />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
