import "../styles/main.scss"
import React, {useState} from 'react';
import Login from "./Login";

export default function Userthings() {
    const countryes = ["Holandia","Niemcy","Francja","Wlochy","Czechy","Slowacja","Wegry","Szwecja","Szwajcaria","Slowenia","Portugalia","Norwegia","Lotwa","Litwa","Hiszpania","Grecja","Finlandia","Estonia","Dania","Czarnogora","Chorwacja","Bulgaria","Austria"]
    const countresImg = ["flaga-holandia.webp","flaga-niemcy.png","flaga-francja.png","flaga-wlochy.webp","flaga-czechy.png","flaga-slowacja.png","flaga-wegry.png","flaga-szwecja.webp","flaga-szwajcaria.png","flaga-slowenia.png","flaga-portugalia.png","flaga-norwegia.png","flaga-lotwa.webp","flaga-litwa.jpg","flaga-hiszpania.jpg","flaga-grecja.png","flaga-finlandia.png","flaga-estonia.webp","flaga-dania.png","flaga-czarnogora.webp","flaga-chorwacja.png","flaga-bulgaria.png","flaga-austria.webp"]

    const [isShownUser, setIsShown] = useState(false);

    const handleClick = () => {
        setIsShown(current => !current);
    };
    const [isShownCountry, setIsShownCountry] = useState(false);

    const handleClickChoseCountry = () => {
        setIsShownCountry(current => !current);
    };

    return (
        <div>
                    <a href="#" onClick={handleClickChoseCountry}><li>Wybór Państwa</li></a>
                    <a href="#"><li>Opinie</li></a>
                    <a href="#"><li>Kontakt</li></a>
                    <a href="#" onClick={handleClick}><li>User</li></a>

            {isShownUser && (
                <div className={"userOptionsDiv"}>
                    <ul className={'userOptions'}>
                        <a><li>Ustawienia</li></a>
                        <a><li>Ulubione Państwa</li></a>
                        <a href={"Login"}><li>Zaloguj</li></a>
                        <a><li>Wyloguj</li></a>
                    </ul>
                </div>
            )}
            {isShownCountry &&(
                <div className={"coutryNav"} >
                    <a href={'/'}><li>Główna</li></a>
                    {countryes.map((countryes, i) =>(
                        <a href={countryes}><li className={'liNav'}><img src={`${process.env.PUBLIC_URL}/${countresImg[i]}`} alt={countryes} className={'navFlag'}/> {countryes}</li></a>
                    ))}
                </div>
            )}
        </div>
    );
}

