import React from "react"
import "../styles/main.scss"

function Czechy(){
    return(
        <div className={'countryPage czechy'}>
            <nav className={'countryNav borderDiv flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-czechy.png"} alt={'Czechy'} className={'czechy'}/>
                    <h1>Czechy</h1>
                </div>
                <div className={'leftInfo flex'}>
                    <div className={'alarm'}>
                        <p>Europejski Numer Alarmowy</p>
                        <h2>112</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Policja</p>
                        <h2>158</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Pogotowie ratunkowe</p>
                        <h2>155</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Pogotowie ratunkowe</p>
                        <h2>150</h2>
                    </div>
                </div>
            </nav>
            <div>
                <div className={'intoCountry borderDiv flex'}>
                    <h4>
                        Wjazd do kraju
                    </h4>
                    <p>
                        Na podstawie paszportu lub dowodu osobistego.Swobodny przepływ osób w ramach UE oraz
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
                        <img src={'/90.png'} alt={'80km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Drogi ekspresowe</h4>
                    <div className={'signs flex'}>
                        <img src={'/110.jpg'} alt={'110km/h'}/>
                        <img src={'/80.jpg'} alt={'80km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Autostrady i drogi ekspresowe</h4>
                    <div className={'signs flex'}>
                        <img src={'/80.jpg'} alt={'80km/h'}/>
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
                        Na podstawie drogami szybkiego ruchu i autostradami konieczne jest wykupienie winiety dla pojazdów do 3,5t dostępne są:
                    </p>
                    <p>
                        <div className={'flex moto'}>
                            <div>
                                <h4>Motocykle</h4>
                            </div>
                            <div>
                                <p>są zwolnione z opłat za przejady autostradami i drogami ekspresowymi</p>
                            </div>
                        </div>
                        <div  className={'flex cars'}>
                            <div>
                                <h4>kategoria B</h4>
                            </div>
                            <div>
                                <h4>10-dniowa:</h4>
                                <p>310 CZK</p>
                            </div>
                            <div>
                                <h4>Miesięczna</h4>
                                <p>440 CZK</p>
                            </div>
                            <div>
                                <h4>Roczna</h4>
                                <p>1500 CZK</p>
                            </div>
                        </div>
                        <p>
                            Naklejenie winiety na przedniej szynie pojazdu musi być zgodne z instukcją zawartą na naklejce.
                        </p>
                        <p>
                            Jest ona nieważna w przypadku: braku lub niewłaściwego wypełnienia winiety, braku odcinka kontrolnego nie naklejenia na szybie
                        </p>
                        <p>Winiety można kupić elektroniczne, na przejściach granicznych, stacjach benzynowych lub w urzędach pocztowych.</p>
                        <p>Szczegóły:<a href={'https://edalnice.cz/pl/index.html#/validation'} target={'_blank'}>edalnice.cz/pl/index.html#/validation</a></p>
                    </p>
                </div>
            </div>
            <div className={'driveAfterDrink borderDiv flex'}>
                <h4>
                    Dopuszczalne stężenie Alkoholu we krwi
                </h4>
                <div>
                    <div>
                        <h2>0,0%</h2>
                        <p>Zawartość alkocholu we krwi powyżej 0.0% może zostać ukarana mandatem oraz zakazaniem prowadzenia pojazdów na terenie Czech na okres 2 lat. Kierujący odmawiający badania na zawartość
                            alkoholu we krwi traktowany jest jako osoba będąca pod wpływem alkoholu</p>
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
                    <p>obowiązek używania fotelików lub siedzisk do 150cm lub 36kg) na przednim siedzeniu</p>
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
                        W przypadku korka na autostradzie ekspresowej wymaga utworzenia 3 metrowego korytarza dla pojadów ratowniczych. Nie zastosowanie się do obowiązków kierującymu pojazdem grozi mandat karny do 5000 CZK.
                        Za łamanie przepisów ruchu drogowego cudzoziemcy otrzymują dodatkowo punkty karne. Przekroczenie limitu 12 punktów kończy się zakazem prowadzenia pojazdów na terenie Czech przez okres 1 roku oraz
                        zatrzymaniem prawa jazdy
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Czechy