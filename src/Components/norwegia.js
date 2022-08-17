import React from "react"
import "../styles/main.scss"

function Norwegia(){
    return(
        <div className={'countryPage norwegia'}>
            <nav className={'countryNav borderDiv flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-norwegia.png"} alt={'Norwegia'} className={'norwegia'}/>
                    <h1>Norwegia</h1>
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
                        <img src={'/100.jpg'} alt={'100km/h'}/>
                    </div>
                </div>
            </div>
            <div className={'payment borderDiv flex'}>
                <h4>
                    Opłaty za przejazdy
                </h4>
                <div>
                    <p>
                        W Norewgii część dróg i tuneli jest płatna. Do opłat stosowany jest w pełni zautomatyzowany
                        sustem Autopass który nie wymaga każdorazowego zatrzymania się na bramkach. Opłatę za przejazd
                         tymi drogami można uregulować m.in. w oznaczonych stacjach benzynowych przy drodze.
                    </p>
                    <p>
                        Zaleca się skorzystanie z systemu opłat pre-paid w celu uniknięcia ciągłego zatrzymywania się.
                        <br/>Szczegóły: <a href={'https://www.autopass.no/visitors-payment'} target={'_blank'}>autopass.no/visitors-payment</a>
                    </p>
                    <p>
                        Płatny jest wjazd do większych miast: Oslo,Trondheim,Bergen.
                    </p>
                    <p>
                        Opłat można się też spodziewać na drogach prywatnych prowadzących do dolin czy też w góry
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
                            W przypadku stwierdzenia że kierowca znajduje się pod wpływem alkocholu wypisowany jest mandat
                             w wysokości zależnej od zarobków zatrzymanego
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
                    <p>obowiązek używania fotelików lub siedzisk do lat 4</p>
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
                        Od 2015 r. Norwegia wprowadziła tymczasowe kontrole graniczne na liniach promowych między Norwegią , Danią i Niemcami
                        Oraz zaostrzenie kontroli terrorystycznej w regionach Ostfold i Hedmark
                    </p>
                    <p>
                        Największe miasta Norwegii, dbając o jakość powietrza mogą wprowadzić ograniczenia w ruchu pojazdów silnikowych,
                        w tym np. zakaz wjazdu dla pojazdów z napędem wysokoprężnym (diesel). informacje o ograniczeniach można sprawdzić na stronach urzędów miast (Oslo, Bergen, Tronheim)
                    </p>
                    <p>
                        Warto także odwiedzić :<br/>
                        <a href={'https://www.vegvesen.no/en/'} target={'_blank'}>vegvesen.no/en/</a><br/>
                        <a href={'https://www.visitnorway.com/plan-your-trip/getting-around/-by-car/'} target={'_blank'}>visitnorway.com/plan-your-trip/getting-around/-by-car</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Norwegia