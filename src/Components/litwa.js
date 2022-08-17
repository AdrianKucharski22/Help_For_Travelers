import React from "react"
import "../styles/main.scss"

function Litwa(){
    return(
        <div className={'countryPage litwa'}>
            <nav className={'countryNav borderDiv flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-litwa.jpg"} alt={'Litwa'} className={'litwa'}/>
                    <h1>Litwa</h1>
                </div>
                <div className={'leftInfo flex'}>
                    <div className={'alarm'}>
                        <p>Europejski Numer Alarmowy</p>
                        <h2>112</h2>
                    </div>
                </div>
            </nav>
            <div>
                <div className={'intoCountry borderDiv flex'}>
                    <h4>
                        Wjazd do kraju
                    </h4>
                    <p>
                        Na podstawi paszportu lub dowodu osobistego.Swobodny przepływ osób w ramach UE oraz
                        Europejskiego Obszaru Gospodarczego.
                        Polskie prawo jazdy jest honorowane.
                    </p>
                </div>
            </div>
            <div className={'speedLimitations borderDiv flex'}>
                <h4>
                    Ograniczenia prędkości
                </h4>
                <div className={'signs flex'}>
                    <h4>Teren Zabudowany</h4>
                    <div className={' flex'}>
                        <img src={'/50.webp'} alt={'50km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Teren Niezabudowany</h4>
                    <div>
                        <img src={'/70.png'} alt={'70km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Autostrady i drogi ekspresowe</h4>
                    <div className={'signs flex'}>
                        <img src={'/110.jpg'} alt={'110km/h'}/>
                        <img src={'/130.jpg'} alt={'130km/h'}/>
                    </div>
                </div>
            </div>
            <div className={'payment borderDiv flex'}>
                <h4>
                    Opłaty za przejazdy
                </h4>
                <div>
                    <p>
                        Korzystanie z dróg na litwie jest bezpłatne dla samochodów osobowych i motocykli. Opłatami
                         objete są jednak pojazdy ciężarowe, autobusy,lub busy, które mają więcej niż 8 miejsc dla pasażerów.
                         Opłaty należy uiścić również gdy ilość miejsc dla pasażerów jest mniejsza niż 8, ale w dowodzie
                         rejestracyjnym pojazd został określony jako ciężarowy
                    </p>
                </div>
            </div>
            <div className={'driveAfterDrink borderDiv flex'}>
                <h4>
                    Dopuszczalne stężenie Alkoholu we krwi
                </h4>
                <div>
                    <div>
                        <h2>
                            0,4%
                        </h2>
                        <p>Dla kierowców doświadczonych</p>
                    </div>
                    <div>
                        <h2>0,0%</h2>
                        <p>Dla kierowców początkujących posiadających prawo jazdy krócej niż 2 lata</p>
                    </div>
                </div>
            </div>
            <div className={'safety borderDiv flex'}>
                <div className={'flex'}>
                    <img src={"/helmet.svg"}/>
                    <p>obowiązek posiadania kasku dla wszystkich rodzajów motocykli , quadów itp</p>
                </div>
                <div className={'flex'}>
                    <img src={"/pasy.webp"}/>
                    <p>obowiązek zapinania pasów bezpieczeństwa na wszystkich siedzeniach samochodu</p>
                </div>
                <div className={'flex'}>
                    <img src={"/baby.png"}/>
                    <p>obowiązek używania fotelików lub siedzisk do 135cm dzieci do lat 3 wyłącznie na tylnym siedzeniu</p>
                </div>
                <div className={'flex'}>
                    <img src={"/tel.webp"}/>
                    <p>zakaz rozmawiania podczas jazdy przez telefon komórkowy bez zestawu głośno mówiącego</p>
                </div>
            </div>
            <div className={'caution borderDiv flex'}>
                <h4>Uwaga</h4>
                <div>
                    <p>
                        Przekroczenie prędkości o więcej niż 50km/h jest karane karą grzywny w wysokości od 450 do 550EUR z pozbawieniem
                         prawa do porwadzenia pojazdów od 1 do 6 miesięcy
                    </p>
                    <p>
                        Kierowcy posiadający prawo jazdy krócej niż 2lata w terenie niezabudowanym na drogach asfaltowych lub betonowych
                         muszą zwolnić do 80km/h a w przypadku autostrad i dróg ekspresowych do 100km/h. W okresie od listopada do marca prędkości podlegają wyższym ograniczeniom
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Litwa