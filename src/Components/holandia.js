import flagaHolandia from "../JPG/flaga-holandia.webp"
import helmet from "../JPG/helmet.svg"
import max100 from "../JPG/100.jpg"
import max50 from "../JPG/50.webp"
import max80 from "../JPG/80.jpg"
import max120 from "../JPG/120.jpg"
import max130 from "../JPG/130.jpg"
import pasy from "../JPG/pasy.webp"
import baby from "../JPG/baby.png"
import tel from "../JPG/tel.webp"

function Holandia(){
    return(
      <div className={'countryPage holandia'}>
          <nav className={'countryNav borderDiv flex'}>
              <div className={'flex'}>
                <img src={flagaHolandia} alt={'Holandia'} className={'holandia'}/>
                <h1>Holandia</h1>
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
                      <img src={max100} alt={'100km/h'}/>
                      <img src={max120} alt={'120km/h'}/>
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
                  Korzystanie z dróg szybkiego ruchu na terenie królestwa Niderlandów jest bezpłatne.
              </p>
              <p>
                  Opłat można spodziewac się jedynie za przejazd niektórymi tunelamu np.Dordse Kill w regionie
                  Biesbosch (ok 2E) i Westerschelde między wyspą Zeeland a trasą Baarland-Temeuzen(ok 3E)
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
                <p>Dla kierowców początkujących posiadających prawo jazdy krócej niż 5 lat</p>
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
                  Parkowanie w miastach jest mozliwe wyłącznie na wyznaczonych do tego miejscach od poniedziałku do piątku
                  płatne są niemal wszystkie miejsca postoowe a w duzych miastach takze w weekendy Turysci moga parkowac z tzw transferiach.
                  czyli parkingachulokowanych na obrzeszach miast przy parkowaniu na transferach otrzymije sie darmowe bilety na komunikację publiczną
              </p>
              <p>
                  Kraj pokryty jest gęstą siecia fotoradarów oraz odcinkowych pomiarach prędkosci.Jeśli przekroczysz dozwoloną prędkość
                  o ponad 50km/h samochód może zostac skonfiskowany,Jeżeli popełnisz w Holandi powazne wykroczenie drogowe a nie jestes w tym kraju zameldowany
                  możesz zostać zobowiązany przez prokuratora do opłacenia mandatu natychmiast po jego wymierzeniu .
              </p>
              <p>
                  Jako kierowca zwracaj szczególna uwagę na rowerzystów.Na ścierzkach rowerowych mają oni zawsze pierwszeństwo.
              </p>
              </div>
          </div>
      </div>
    );
}
export default Holandia