import React from "react"
import "../styles/main.scss"

function Chorwacja(){
    return(
        <div className={'countryPage Chorwacja'}>
            <nav className={'countryNav border flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-chorwacja.png"} alt={'Chorwacja'} className={'Chorwacja'}/>
                    <h1>Chorwacja</h1>
                </div>
                <div className={'leftInfo flex'}>
                    <div className={'alarm'}>
                        <p>Europejski Numer Alarmowy</p>
                        <h2>112</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Policja</p>
                        <h2>92</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Pogotowie Ratunkowe</p>
                        <h2>94</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Straż pożarna</p>
                        <h2>93</h2>
                    </div>
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
                        <img src={'/90.png'} alt={'90km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Autostrady i drogi ekspresowe</h4>
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
                        Chorwackie autostrady są płatne. Opłata za podróżowanie uzależniona jest od rodzaju pojazdu oraz pokonanego odcinka.
                    </p>
                    <p>
                        Uiszcza się ją na bramkach zjazdowych. Płacić można kartą lub gotówką - w kunach i EUR lub korzystanie z systemu ENC.
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
                        <p>Dla kierowców w wieku 16-24 lata i zawodowych kierowców</p>
                    </div>
                    <div>
                        <p>Zawartość alkoholu we krwi podważanej dopuszczalnej może zostać ukarana mandatem i odebraniem prawa jazdy lub pozbawienia wolności. Chorwacka policja ma prawo zatrzymać prawo jazdy zagranicznego kierowcy na okres 8dni
                         w sytuacji gdy prowadził pojazd pod wpływem alkoholu
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
                    <p>obowiązek używania fotelików do 5 lat zakaz przewożenia dzieci 5-12 lat na przednim siedzeniu</p>
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
                        Kary pieniężne egzekwowane są na miejscu popełnianego wykroczenia lub poprzez dokonanie wpłaty na najbliższej poczcie.
                    </p>
                    <p>
                        kierowcę uczestniczącego w kolizji drogowej policja może skierować do sądu ds. wykroczeń
                    </p>
                    <p>Pojazdy parkujące w nidozwolonych miejcach są w krótkim czasie odholowywane na parkingi policyjne a kierowcy obłożeni są wysokimi karami pieniężnymi</p>
                </div>
            </div>
        </div>
    );
}
export default Chorwacja