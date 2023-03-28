import './style.css';
import { useEffect, useState } from "react";
import axios from "axios";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isTileView, setIsTileView] = useState(true);

  useEffect(() => {
    const API_KEY = "d7d687aeef6c423e8158df1dbd6bda42";
    const API_URL = `https://newsapi.org/v2/top-headlines?country=pl&apiKey=${API_KEY}`;

    axios
      .get(API_URL)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleListView = () => {
    setIsTileView(false);
  };

  const handleTileView = () => {
    setIsTileView(true);
  };

  return (
    <div>
      <div className="view-toggle">
        <button className={isTileView ? "active button__tile" : "button__tile"} onClick={handleTileView}>
          Tiles
        </button>
        <button className={!isTileView ? "active button__tile" : "button__tile"} onClick={handleListView}>
          List
        </button>
      </div>
      {isTileView ? (
        <ul className="tiles">
          {articles.map((article, index) => (
            <li key={index}>
              <div className="tile-content">
                <h3>{article.title}</h3>
                <p>{article.source.name}</p>
                <p>{article.publishedAt}</p>
                <a className="read__article" href={article.url} target="_blank" rel="noreferrer">Wejdź by przeczytać</a>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="list">
          {articles.map((article, index) => (
            <li key={index}>
              <div className="list-content">
                <h3>{article.title}</h3>
                <p>{article.source.name}</p>
                <p>{article.publishedAt}</p>
                <a className="read__article" href={article.url} target="_blank" rel="noreferrer">Wejdź by przeczytać</a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArticlesList;