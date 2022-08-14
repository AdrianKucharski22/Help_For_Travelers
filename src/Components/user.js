import "../styles/main.scss"
import React, {useState} from 'react';

export default function Userthings() {
    const countryes = ["Holandia","Niemcy","Polska","Francja","Wlochy","Czechy","Slowacja","Norwegia","Wegry","Szwecja","Szwajcaria","Slowenia","Portugalia","Norwegia","Lotwa","Litwa","Hiszpania","Grecja","Finlandia","Estonia","Dania","Czarnogora","Chorwacja","Bulgaria","Austria"]
    const [isShownUser, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };
    const [isShownCountry, setIsShownCountry] = useState(false);

    const handleClickChoseCountry = event => {
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
                        <a><li>Wyloguj</li></a>
                    </ul>
                </div>
            )}
            {isShownCountry &&(
                <div className={"coutryNav"}>
                    <a href={'/'}><li>Główna</li></a>
                    {countryes.map(countryes =>(
                        <a href={countryes}><li>{countryes}</li></a>
                    ))}
                </div>
            )}
        </div>
    );
}

