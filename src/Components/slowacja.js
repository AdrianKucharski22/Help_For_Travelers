import React from "react"
import "../styles/main.scss"

function Slowacja(){
    return(
        <div className={'countryPage holandia'}>
            <nav className={'countryNav borderDiv flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-slowacja.png"} alt={'Holandia'} className={'holandia'}/>
                    <h1>Słowacja</h1>
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
                        <p>Pogotowie Ratunkowe</p>
                        <h2>155</h2>
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
                        EuropejskiegoObszaru Gospodarczego.
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
                        <img src={'/80.jpg'} alt={'80km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Autostrady i drogi ekspresowe</h4>
                    <div className={'signs flex'}>
                        <img src={'/130.jpg'} alt={'130km/h'}/>
                        <p> 90km/h w terenie zabudowanym</p>
                    </div>
                </div>
            </div>
            <div className={'payment borderDiv flex'}>
                <h4>
                    Opłaty za przejazdy
                </h4>
                <div>
                    <p>
                        Przjezad słowacki autostradami , drogami ekspresowymi oraz drogami 1 klasy podlega opłatą.
                    </p>
                    <div className={'flex moto'}>
                        <div>
                            <h4>Motocykle</h4>
                        </div>
                        <div>
                            <h4>Zwolnione z opłat</h4>
                        </div>
                    </div>
                    <div  className={'flex cars'}>
                        <div>
                            <h4>Samochody osobowe</h4>
                        </div>
                        <div>
                            <h4>10-dniowa:</h4>
                            <p>10,00 EUR</p>
                        </div>
                        <div>
                            <h4>30-dniowa:</h4>
                            <p>14,00 Euro</p>
                        </div>
                        <div>
                            <h4>Roczna</h4>
                            <p>50,00 EUR</p>
                        </div>
                    </div>
                    <p>
                        Należy pamiętać , ze roczna winieta jest ważna od dnia zakupu do 31 stycznia kolejnego roku
                    </p>
                    <p>
                        Szczegółowe informacje dotyczące elektronicznego systemu sprzedarzy winiet autosradowych (w tym także wykaz dróg podlegających
                         opłatom oraz rodzaje winiet elektronicznych ) znajdują sie na portalu internetowym: <a href={'https://eznamka.sk/sk/'} target={'_blank'}>eznamka.sk</a>
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
                            0,0%
                        </h2>
                        <p>Obowiązuje bezwzględny zakaz prowadzenia pojazdów mechanicznych po spożyciu alkocholu Każdy kierujący, który odmówi badania na zawartość alkoholu we krwi, traktowany jest jako osoba będąca pod wpływem alkoholu</p>
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
                    <p>obowiązek używania fotelików lub siedzisk  na tylnych siedzeniach do 12 lat lub 150cm </p>
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
                        Według przepisów słowackiego ruchu drogowego, jeżeli kierowcy nie zapłacą na miejscu w gotówce nałożonego mandatu
                        , zostaje zatrzymane prawo jazdy na okjres 15 dni w ciągu których powinni uiścić mandat. Zatrzymane prawo jazdy można odebrać
                        wyłącznie osobiście w urzędzie Policji , którego funkcjonariusze zatrzymali mandat
                    </p>
                    <p>
                        Wybierając się na Słowacje warto upewnić się iż posiadamy wszystkie obowiąkowe elementy wyposażenia samochodu:
                        trójkąt ostrzegawczy , kamizelka odblaskowa, gaśnica, apteczka, zapasowe żarówki i bezpieczniki, koło zapasowe z narzędziami,
                        linka holownicza
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Slowacja