
import './App.css';
import Flags from "./Components/Nevbar";
import React from "react";

function App() {
  return (
    <div className={"App"}>
        <>
            <section className="nav">
                <div className="logo">
                    LogoStrony
                </div>
                <div className="mainNav">
                    <ul>
                        <a href="#"><li>tak</li></a>
                        <a href="#"><li>nie</li></a>
                        <a href="#"><li>nwm</li></a>
                        <a href="#user"><li>User</li></a>
                    </ul>

                </div>
            </section>
            <section className="main">
                <main>
                    <Flags />
                </main>
            </section>
            <section className='userThoughts'>
                <div className='username'>
                    <h2>Twoje imię</h2>
                </div>
                <div className='coments'>
                    <h2>Sekcja komentarzy</h2>
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

export default App;
