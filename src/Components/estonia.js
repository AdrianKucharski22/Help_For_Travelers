import React from "react"
import "../styles/main.scss"

function Estonia(){
    return(
        <div className={'countryPage estonia'}>
            <nav className={'countryNav borderDiv flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-estonia.webp"} alt={'Estonia'} className={'estonia'}/>
                    <h1>Estonia</h1>
                </div>
                <div className={'leftInfo flex'}>
                    <div className={'alarm'}>
                        <p>Europejski Numer Alarmowy</p>
                        <h2>112</h2>
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
                        Europejskiego Obszaru Gospodarczego. Podróżując samochodem, którego właścicielem jest inna osoba należy posiadać stosowne potfierdzenie
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
                    <h4>Autostrady i drogi ekspresowe</h4>
                    <div className={'signs flex'}>
                        <img src={'90.png'} alt={'90km/h'}/>
                        <img src={'/110.jpg'} alt={'110km/h'}/>
                    </div>
                </div>
            </div>
            <div className={'payment borderDiv flex'}>
                <h4>
                    Opłaty za przejazdy
                </h4>
                <div>
                    <p>
                        Przejzady dla pojazdów osobowych po autostradach i drogach szybkiego ruchu są bezpłatne
                    </p>
                </div>
            </div>
            <div className={'driveAfterDrink borderDiv flex'}>
                <h4>
                    Dopuszczalne stężenie Alkoholu we krwi
                </h4>
                <div>
                    <div>
                        <h2>0,2%</h2>
                        <p>Estońska policja surowo karze kierowców którzy przekraczają limit. W zależności od sytuacji możesz spodziewać się wysokiej grzywny i odebrania prawa jazdy lub, w najgorszym wypadku, kary pozbawinia wolności.</p>
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
                    <p>fotelik lub siedzisko jest obowiązkowe gdy dziecko nie jest wystarczająco wysokie aby zapiąc pas bezpieczeństwa zgodnie z wymogami określonymi przez producenta pojazdu</p>
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
                        Światła do jazdy dziennej są obowiązkowe nawet w godzinach dziennych.
                    </p>
                    <p>
                        Estonia przystąpiła do unijnego systemu wymiany informacji o ruchu drogowym z kamer rejestracyjnych co wyeliminuje możliwość uniknięcia konsekwencji przez kierowców z innych krajów UE łamiących przepisy
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Estonia