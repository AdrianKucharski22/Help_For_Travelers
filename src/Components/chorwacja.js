import React from "react"
import "../styles/main.scss"

function Chorwacja(){
    return(
        <div className={'countryPage holandia'}>
            <nav className={'countryNav border flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-holandia.webp"} alt={'Holandia'} className={'holandia'}/>
                    <h1>Holandia</h1>
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
                        <img src={'/100.jpg'} alt={'100km/h'}/>
                        <img src={'/120.jpg'} alt={'120km/h'}/>
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
                        Korzystanie z dróg szybkiego ruchu na terenie królestwa Niderlandów jest bezpłatne.
                    </p>
                    <p>
                        Opłat można spodziewac się jedynie za przejazd niektórymi tunelamu np.Dordse Kill w regionie
                        Biesbosch (ok 2E) i Westerschelde między wyspą Zeeland a trasą Baarland-Temeuzen(ok 3E)
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
                        <p>Dla kierowców początkujących posiadających prawo jazdy krócej niż 5 lat</p>
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
                    <p>obowiązek używania fotelików lub siedzisk do 12 lat lub 150cm dzieci do lat 3 wyłącznie na tylnym siedzeniu</p>
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
                        Parkowanie w miastach jest mozliwe wyłącznie na wyznaczonych do tego miejscach od poniedziałku do piątku
                        płatne są niemal wszystkie miejsca postoowe a w duzych miastach takze w weekendy Turysci moga parkowac z tzw transferiach.
                        czyli parkingachulokowanych na obrzeszach miast przy parkowaniu na transferach otrzymije sie darmowe bilety na komunikację publiczną
                    </p>
                    <p>
                        Kraj pokryty jest gęstą siecia fotoradarów oraz odcinkowych pomiarach prędkosci.Jeśli przekroczysz dozwoloną prędkość
                        o ponad 50km/h samochód może zostac skonfiskowany,Jeżeli popełnisz w Holandi powazne wykroczenie drogowe a nie jestes w tym kraju zameldowany
                        możesz zostać zobowiązany przez prokuratora do opłacenia mandatu natychmiast po jego wymierzeniu .
                    </p>
                    <p>
                        Jako kierowca zwracaj szczególna uwagę na rowerzystów.Na ścierzkach rowerowych mają oni zawsze pierwszeństwo.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Chorwacja