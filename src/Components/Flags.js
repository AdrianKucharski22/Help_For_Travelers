import React from "react"
import "../styles/main.scss"
import Holandia from "./holandia";
    function Flags() {
        const countryes = ["Holandia","Niemcy","Polska","Francja","Wlochy","Czechy","Slowacja","Wegry","Szwecja","Szwajcaria","Slowenia","Portugalia","Norwegia","Lotwa","Litwa","Hiszpania","Grecja","Finlandia","Estonia","Dania","Czarnogora","Chorwacja","Bulgaria","Austria"]
        const countresImg = ["flaga-holandia.webp","flaga-niemcy.png","Polska","Francja","flaga-wlochy.webp","Czechy","flaga-slowacja.png","flaga-wegry.png","flaga-szwecja.webp","flaga-szwajcaria.png","Słowenia","flaga-portugalia.png","flaga-norwegia.png","flaga-lotwa.webp","flaga-litwa.jpg","Hiszpania","Grecja","Finlandia","Estonia","Dania","Czarnogóra","Chorwacja","Bułgaria","Austria"]
            return(
                <>
                    {countryes.map((country, i) =>(
                    <div className={country} key={country}>
                        <a href={country}  className={country}>
                            <img src={`${process.env.PUBLIC_URL}/${countresImg[i]}`} alt={country}/>
                            <p>{country}</p>
                        </a>
                    </div>
                        ))}
                </>
            )
    }
export default Flags