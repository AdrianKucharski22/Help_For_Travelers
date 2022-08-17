import './App.css';
import Flags from "./Components/Flags";
import React from "react";
import Comments from "./Components/Comments";


function MainPage() {
    return (
        <div className={"App"}>
            <section className="main">
                <h1>Wybierz państwo</h1>
                <main>
                    <Flags/>
                </main>
            </section>
            <Comments/>
        </div>
    );
}

export default MainPage;
