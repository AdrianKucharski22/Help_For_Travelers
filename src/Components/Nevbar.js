import React from "react";
import "../styles/main.scss"
function Flags(){
        return (
            <>
                <div className={'flag'}>
                    <img src='flag'/>
                    <p>belgia</p>
                </div>
                <div className={'flag'}>
                    <a href={"country.html"}>
                    <img src='flaga'/>
                    <p>belgia</p>
                    </a>
                </div>
                <div className={'flag'}>
                    <img src='flaga'/>
                    <p>polska</p>
                </div>
                <div className={'flag'}>
                    <img src='flaga'/>
                    <p>niemcy</p>
                </div>
            </>
        )
}
export default Flags