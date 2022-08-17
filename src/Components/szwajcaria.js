
function Szwajcaria(){
    return(
        <div className={'countryPage Szwajcaria'}>
            <nav className={'countryNav borderDiv flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-szwajcaria.png"} alt={'Szwajcaria'} className={'Szwajcaria'}/>
                    <h1>Szwajcaria</h1>
                </div>
                <div className={'leftInfo flex'}>
                    <div className={'alarm'}>
                        <p>Pogotowie Lotnicze</p>
                        <h2>1414</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Policja</p>
                        <h2>117</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Pogotowie Ratunkowe</p>
                        <h2>144</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Straż Pożarna</p>
                        <h2>118</h2>
                    </div>
                </div>
            </nav>
            <div>
                <div className={'intoCountry borderDiv flex'}>
                    <h4>
                        Wjazd do kraju
                    </h4>
                    <p>
                        Na podstawi paszportu lub dowodu osobistego. Szwajcaria jest stroną Układu Schengen.
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
                    <h4>Drogi Ekspresowe</h4>
                    <div className={'signs flex'}>
                        <img src={'/100.jpg'} alt={'100km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Autostrady </h4>
                    <div className={'signs flex'}>
                        <img src={'/120.jpg'} alt={'120km/h'}/>
                    </div>
                </div>
            </div>
            <div className={'payment borderDiv flex'}>
                <h4>
                    Opłaty za przejazdy
                </h4>
                <div>
                    <p>
                        W Szwajcarii obowiązuje opłata drogowa za przejazd autostradami w formie rocznej winiety, ważnej od 1 grudnia
                         roku poprzedniego do 31 Stycznia roku następnego. Winietę można nabyć na przejściach granicznych
                        za 40 franków szwajcarskich
                    </p>
                    <p>
                       Winieta , na samochodzie ,powinna być naklejona na środku (za lusterkiem) lub w lewym dolnym lub górnym rogu przedniej szyby(od strony kierowcy),
                        tak aby nie przysłaniać drogi.Motocykliści naklejają winietę na wewnętrznej stronie dolnej owiewki lub na innej widocznej części której nie można wymienić.
                        Brak winiety wiążę się z koniecznością jej wykupienia i zapłacenia dodatkowej kary : 200 CHF
                    </p>
                    <p>
                        Dodatkowych opłat można spodziewać się za przejazdy tunelami
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
                        <h2>0,1%</h2>
                        <p>Dla kierowców początkujących (z tzw. próbnym prawo jazdy) i zawodowych kierowców)</p>
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
                    <p>obowiązek używania fotelika lub siedzisk do 7 lat, 7-12 lat obowiązek stosowania specjalnych pasów</p>
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
                        W Szwajcari obowiązuje zakaz noclegu poza wyznaczonymi do tego miejscami np. na parkingach przy autostradach
                    </p>
                    <p>
                        Turysta zagraniczny nie ma możliwości uzyskania mandatu kredytowego , należność należy opłacić na miejscu w gotówce
                    </p>
                    <p>
                        Wiele tuneli i dróg w górach posiada ograniczenia co do wysokości , długości , szerokości i ciężaru pojazdów przez nie przejeżdżających
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Szwajcaria