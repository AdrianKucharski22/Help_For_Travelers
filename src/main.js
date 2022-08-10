import './App.css';
import Flags from "./Components/Flags";
import Userthings from "./Components/user";
import React from "react";
import Holandia from "./Components/holandia";
import Niemcy from "./Components/niemcy";
function MainPage() {
    return (
        <div className={"App"}>
            <>
                <section className="nav">
                    <div className="logo">
                        <h1>DriveSafe</h1>
                    </div>
                    <div className="mainNav">
                        <ul>
                            <a href="#"><li>Wybór Państwa</li></a>
                            <a href="#"><li>Opinie</li></a>
                            <a href="#"><li>Kontakt</li></a>
                            <Userthings/>
                        </ul>
                        <div className={"userOptionsDiv"}>
                        <ul className={'userOptions'}>
                            <a><li>Ustawienia</li></a>
                            <a><li>Ulubione Państwa</li></a>
                        </ul>
                        </div>
                    </div>
                </section>
                <section className="main">
                    <h1>Wybierz państwo</h1>
                    <Holandia/>
                    <Niemcy/>
                    <main>
                        <Flags />
                    </main>
                </section>
                <section className='userThoughts'>
                    <div className='username'>
                        <h2>Twoje imię</h2>
                        <p>Name</p>
                    </div>
                    <div className='coments'>
                        <h2>Wyślij Opinie</h2>
                        <textarea  name="" id="" ></textarea>
                    </div>
                    <div className='marks'>
                        <h2>Ocena</h2>
                    </div>
                </section>
                <section className='footer'>
                    <p>Opis i info i kontakt</p>
                </section>
            </>
        </div>
    );
}

export default MainPage;
