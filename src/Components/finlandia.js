import React from "react"
import "../styles/main.scss"

function Finlandia(){
    return(
        <div className={'countryPage finlandia'}>
            <nav className={'countryNav border flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-finlandia.png"} alt={'Finlandia'} className={'finlandia'}/>
                    <h1>Finlandia</h1>
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
                        <img src={'/80.jpg'} alt={'80km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Autostrady i drogi ekspresowe</h4>
                    <div className={'signs flex'}>
                        <img src={'/80.jpg'} alt={'80km/h'}/>
                        <img src={'/100.jpg'} alt={'100km/h'}/>
                        <img src={'/120.jpg'} alt={'120km/h'}/>
                    </div>
                </div>
            </div>
            <div className={'payment border flex'}>
                <h4>
                    Opłaty za przejazdy
                </h4>
                <div>
                    <p>
                        Korzystanie z autostrad i mostów w Finladii jest bezpłatne.
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
                        <p>Osobą prowadzącym samochód pod wpływem alkocholu grozi kara pozbawienia wolności do 6 miesięcy i zakaz prowadzenia pojazdu na okres do 5 lat</p>
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
                    <p>obowiązek używania fotelików dostosowanych do wzrostu u dzieci do 135cm</p>
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
                        Użycie klaksonu dopuszczalne jest jedynie w celu uniknięcia zagrożenia.
                    </p>
                    <p>
                        Bezwzględnie nalezy ustępować pierwszeństwa pieszym i rowerzystom.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Finlandia