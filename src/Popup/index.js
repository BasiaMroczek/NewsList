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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos doloribus aliquam debitis, dicta fuga consectetur
            repudiandae accusamus incidunt voluptas accusantium ipsum adipisci,
            ea tenetur cupiditate ratione doloremque natus nihil hic!
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