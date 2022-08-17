import React from "react"
import "../styles/main.scss"

function Wegry(){
    return(
        <div className={'countryPage wegry'}>
            <nav className={'countryNav borderDiv flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-wegry.png"} alt={'Holandia'} className={'wegry'}/>
                    <h1>Węgry</h1>
                </div>
                <div className={'leftInfo flex'}>
                    <div className={'alarm'}>
                        <p>Europejski Numer Alarmowy</p>
                        <h2>112</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Policja</p>
                        <h2>107</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Pogotowie Ratunkowe</p>
                        <h2>104</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Straż Pożarna</p>
                        <h2>105</h2>
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
                        <img src={'/90.png'} alt={'90km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Drogi ekspresowe</h4>
                    <div className={'signs flex'}>
                        <img src={'/110.jpg'} alt={'110km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Autostrady</h4>
                    <div className={'signs flex'}>
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
                        Przejazd autostradami i drogami pierwszej kategorii jest płatny. Winiety różnią się cena w zależności od zasięgu obowiązywania.
                        Dostępne są winiety Krajowe i wojewódzkie. Na stronie internetowej <a href={'https://toll-charge.hu/'} target={'_blank'}>toll-charge.hu</a> można znaleźć wykaz bezpłatnych odcinków dróg a także więcej
                    </p>
                    <p>
                        <div className={'flex moto'}>
                            <div>
                                <h4>Motocykle</h4>
                                <p>Koszt bez przyczep</p>
                            </div>
                            <div>
                                <h4>10-dniowa:</h4>
                                <p>1 600 HUF</p>
                            </div>
                            <div>
                                <h4>Miesięczna</h4>
                                <p>2730 HUF</p>
                            </div>
                            <div>
                                <h4>Roczna</h4>
                                <p>46 850 HUF</p>
                            </div>
                        </div>
                        <div  className={'flex cars'}>
                            <div>
                                <h4>Samochody osobowe</h4>
                                <p>do 7 osób lub 3,5t</p>
                            </div>
                            <div>
                                <h4>10-dniowa:</h4>
                                <p>3 820 HUF</p>
                            </div>
                            <div>
                                <h4>Miesięczna</h4>
                                <p>5210 HUF</p>
                            </div>
                            <div>
                                <h4>Roczna</h4>
                                <p>46 850 HUF</p>
                            </div>
                        </div>
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
                        <p>
                            Obowiązuje bezwzględny zakaz prowadzenia pojazdów mechanicznych po spożyciu alkocholu Każdy kierujący, który odmówi
                            badania na zawartość alkoholu we krwi, traktowany jest jako osoba będąca pod wpływem alkoholu
                        </p>
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
                    <p>obowiązek używania fotelików lub siedzisk do 12 lat lub 150cm dzieci do lat 3 wyłącznie na tylnym siedzeniu</p>
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
                        Na Węgrzech policjant nie może przyjąć gotówki. W celu uregulowania kary wydawany jest drukowany
                        czek m.in. zawierający dane dot.wpłaty z informacjami, za co nałożona została kara. Do czasu
                        opłacenia kary pieniężnej organ kątrolujący może zatrzymać dowód rejestracyjny pojazdu. również
                        sam pojazd.
                    </p>
                    <p>
                        Możliwe jest też zatrzymanie samochodu na badanie techniczne (do 2h)mimo posiadanego ważnego
                        przeglądu technicznego W przypadku postępowania administracyjnego właściwy organ (policja, urząd
                        celny) ma obowiązek zapewnienia tłumacza.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Wegry