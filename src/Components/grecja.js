import React from "react"
import "../styles/main.scss"

function Grecja(){
    return(
        <div className={'countryPage grecja'}>
            <nav className={'countryNav borderDiv flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-grecja.png"} alt={'Grecja'} className={'grecja'}/>
                    <h1>Grecja</h1>
                </div>
                <div className={'leftInfo flex'}>
                    <div className={'alarm'}>
                        <p>Europejski Numer Alarmowy</p>
                        <h2>112</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Policja</p>
                        <h2>100 lub 171</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Pogotowie Ratunkowe</p>
                        <h2>166</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Straż pożarna</p>
                        <h2>199</h2>
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
                        Greckie autostrady są płatne. Opłata za podróżowanie uzależnione jest od rodzaju pokonanego odcinka. Opłat uiszcza się na bramkach.
                         Greckie autostrady należą do najtańszych w Europie a kwota jaką musimy zostawić na bramkach to z reguły od 1,5 do 3 EUR za przejazd. Warto wcześniej przygotować mniejsze kwoty w bilonie.
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
                            0,5%
                        </h2>
                        <p>Dla kierowców doświadczonych</p>
                    </div>
                    <div>
                        <h2>0,2%</h2>
                        <p>Dla kierowców początkujących ( do 23 roku życia)</p>
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
                    <p>obowiązek używania fotelików lub siedzisk do 12 lat. Zakaz przewozu na przednich siedzeniach do 12 lat</p>
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
                        Oprócz autostrad, opłaty są pobierane za przejazd mostemRion Antirion Bridge oraz tunelem Akteo Tunnel.
                    </p>
                    <p>
                        Osoby nie mieszkające na stałe w Grecji nie mogą prowadzić pojazdów należących do osób prywatnych zamieszkałych w tym kraju.
                        Baczną uwagę należy również zwrócić na dopuszczalny ciężar ładunku, wynikający z dokumentacji przewozowej pojazdu.
                        Ładunki cięższe niż dopuszczalne wiążą się z nałożeniem wysokich mandatów i unieruchomieniem pojazdu.
                    </p>
                    <p>
                        W Grecji pojazd, który porusza się po rondzie musi ustąpić pierwszeństwa pojazdom, które włączają się do ruchu na rondo.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Grecja