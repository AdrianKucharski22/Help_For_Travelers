import flagaNiemcy from "../JPG/flaga-niemcy.png"
import helmet from "../JPG/helmet.svg"
import max50 from "../JPG/50.webp"
import max80 from "../JPG/80.jpg"
import max130 from "../JPG/130.jpg"
import pasy from "../JPG/pasy.webp"
import baby from "../JPG/baby.png"
import tel from "../JPG/tel.webp"

function Niemcy(){
    return(
        <div className={'countryPage'}>
            <nav className={'countryNav borderDiv flex'}>
                <div className={'flex'}>
                    <img src={flagaNiemcy} alt={'Niemcy'}/>
                    <h1>Niemcy</h1>
                </div>
                <div className={'leftInfo flex'}>
                    <div className={'alarm'}>
                        <p>Europejski Numer Alarmowy</p>
                        <h2>112</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Policja</p>
                        <h2>110</h2>
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
                        <img src={max50} alt={'50km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Teren Niezabudowany</h4>
                    <div>
                        <img src={max80} alt={'80km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Autostrady i drogi ekspresowe</h4>
                    <div className={'signs flex'}>
                        <img src={max130} alt={'130km/h'}/>
                        <p>Prędkość Zalecana</p>
                    </div>
                </div>
            </div>
            <div className={'payment borderDiv flex'}>
                <h4>
                    Opłaty za przejazdy
                </h4>
                <div>
                    <p>
                        Autostrady w Niemczech są bezpłatne.
                    </p>
                    <p>
                        W niektórych miastach zostały wprowadzone strefy ekologiczne (oznaczone znakami drogowymi
                        z napisem Umweltzone).Prawo wjazdu do nich, mają jedynie samochody osobowe i ciężarowe oznaczone
                        specjalną czerwoną , żółtą lub zieloną plakietka z wpisanym numerem rejestracyjnym.
                        Plakietki za ok. 6E można nabyć w urzędach komunikacji ,na stacjach diagnostycznych oraz autostradowych
                        warsztatach na terenie Niemiec. Szczegółowe informacje na temat stref można znaleźć na stronie internetowej.
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
                        <h2>0,0%</h2>
                        <p>Dla kierowców początkujących (do 21 roku życia lub posiadających prawo jazdy krócej niż 2 lata)</p>
                    </div>
                </div>
            </div>
            <div className={'safety borderDiv flex'}>
                <img src={helmet}/>
                <p>obowiązek posiadania kasku dla wszystkich rodzajów motocykli , quadów itp</p>
                <img src={pasy}/>
                <p>obowiązek zapinania pasów bezpieczeństwa na wszystkich siedzeniach samochodu</p>
                <img src={baby}/>
                <p>obowiązek używania fotelików lub siedzisk do 12 lat lub 150cm dzieci do lat 3 wyłącznie na tylnym siedzeniu</p>
                <img src={tel}/>
                <p>zakaz rozmawiania podczas jazdy przez telefon komórkowy bez zestawu głośno mówiącego</p>
            </div>
            <div className={'caution borderDiv flex'}>
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
export default Niemcy