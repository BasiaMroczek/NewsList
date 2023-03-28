import React, { useState, useEffect } from "react";
import Header from './Header';
import Sidebar from './Sidebar';
import ArticlesList from "./ArticlesList";
import Footer from './Footer';

function App() {
  const [articlesCount, setArticlesCount] = useState(0);

  return (
    <body className="body">
      <Header />
      <div className="content">
        <Sidebar />
        <ArticlesList setArticlesCount={setArticlesCount} />
      </div >
      <Footer articlesCount={articlesCount} />
    </body >
  );
}

export default App;
