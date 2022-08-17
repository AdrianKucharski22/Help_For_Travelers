import React from "react"
import "../styles/main.scss"

function Portugalia(){
    return(
        <div className={'countryPage portugalia'}>
            <nav className={'countryNav borderDiv flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-portugalia.png"} alt={'Portugalia'} className={'portugalia'}/>
                    <h1>Portugalia</h1>
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
                        Na podstawi paszportu lub dowodu osobistego, również w regionach Autonomicznych Madery i Azorów
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
                        <img src={'/100.jpg'} alt={'110km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Autostrady</h4>
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
                       System autostrad i dróg ekspresowych w Portugalii jest Płatny. Opłata za podróżowanie uzależniona jest od rodzaju pojazdu oraz pokonanego odcinka.
                        Opłat uiszcza się tradycyjnie w bramkach lub za pośrednictwem elektronicznego systemu
                    </p>
                    <p>
                        W przypadku autostrad z wyłącznie elektronicznym systemem poboru opłat(dawne autostrady SCUT) które są specjalnie
                         oznakowane za przejazd turysta musi zapłacić przed wjazdem na drogę kupując bilet Troll CARD bilet wirtualny lub tymczasowe urządzenie CTT
                    </p>
                    <p>
                        acm.gov.pl/-/como-se-processa-o-pagamento-das-portagens-eletronicas
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
                    <img src={"/helmet.svg"}/>
                    <p>obowiązek posiadania kasku dla wszystkich rodzajów motocykli , quadów itp</p>
                </div>
                <div className={'flex'}>
                    <img src={"/pasy.webp"}/>
                    <p>obowiązek zapinania pasów bezpieczeństwa na wszystkich siedzeniach samochodu</p>
                </div>
                <div className={'flex'}>
                    <img src={"/baby.png"}/>
                    <p>obowiązek używania fotelików lub siedzisk do 12 lat lub 135cm Zabrania się przewożenia dzieci na przednim siedzeniu</p>
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
                        W Portugalii obowiązują surowe przepisy w zakresie sprawdzania ważności polis ubezpieczenia OC. Jeśli policja stwierdzi brak ważnej polisy
                         może ukarać kierowce mandatem w wysokości od 500 do 2,500 EUR a także zatrzymać pojazd do czasu wyjaśnienia i opłacenia
                         wszelkich kosztów związanych z przywróceniem ważności polisy ubezpieczeniowej
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Portugalia