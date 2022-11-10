import flagaBulgaria from "../JPG/flaga-bulgaria.png"
import helmet from "../JPG/helmet.svg"
import max100 from "../JPG/100.jpg"
import max50 from "../JPG/50.webp"
import max80 from "../JPG/80.jpg"
import max90 from "../JPG/90.png"
import max120 from "../JPG/120.jpg"
import max140 from "../JPG/140.png"
import pasy from "../JPG/pasy.webp"
import baby from "../JPG/baby.png"
import tel from "../JPG/tel.webp"

function Bulgaria(){
    return(
        <div className={'countryPage holandia'}>
            <nav className={'countryNav borderDiv flex'}>
                <div className={'flex'}>
                    <img src={flagaBulgaria} alt={'Bułgaria'} className={'holandia'}/>
                    <h1>Bułgaria</h1>
                </div>
                <div className={'leftInfo flex'}>
                    <div className={'alarm'}>
                        <p>Europejski Numer Alarmowy</p>
                        <h2>112</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Policja</p>
                        <h2>166</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Pogotowie ratunkowe</p>
                        <h2>150</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Straż pożarna</p>
                        <h2>160</h2>
                    </div>
                </div>
            </nav>
            <div>
                <div className={'intoCountry borderDiv flex'}>
                    <h4>
                        Wjazd do kraju
                    </h4>
                    <p>
                        Na podstawie paszportu lub dowodu osobistego.Swobodny przepływ osób w ramach UE oraz
                        Europejskiego Obszaru Gospodarczego.
                        Polskie prawo jazdy jest honorowane. Podróżując samochodem którego właścicielem jest inna osoba należy posiadać notarialne pełnomocnictwo przetłumaczone na język bułgarski, francuski lub niemiecki.
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
                    <div className={'signs flex'}>
                        <img src={max80} alt={'80km/h'}/>
                        <img src={max90} alt={'90km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Drogi ekspresowe</h4>
                    <div className={'signs flex'}>
                        <img src={max100} alt={'100km/h'}/>
                        <img src={max120} alt={'120km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Autostrady</h4>
                    <div className={'signs flex'}>
                        <img src={max100} alt={'100km/h'}/>
                        <img src={max140} alt={'140km/h'}/>
                    </div>
                </div>
            </div>
            <div className={'payment borderDiv flex'}>
                <h4>
                    Opłaty za przejazdy
                </h4>
                <div>
                    <p>
                        Obowiązują winiety elektroniczne. Pojazdy o masie całkowitej równej lub nieprzekraczającej 3,5t podlega opłacie czasowej (e-winieta) za korzystanie z sieci dróg krajowych
                        (autostrady, drogi 1, 2, 3  klasy) Winietę elektroniczną można kupić za pośrednictwem strony internetowej <a href={'https://www.bgtoll.bg/'} target={'_blank'}>www.bgtoll.bg</a> aplikacji mobilnej BGTOLL, terminali samoobsługowych
                         w punktach sprzedaży w punktach kontroli granicznej
                    </p>
                    <p>
                        <div  className={'flex cars'}>
                            <div>
                                <h4>Weekendowa:</h4>
                                <p>10 BGN</p>
                            </div>
                            <div>
                                <h4>Tygodniowa:</h4>
                                <p>15 BGN</p>
                            </div>
                            <div>
                                <h4>Miesięczna</h4>
                                <p>30 BGN</p>
                            </div>
                            <div>
                                <h4>Kwartalna:</h4>
                                <p>54 BGN</p>
                            </div>
                            <div>
                                <h4>Roczna</h4>
                                <p>97 BGN</p>
                            </div>
                        </div>
                    </p>
                    <p>
                        Ważna od piątku 00:00 do niedzieli 23:59
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
                        <p>Zawartość alkocholu we krwi powyżej 0,5% może zostać ukarana mandatem i odebraniem prawa jazdy</p>
                    </div>
                </div>
            </div>
            <div className={'safety borderDiv flex'}>
                <div className={'flex'}>
                    <img src={helmet}/>
                    <p>obowiązek posiadania kasku dla wszystkich rodzajów motocykli , quadów itp</p>
                </div>
                <div className={'flex'}>
                    <img src={pasy}/>
                    <p>obowiązek zapinania pasów bezpieczeństwa na wszystkich siedzeniach samochodu</p>
                </div>
                <div className={'flex'}>
                    <img src={baby}/>
                    <p>obowiązek używania fotelików do 3 lat zakaz przewożenia dzieci od lat 3 lub do 150cm na przednim siedzeniu</p>
                </div>
                <div className={'flex'}>
                    <img src={tel}/>
                    <p>zakaz rozmawiania podczas jazdy przez telefon komórkowy bez zestawu głośno mówiącego</p>
                </div>
            </div>
            <div className={'caution borderDiv flex'}>
                <h4>Uwaga</h4>
                <div>
                    <p>
                        Bługarska policja drogowa oraz inspekcja drogowa bardzo restrykcyjnie stosuje określenie kary za wykroczenie w ruchu drogowym.
                    </p>
                    <p>
                        Za przejazd na czerwonym świetle kierowcy grozi mandat i odebranie prawa jazdy oraz dowodu rejestracyjnego pojazdu.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Bulgaria