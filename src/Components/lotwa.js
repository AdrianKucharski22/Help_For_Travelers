import React from "react"
import "../styles/main.scss"

function Lotwa(){
    return(
        <div className={'countryPage lotwa'}>
            <nav className={'countryNav border flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-lotwa.webp"} alt={'Łotwa'} className={'lotwa'}/>
                    <h1>Łotwa</h1>
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
                        Europejskiego Obszaru Gospodarczego.
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
                    <h4>Autostrady i drogi ekspresowe</h4>
                    <div className={'signs flex'}>
                        <img src={'/100.jpg'} alt={'100km/h'}/>
                    </div>
                </div>
            </div>
            <div className={'payment border flex'}>
                <h4>
                    Opłaty za przejazdy
                </h4>
                <div>
                    <p>
                        Korzystanie z dróg jest bezpłatne.Wyjątek stanowi wjazd własnym środkiem transportu do strefy Jurmaly(w okresie od 1 kwietnia do 30 września)
                         należy wnieść opłatę na cele ekologiczne w wysokości 2EUR
                    </p>
                    <p>
                        Opłat można dokonać w przydrożnych automatach internecie <a href={'https://www.jurmala.lv/lv/caurlaides'} target={'_blank'}>
                        jurmala.lv/lv/caurlaides</a> lub aplikacji "Mobily".
                    </p>
                    <p>
                        Opłat można się też spodziewac na niektórych odcinkach dróg P5 oraz P80.Szczegółowe informacje <a href={'https://lvvignette.eu/'} target={'_blank'}>
                        lvvignette.eu</a>
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
                        <h2>0,2%</h2>
                        <p>Dla kierowców początkujących posiadających prawo jazdy krócej niż 2 lata</p>
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
                    <p>obowiązek używania fotelików lub siedzisk do 10 lat lub 150cm</p>
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
                    Wiecej praktycznych rad znajdziesz na stronie <a href={'https://latvia.travel/en'} target={'_blank'}>latvia.travel/en</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Lotwa