import flagaFrancja from "../JPG/flaga-francja.png"
import helmet from "../JPG/helmet.svg"
import max50 from "../JPG/50.webp"
import max80 from "../JPG/80.jpg"
import max110 from "../JPG/110.jpg"
import max130 from "../JPG/130.jpg"
import pasy from "../JPG/pasy.webp"
import baby from "../JPG/baby.png"
import tel from "../JPG/tel.webp"

function Francja(){
    return(
        <div className={'countryPage francja'}>
            <nav className={'countryNav borderDiv flex'}>
                <div className={'flex'}>
                    <img src={flagaFrancja} alt={'Francja'} className={'francja'}/>
                    <h1>Francja</h1>
                </div>
                <div className={'leftInfo flex'}>
                    <div className={'alarm'}>
                        <p>Europejski Numer Alarmowy</p>
                        <h2>112</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Policja</p>
                        <h2>17</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Pogotowie Ratunkowe</p>
                        <h2>15</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Straż pożarna</p>
                        <h2>18</h2>
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
                    <h4>Drogi ekspresowe</h4>
                    <div className={'signs flex'}>
                        <img src={max110} alt={'110km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Autostrady</h4>
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
                        Francuskie autostradyu są płatne. Opłata za podróżowanie uzależniona jest od rodzaju pojazdu oraz pokonanego odcinka.
                        Opłat uiszcza się na bramkach lub automatyczna przy użyciu urządzenia w samochodzie zarejestrowanego przez jednego z francuskich operatoró.
                    </p>
                    <p>
                        We francji płatne są również przejazdy niktórymi tunelami, wiaduktami i mostami. Z Francji w prosty sposób można dostać się do Wielkiej Brytanii dzięki Eurotunelowi. Cena za przejazd tunelem zależna jest od teminu rezerwacji.
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
                        <p>We Francji zalecane jest posiadanie w samochodzie alkomatu</p>
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
                    <p>obowiązek używania fotelików lub siedzisk do 10 lat w foteliku mogą podróżować na przednim siedzeniu</p>
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
                        Przekroczenie dozwolonych prędkości o ponad 30km/h wiąze się z natychmiastowym zatrzymaniem prawa jazdy. W terenie zabudowanym piesi maja bezwzględne pierwszeństwo.
                    </p>
                    <p>
                        We francji obowiązuje system stref ekologicznych opartych o winiety Crlt'Air dostępne w 6 kategoriach efektywności energetycznej oraz ilości wydzielanych przez pojazd spalin.
                        Szczęgóły: <a href={'https://www.certificat-air.gouv.fr/'} target={'_blank'}> certyfikat-airgouv.fr</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Francja