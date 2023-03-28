import React, { useState } from "react";
import "./style.css";

function Popup() {
  const [isVisible, setIsVisible] = useState(false);

  const showPopup = () => {
    setIsVisible(true);
  };

  const hidePopup = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <button className="popup__open-button" onClick={showPopup}>
        Pokaż Popup
      </button>
      {isVisible && (
        <div id="popup" className="popup">
          <h3>Trudności i radości podczas wykonywania zadania.</h3>
          <p>
            Wykonanie zadania rekrutacyjnego dostarczyło mi bardzo dużo radości oraz satysfakcji. Uwielbiam myśleć, zwłaszcza nad rzeczami, o których wiem jeszcze niewiele 🙂.
            Jeszcze, ponieważ błyskawicznie się uczę i zawsze znajduję odpowiedzi na nurtujące mnie problemy.
          </p>
          <p>Wracając do zadania. Trudności, z którymi wydaje mi się, jak na laika poradziłam sobie poprawnie, sprawiły mi funkcje, dzięki którym pobierane są newsy. Uznaję to za trudność,
            ponieważ nigdy wcześniej nie miałam z tym do czynienia. Nie ukrywam, że jestem bardzo podekscytowana faktem, że poczyniłam ten projekt samodzielnie.
          </p>
          <p>Przechodząc do radości związanych z wykonywaniem powierzonego mi zadania, największą było zwyczajnie kombinowanie co zrobić, aby kod działał. Popełniam błędy, co jest oczywistą
            oczywistością biorąc pod uwagę fakt, że kompletnie nie mam doświadczenia, jednak satysfakcja z wykonania zadania jest największą nagrodą. Przyjemność sprawiało mi również stylowanie strony.
            Zainspirowana Państwa stroną www stworzyłam prosty, czytelny styl, który jest odpowiedni do posiadanej zawartości.
          </p>
          <p>Mam nadzieję, że spełniłam Państwa oczekiwania i że będę miała możliwość zasilić Państwa szeregi.
          </p>
          <button className="popup__close-button" onClick={hidePopup}>
            Ukryj Popup
          </button>
        </div>
      )}
    </div>
  );
}

export default Popup;