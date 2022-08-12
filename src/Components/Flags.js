import React from "react"
import "../styles/main.scss"
import Holandia from "./holandia";
    function Flags() {
        const countryes = ["Holandia","Niemcy","Polska","Francja","Włochy","Czechy","Słowacja","Norwegia","Węgry","Szwecja","Szwajcaria","Słowenia","Portugalia","Norwegia","Łotwa","Litwa","Hiszpania","Grecja","Finlandia","Estonia","Dania","Czarnogóra","Chorwacja","Bułgaria","Austria"]
        const couuntresImg = ["Holandia","flaga.png","Polska","Francja","Włochy","Czechy","Słowacja","Norwegia","Węgry","Szwecja","Szwajcaria","Słowenia","Portugalia","Norwegia","Łotwa","Litwa","Hiszpania","Grecja","Finlandia","Estonia","Dania","Czarnogóra","Chorwacja","Bułgaria","Austria"]
            return(
                <>
                    {countryes.map(countryes =>(
                    <div className={countryes} kay={countryes}>
                        <a href={countryes}  className={countryes}>
                            <img src='./flaga.png' alt={countryes}/>
                            <p>{countryes}</p>
                        </a>
                    </div>
                        ))}
                </>
            )
    }
export default Flags