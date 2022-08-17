import React from "react"
import "../styles/main.scss"

function Dania(){
    return(
        <div className={'countryPage dania'}>
            <nav className={'countryNav borderDiv flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-dania.png"} alt={'Dania'} className={'dania'}/>
                    <h1>Dania</h1>
                </div>
                <div className={'leftInfo flex'}>
                    <div className={'alarm'}>
                        <p>Europejski Numer Alarmowy</p>
                        <h2>112</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Policja</p>
                        <h2>114</h2>
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
                        Europejskiego Obszaru Gospodarczego.
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
                        <img src={'/80.jpg'} alt={'80km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Autostrady i drogi ekspresowe</h4>
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
                        W danii nie ma płatnych autostrad. Opłat można spodziewać się jedynie za przejazdy niektórymi mostami. Opłata jest uzależniona od kategorii lub wagi pojazdu. Więcej informacji dostępnych jest
                        na stronach <a href={'https://storebaelt.dk/'} target={'_blank'}> storebaelt.dk </a> oraz <a href={'https://www.oresundsbron.com/sv/start'} target={'_blank'}>www.oresundsbron.com</a>
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
                        <p>Przy przekroczeniu 1,2% poliscjaodbiera prawo jazdy jeśli stężenie wynosi 2% lub więcej policja może skonfiskować samochód, sprzedać go na aukcji, a uzyskane w ten sposób środki przekazać na dochody państwa</p>
                    </div>
                    <div>
                        <h2>0,0%</h2>
                        <p>Dla kierowców początkujących posiadających prawo jazdy krócej niż 3 lata</p>
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
                    <p>obowiązek używania fotelików lub siedzisk dopasowanych dla dzieci do 135cm</p>
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
                        Przy skręcie w prawo należy szczególnie uważać na rowerzystów nadjeżdżających z tyłu, gdyż maja oni bezwzględne pierwszństwo ruchu
                    </p>
                    <p>
                        Zachowaj szczególną ostrożność przy wjazdach na autostrady. W Danii samochody włączające się do ruchu na autostradach nie mają obowiązku ustąpienia pierwszeństwa pojazdom na autostradzie. Zgodnie z obowiązującymi przepisami ruchu ma odbywać się płynnie
                    </p>
                    <p>
                        W przypadku niewielkiej kolizji drogowej policja nie ingeruje. Należy spisać dane kierowcy: imię i nazwisko; adres zaqmieszkania , numery rejestracyjne pojazdu, numer polisy ubezpieczeniowej oraz nazwę firmy ubezpieczeniowej
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Dania