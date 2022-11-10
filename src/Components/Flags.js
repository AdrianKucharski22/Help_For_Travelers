import React from "react"
import "../styles/main.scss"

const countryes = ["Holandia","Niemcy","Francja","Wlochy","Czechy","Slowacja","Wegry","Szwecja","Szwajcaria","Slowenia","Portugalia","Norwegia","Lotwa","Litwa","Hiszpania","Grecja","Finlandia","Estonia","Dania","Czarnogora","Chorwacja","Bulgaria","Austria"]
const countresImg = ["flaga-holandia.webp","flaga-niemcy.png","flaga-francja.png","flaga-wlochy.webp","flaga-czechy.png","flaga-slowacja.png","flaga-wegry.png","flaga-szwecja.webp","flaga-szwajcaria.png","flaga-slowenia.png","flaga-portugalia.png","flaga-norwegia.png","flaga-lotwa.webp","flaga-litwa.jpg","flaga-hiszpania.jpg","flaga-grecja.png","flaga-finlandia.png","flaga-estonia.webp","flaga-dania.png","flaga-czarnogora.webp","flaga-chorwacja.png","flaga-bulgaria.png","flaga-austria.webp"]

function Flags() {
            return(
                <>
                    {countryes.map((country, i) =>(
                    <div className={country} key={country}>
                        <a href={"/"+country}  className={country}>
                            <img src={`${process.env.PUBLIC_URL}/${countresImg[i]}`} alt={country} className={'flag'}/>
                            <p>{country}</p>
                        </a>
                    </div>
                        ))}
                </>
            )
    }
export default Flags