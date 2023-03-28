import { useState } from 'react';
import axios from 'axios';
import "./style.css";

const Sidebar = () => {
  const [activeCountry, setActiveCountry] = useState(null);
  const [news, setNews] = useState([]);

  const handleCountryClick = async (countryCode) => {
    setActiveCountry(countryCode);
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=d7d687aeef6c423e8158df1dbd6bda42`);
    setNews(response.data.articles);
  };

  const handleClosePopup = () => {
    setActiveCountry(null);
    setNews([]);
  };

  return (
    <div>
      <nav className="content__navigation">
        <ol>
          <li><a className="content__navigation--title" href="#"><strong>Zmień Kraj</strong></a>
            <ul>
              <li>
                <a href="#"
                  data-country="gr"
                  onClick={() => handleCountryClick('gr')}>
                  <img
                    className="content__navigation--image"
                    src="https://i.postimg.cc/hv27KFk8/Flaga-Grecja.png"
                  />
                  Grecja
                </a>
              </li>
              <li>
                <a href="#"
                  data-country="ie"
                  onClick={() => handleCountryClick('ie')}>
                  <img
                    className="content__navigation--image"
                    src="https://i.postimg.cc/L6r8L63Y/Flaga-Irlandia.png"
                  />
                  Irlandia
                </a>
              </li>
              <li>
                <a href="#"
                  data-country="no"
                  onClick={() => handleCountryClick('no')}>
                  <img
                    className="content__navigation--image"
                    src="https://i.postimg.cc/66PWx5Sj/Flaga-Norwegia.png"
                  />
                  Norwegia
                </a>
              </li>
              <li>
                <a href="#"
                  data-country="pl"
                  onClick={() => handleCountryClick('pl')}>
                  <img
                    className="content__navigation--image"
                    src="https://i.postimg.cc/bNr1phJn/Flaga-Polska.png"
                  />
                  Polska
                </a>
              </li>
              <li>
                <a href="#"
                  data-country="ru"
                  onClick={() => handleCountryClick('ru')}>
                  <img
                    className="content__navigation--image"
                    src="https://i.postimg.cc/jj85W6gK/Flaga-Rosja.png"
                  />
                  Rosja
                </a>
              </li>
              <li>
                <a href="#"
                  data-country="ua"
                  onClick={() => handleCountryClick('ua')}>
                  <img
                    className="content__navigation--image"
                    src="https://i.postimg.cc/FRL490wT/Flaga-Ukraina.png"
                  />
                  Ukraina
                </a>
              </li>
            </ul>
          </li>
        </ol>
      </nav>
      {activeCountry && (
        <div className="popup">
          <div>
            <h2>Newsy z {activeCountry.toUpperCase()}</h2>
            <button className="popup__close" onClick={handleClosePopup}>
              Zamknij okno
            </button>
            <ul className="popup__content">
              {news.map((article, index) => (
                <li key={index}>
                  <p>{article.title}</p>
                  <p>Autor: {article.author ? article.author : 'Nieznany autor'}</p>
                  <a href={article.url} target="_blank" rel="noreferrer">Czytaj dalej</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;