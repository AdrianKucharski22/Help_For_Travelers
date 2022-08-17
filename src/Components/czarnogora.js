import React from "react"
import "../styles/main.scss"

function Czarnogora(){
    return(
        <div className={'countryPage holandia'}>
            <nav className={'countryNav border flex'}>
                <div className={'flex'}>
                    <img src={"/flaga-czarnogora.webp"} alt={'Holandia'} className={'holandia'}/>
                    <h1>Czarnogóra</h1>
                </div>
                <div className={'leftInfo flex'}>
                    <div className={'alarm'}>
                        <p>Europejski Numer Alarmowy</p>
                        <h2>112</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Policja</p>
                        <h2>92</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Pogotowie ratunkowe</p>
                        <h2>94</h2>
                    </div>
                    <div className={'alarm'}>
                        <p>Straż pożarna</p>
                        <h2>93</h2>
                    </div>
                </div>
            </nav>
            <div>
                <div className={'intoCountry border flex'}>
                    <h4>
                        Wjazd do kraju
                    </h4>
                    <p>
                        Na podstawi paszportu lub dowodu osobistego oraz Zielonej Karty. Przy pobytach dłuższych niż 90 dni wymagana jest wizyta.
                        Polskie prawo jazdy jest honorowane. podróżując samochodem, którego właścicielem jest inna osoba należy stosowne potwierdzenie.
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
                        <img src={'/80.jpg'} alt={'80km/h'}/>
                    </div>
                </div>
                <div className={'signs flex'}>
                    <h4>Autostrady i drogi ekspresowe</h4>
                    <div className={'signs flex'}>
                        <img src={'/110.jpg'} alt={'100km/h'}/>
                    </div>
                </div>
            </div>
            <div className={'payment border flex'}>
                <h4>
                    Opłaty za przejazdy
                </h4>
                <div>
                    <p>
                        W Czarnogórze nie ma płatnych autostrad. opłata w wysokości 2,5 EUR obowiązuje jedynie za przejazd tunelem "Sozina" w jedną stronę (od Podgornicy w kierunku morza)
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
                            0,3%
                        </h2>
                        <p>Zawartość alkoholu w przedziale 0,3-0,5% jest karana mandatem do 200 EUR, powyżej 0,5% do 2000 EUR lub 60 dni więzienia. Ponadto za przewożenie na przednim siedzeniu osób nietrzeźwych można otrzymać mandat do 150 EUR</p>
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
                    <p>obowiązek używania fotelików do 5 lat zakaz przewożenia dzieci do 12 lat na przednim siedzeniu</p>
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
                        Przekroczenie dozwolonej prędkości o 1km/h może być ukarane mandatem w wysokości do 100 EUR
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Czarnogora