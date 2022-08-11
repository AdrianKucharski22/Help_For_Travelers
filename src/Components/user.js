import "../styles/main.scss"
import React, {useState} from 'react';

export default function Userthings() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };

    return (
        <div>
                    <a href="#"><li>Wybór Państwa</li></a>
                    <a href="#"><li>Opinie</li></a>
                    <a href="#"><li>Kontakt</li></a>
                    <a href="#" onClick={handleClick}><li>User</li></a>


            {isShown && (
                <div className={"userOptionsDiv"}>
                    <ul className={'userOptions'}>
                        <a><li>Ustawienia</li></a>
                        <a><li>Ulubione Państwa</li></a>
                        <a><li>Wyloguj</li></a>
                    </ul>
                </div>
            )}
        </div>
    );
}

