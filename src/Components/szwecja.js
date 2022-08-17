
function Szwecja(){
    return(
        <div className={'countryPage Szwecja'}>
            <nav className={'countryNav borderDiv flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-szwecja.webp"} alt={'Szwecja'} className={'szwecja'}/>
                    <h1>Szwecja</h1>
                </div>
                <div className={'leftInfo flex'}>
                    <div className={'alarm'}>
                        <p>Europejski Numer Alarmowy</p>
                        <h2>112</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Policja</p>
                        <h2>114 14</h2>
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
                        <img src={'/70.png'} alt={'70km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Autostrady i drogi ekspresowe</h4>
                    <div className={'signs flex'}>
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
                       Korzystanie z dróg i autosrad w Szwecji jest bezpłatne.
                    </p>
                    <p>
                        Opłat można się spodziewać jedynie za przejazdy mostami łączącymi Szwecję z Norwegią i Danią
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
                        <p>
                            Szwedzka policja surowo podchodzi do kierowców którzy przekroczą limit. W zależności od sytuacji
                            można spodziewać się wysokiego mandatu i odebrania prawa jazdy lub w przypadku spowodowania wypadku pozbawienia wolności

                        </p>
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
                    <p>obowiązek używania fotelików dostosowanych do wzrostu dla dzieci do 135cm</p>
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
                        W Szwecji obowiązują Szczególne przepisy dotyczące parkowania, należy m. in. sprawdzić w jakich dniach parkowanie w danym miejscu jest niedozwolone zazwyczaj można to sprawdzić na tablicach przy samych drogach.
                    </p>
                    <p>
                        Podczas parkowania przy ulicach należy zwrócić uwagę czy pojazd jest zaparkowany poprawnie - min 10 metrów od skrzyżowania.
                    </p>
                    <p>
                        Dodatkowo obowiązuje całkowity zakaz parkowania na chodzikach i na terenach zielnych
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Szwecja