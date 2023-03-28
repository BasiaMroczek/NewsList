import { useState } from 'react';
import "./style.css";


const Sidebar = () => {
  const [activeCountry, setActiveCountry] = useState(null);

  const handleCountryClick = (countryCode) => {
    setActiveCountry(countryCode);
  };

  const handleClosePopup = () => {
    setActiveCountry(null);
  };

  return (
    <div>
      <nav className="content__navigation">
        <ol>
          <li><a className="content__navigation--title" href="#"><strong>Zmień Kraj</strong></a>
            <ul>
              <li>
                <a href="#"
                  data-country="at"
                  onClick={() => handleCountryClick('Austrii')}>
                  <img
                    className="content__navigation--image"
                    src="https://i.postimg.cc/RCfcJ8dy/Flaga-Austria.png"
                  />
                  Austria
                </a></li>
              <li>
                <a href="#"
                  data-country="bel"
                  onClick={() => handleCountryClick('Belgii')}>
                  <img
                    className="content__navigation--image"
                    src="https://i.postimg.cc/14hBw1V5/Flaga-Belgia.png"
                  />
                  Belgia
                </a>
              </li>
              <li>
                <a href="#"
                  data-country="fi"
                  onClick={() => handleCountryClick('Finlandii')}>
                  <img
                    className="content__navigation--image"
                    src="https://i.postimg.cc/nzf1hw5J/Flaga-Finlandia.png"
                  />
                  Finlandia
                </a>
              </li>
              <li>
                <a href="#"
                  data-country="fr"
                  onClick={() => handleCountryClick('Francji')}>
                  <img
                    className="content__navigation--image"
                    src="https://i.postimg.cc/XNmqWCw5/Flaga-Francja.png"
                  />
                  Francja
                </a>
              </li>
              <li>
                <a href="#"
                  data-country="de"
                  onClick={() => handleCountryClick('Niemiec')}>
                  <img
                    className="content__navigation--image"
                    src="https://i.postimg.cc/9FQY09xr/Flaga-Niemcy.png"
                  />
                  Niemcy
                </a>
              </li>
              <li>
                <a href="#"
                  data-country="no"
                  onClick={() => handleCountryClick('Norwegii')}>
                  <img
                    className="content__navigation--image"
                    src="https://i.postimg.cc/sXzprGQf/Flaga-Norwegia.png"
                  />
                  Norwegia
                </a>
              </li>
              <li>
                <a href="#"
                  data-country="pl"
                  onClick={() => handleCountryClick('Polski')}>
                  <img
                    className="content__navigation--image"
                    src="https://i.postimg.cc/bNr1phJn/Flaga-Polska.png"
                  />
                  Polska
                </a>
              </li>
            </ul>
          </li>
        </ol>
      </nav>
      {activeCountry && (
        <div className="popup">
          <div className="popup__content">
            <h2>Newsy z {activeCountry}</h2>
            <button className="popup__close" onClick={handleClosePopup}>
              Zamknij okno
            </button>
            <p>Tutaj umieść swoje newsy dla kraju {activeCountry}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar