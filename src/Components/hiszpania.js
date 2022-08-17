import React from "react"
import "../styles/main.scss"

function Hiszpania(){
    return(
        <div className={'countryPage hiszpania'}>
            <nav className={'countryNav border flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-hiszpania.jpg"} alt={'Hiszpania'} className={'hiszpania'}/>
                    <h1>Hiszpania</h1>
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
                        Europejskiego Obszaru Gospodarczego.
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
                        <img src={'/90.png'} alt={'90km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Autostrady i drogi ekspresowe</h4>
                    <div className={'signs flex'}>
                        <img src={'/120.jpg'} alt={'120km/h'}/>
                    </div>
                </div>
            </div>
            <div className={'payment border flex'}>
                <h4>
                    Opłaty za przejazdy
                </h4>
                <div>
                    <p>
                        Niewielkia część autostrad jest płatna (ok.10%). Opłata za podróżowanie uzależniona jest od rodzaju pojazdu oraz pokonanego odcinka Opłat uiszcza się na bramkach.
                        Opłaty za przejazd na danym odcinku można sprawdzić korzystając ze strony internetowej: <a href={'https://www.mitma.gob.es/'} target={'_blank'}>www.mitma.gob.es</a>
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
                        <h2>0,3%</h2>
                        <p>Dla kierowców początkujących posiadających prawo jazdy krócej niż 2 lata</p>
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
                    <p>obowiązek używania fotelików lub siedzisk do 12 lat lub 135cm</p>
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
                        Po wypisaniu mandatu policja unieruchamia pojazd i zatrzymuje jego dokumenty, Nie ma możliwości uzyskania "mandatu kredytowego". Kierowca może kontynuować jazdę pojazdem dopiero po opłaceniu mandatu.
                         Mandat można opłacić na 3 sposoby:
                        <ul>
                            <li>gotówką na miejscu</li>
                            <li>poprzez kaucję gwarantowana przez hiszpańską firmę upoważnioną do tego przez hiszpańskie Ministerstwo Transportu (jeżeli mamy taką umowę).</li>
                            <li>przelewem na konto bankowe Wydziały transportu właściwego dla regionu , gdzie miało miejsce zatrzymanie jeżeli jest on dopuszczalny</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Hiszpania