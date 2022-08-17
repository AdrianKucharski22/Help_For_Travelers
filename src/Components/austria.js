import React from "react"
import "../styles/main.scss"

function Austria(){
    return(
        <div className={'countryPage austria'}>
            <nav className={'countryNav border flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-austria.webp"} alt={'austria'} className={'austria'}/>
                    <h1>Austria</h1>
                </div>
                <div className={'leftInfo flex'}>
                    <p>Europejski NumerAlarmowy</p>
                    <h2>112</h2>
                </div>
            </nav>
            <div>
                <div className={'intoCountry border flex'}>
                    <h4>
                        Wjazd do kraju
                    </h4>
                    <p>
                        Na podstawi paszportu lub dowodu osobistego.Swobodny przepływ osób w ramach UE oraz
                        EuropejskiegoObszaru Gospodarczego.
                        Polskie prawo jazdy jest honorowane. Osoby poniżej 18 roku życia nie mogą prowadzić nawet jeśli mają prawo jazdy
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
                        <img src={'/100.jpg'} alt={'100km/h'}/>
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
                        Na autostradach i drogavh szybkiegu ruchu bezwzględnie wymagana jest winieta. czyli nalepka potwierdzająca wniesienie opłaty za korzystanie z płatnych dróg.
                    </p>
                    <p>Ceny winiet (w 2022 roku) wynoszą:</p>
                    <p>
                        <div className={'flex moto'}>
                            <div>
                                <h4>Kategoria A</h4>
                            </div>
                            <div>
                                <h4>10-dniowa:</h4>
                                <p>5,60 EUR</p>
                            </div>
                            <div>
                                <h4>2-Miesięczna</h4>
                                <p>14,10 EUR</p>
                            </div>
                            <div>
                                <h4>Roczna</h4>
                                <p>37,20 EUR</p>
                            </div>
                        </div>
                        <div  className={'flex cars'}>
                            <div>
                                <h4>kategoria B</h4>
                            </div>
                            <div>
                                <h4>10-dniowa:</h4>
                                <p>9,60 EUR</p>
                            </div>
                            <div>
                                <h4>2-Miesięczna</h4>
                                <p>28,20 EUR</p>
                            </div>
                            <div>
                                <h4>Roczna</h4>
                                <p>93,80 EUR</p>
                            </div>
                        </div>
                    </p>
                    <p>
                        Pojazdy muszą posiadać prawidłowo przyklejoną winietę lub  zakupić winietę cyfrową, gdy wjeżdżają na autostradę lub drogę ekspresową. Za jej brak grozi obowiązek wykupienia jednodniowej winiety zastępczej 120EUR
                    </p>
                    <p>
                        Szczegóły: <a href={'https://www.asfinag.at/en/toll/vignette/'} target={'_blank'}>asfinag.at/en/toll/vignette</a><br/>
                        Mapa z punktami sprzedaży: <a href={'https://www.asfinag.at/en/toll/sales-outlets/#PointOfSaleMap'} target={'_blank'}>asfinag.at/en/toll/sales-outlets/#PointOfSaleMap</a>
                    </p>
                    <p> Na pewnych odcinkach dróg obowiązują dodatkowe opłaty za przejazd. Szczegóły: <a href={'https://www.asfinag.at/en/toll/section-toll'} target={'_blank'}>asfinag.at/en/toll/section-toll</a></p>
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
                        <p>
                            W niektórych szczególnych okolicznościach limit ten może zostać zmiejszony do 0,1% lub mniej.
                        </p>
                        <p>
                            Zawartość alkoholu we krwi powyżej limitu może zostać ukarana mandatem i odebraniem prawa jazdy lub kilkumiesięcznym pozbawieniem wolności, nawet jeśli nie doprowadziło do kolizji.
                        </p>
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
                    <p>obowiązek używania fotelików lub siedzisk do 124cm/14 lat w foteliku lub siedzisku</p>
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
                        <a href={'https://www.oesterreich.gv.at/en/themen/freizeit_und_strassenverkehr/idz'} target={'_blank'}>oesterreich.gv.at/en/themen/freizeit_und_strassenverkehr/idz</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Austria