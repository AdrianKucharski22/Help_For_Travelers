import flagaWlochy from "../JPG/flaga-wlochy.webp"
import max50 from "../JPG/50.webp"
import max80 from "../JPG/80.jpg"
import max130 from "../JPG/130.jpg"
import helmet from "../JPG/helmet.svg"
import pasy from "../JPG/pasy.webp"
import baby from "../JPG/baby.png"
import tel from "../JPG/tel.webp"

function Wlochy(){
    return(
        <div className={'countryPage Wlochy'}>
            <nav className={'countryNav borderDiv flex'}>
                <div className={'flex'}>
                    <img src={flagaWlochy} alt={'Włochy'} className={'wlochy'}/>
                    <h1>Włochy</h1>
                </div>
                <div className={'leftInfo flex'}>
                    <div className={'alarm'}>
                    <p>Europejski Numer Alarmowy</p>
                    <h2>112</h2>
                    </div>
                    <div className={'alarm'}>
                    <p>Policja</p>
                    <h2>113</h2>
                    </div>
                    <div className={'alarm'}>
                    <p>Pogotowie Ratunkowe</p>
                    <h2>118</h2>
                    </div>
                    <div className={'alarm'}>
                    <p>Straż Pożarna</p>
                    <h2>115</h2>
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
                    </div>
                </div>
            </div>
            <div className={'payment borderDiv flex'}>
                <h4>
                    Opłaty za przejazdy
                </h4>
                <div>
                    <p>
                        Większość Autostrad na terebue Włoch jest płatna .Należność uiszcza się bezpośrednio przy zjazdach z Autostrad w konkretnych miejscowościach benzynowych bądź w pośrednich punktach poboru opłat.Płacić można kartą, gotówką lub specjalnymi kartami VIACARD, które można kupić na stacjach benzynowych i wybranych biurach podróży.
                    </p>
                    <p>
                        Opłata zależna jest od klasy pojazdu .Wiecej informacji na temat przepisów podziału klas pojazdów a także wysokości opłat przejazdowych obowiązujących na włoskich autosradach uzyskać można na stronie <a href={'https://www.autostrade.it/it/home'} target={'_blank'}>autostrade.it</a>
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
                        <p>Dla kierowców początkujących posiadających prawo jazdy krócej niż 3 lata</p>
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
                    <p>obowiązek używania fotelików lub siedzisk do 12 lat lub 150cm dzieci do lat 3 wyłącznie na tylnym siedzeniu</p>
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
                    Zgodnie z włoskim kodeksem drogowym kierowcy pojazdów zarejestrowanych za granicą są zobowiązani do natychmiastowego opłacenia mandatów w miejscu zdrarzenia.
                    W przypadku gry nie jest to możliwe samochód musi być pozostawiony na parkingu depozytowym wyznaczonym przez nakładające karę służby
                    </p>
                    <p>
                        Kierowca w takim przypadku jest zobowiazany do pokrycia kosztów postoju pojazdu na parkingu. Mandat przyjęty i zapłacony jest równoznaczny z przyznaniem się do wykroczenia drogowego i powoduje brak możliwości odwołania się do wyższej instancji.
                    </p>
                    <p>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Wlochy