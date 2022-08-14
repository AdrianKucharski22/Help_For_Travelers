import React from "react"
import "../styles/main.scss"

function Slowenia(){
    return(
        <div className={'countryPage slowenia'}>
            <nav className={'countryNav border flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-slowenia.png"} alt={'Slowenia'} className={'Slowenia'}/>
                    <h1>Słowenia</h1>
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
                <div className={'intoCountry border flex'}>
                    <h4>
                        Wjazd do kraju
                    </h4>
                    <p>
                        Na podstawi paszportu lub dowodu osobistego. Szwajcaria jest stroną Układu Schengen.
                        Polskie prawo jazdy jest honorowane.
                    </p>
                </div>
            </div>
            <div className={'speedLimitations border flex'}>
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
            <div className={'payment border flex'}>
                <h4>
                    Opłaty za przejazdy
                </h4>
                <div>
                    <p>
                        Wszystkie autostrady i drogi ekspresowe są płatne. Pojazdy o dopuszczalnej masie całkowitej do 3,5t oraz motocykle
                         muszą posiadać ważną winietę. Opłaty na bramkach mogą uiszczać wyłącznie kierujący samochodami ciężarowymi i autobusami
                        .kierujący pojazdami dla których obowiązkowe są winiety nie muszą dokonywać tam żadnych opłat za przejazd
                    </p>
                    <p>
                        System winiet do 3,5t:
                    </p>
                    <p>
                        <div className={'flex moto'}>
                            <div>
                                <h4>Motocykle</h4>
                                <p>Jednośladowe</p>
                            </div>
                            <div>
                                <h4>Tygodniowa:</h4>
                                <p>7,50 EUR</p>
                            </div>
                            <div>
                                <h4>Półroczna</h4>
                                <p>30,00 Euro</p>
                            </div>
                            <div>
                                <h4>Roczna</h4>
                                <p>55,00 EUR</p>
                            </div>
                        </div>
                        <div  className={'flex cars'}>
                            <div>
                                <h4>Samochody osobowe</h4>
                            </div>
                            <div>
                                <h4>Tygodniowa:</h4>
                                <p>15,00 EUR</p>
                            </div>
                            <div>
                                <h4>Półroczna</h4>
                                <p>30,00 Euro</p>
                            </div>
                            <div>
                                <h4>Roczna</h4>
                                <p>110,00 EUR</p>
                            </div>
                        </div>
                        <div className={'flex moto'}>
                            <div>
                                <h4>Samochody osobowe</h4>
                                <p>wysokość nad przednią osią <br/> wynosi conajmniej 1,30 m lub więcej</p>
                            </div>
                            <div>
                                <h4>Tygodniowa:</h4>
                                <p>30,00 EUR</p>
                            </div>
                            <div>
                                <h4>Półroczna</h4>
                                <p>60,00 Euro</p>
                            </div>
                            <div>
                                <h4>Roczna</h4>
                                <p>220,00 EUR</p>
                            </div>
                        </div>
                    </p>
                    <p>
                        Winiety tygodniowe i miesięczne ważne są od dnia zakupu.
                    </p>
                    <p>
                        Winiety można nabyć na stacjach benzynowych i w regionach przygranicznych , a także na pocztach i w kioskach
                        na terytorium Słowenii
                    </p>
                    <p>
                        Szegóły dotyczące winiet sa dostępne na stronie: <a href={'https://www.gov.pl/web/dyplomacja'}>Winiety</a>
                    </p>
                </div>
            </div>
            <div className={'driveAfterDrink border flex'}>
                <h4>
                    Dopuszczalne stężenie Alkoholu we krwi
                </h4>
                <div>
                    <div>
                        <h2>
                            0,5%
                        </h2>
                        <p>Dla kierowców doświadczonych</p>
                    </div>
                    <div>
                        <h2>0,0%</h2>
                        <p>Dla kierowców początkujących</p>
                    </div>
                </div>
            </div>
            <div className={'safety border flex'}>
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
                    <p>obowiązek używania fotelików lub siedzisk do 150cm</p>
                </div>
                <div className={'flex'}>
                    <img src={"/tel.webp"}/>
                    <p>zakaz rozmawiania podczas jazdy przez telefon komórkowy bez zestawu głośno mówiącego</p>
                </div>
            </div>
            <div className={'caution border flex'}>
                <h4>Uwaga</h4>
                <div>
                    <p>
                        Ze względu na dużą liczbę informacji dodatkowych , dotyczących m.in. usług holowania na słoweńskich autostradach zalecamy zapoznanie się z informacjami na stronie: <a href={'https://www.gov.pl/web/dyplomacja'}>Informacje</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Slowenia