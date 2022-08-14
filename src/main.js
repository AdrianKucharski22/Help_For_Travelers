import './App.css';
import Flags from "./Components/Flags";
import Userthings from "./Components/user";
import React from "react";
import {Link} from "react-router-dom";
import Holandia from "./Components/holandia";
import Niemcy from "./Components/niemcy";

function MainPage() {
    return (
        <div className={"App"}>
            <section className="main">
                {/*<Holandia/>*/}
                {/*<Niemcy/>*/}
                <h1>Wybierz państwo</h1>
                <main>
                    <Flags/>
                </main>
            </section>
            <section className='userThoughts'>
                <div className='username'>
                    <h2>Twoje imię</h2>
                    <p>Name</p>
                </div>
                <div className='coments'>
                    <h2>Wyślij Opinie</h2>
                    <textarea name="" id=""></textarea>
                </div>
                <div className='marks'>
                    <h2>Ocena</h2>
                </div>
            </section>
            <section className='footer'>
                <p>Opis i info i kontakt</p>
            </section>
        </div>
    );
}

export default MainPage;
