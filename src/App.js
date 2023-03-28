import React, { useState, useEffect } from "react";
import Header from './Header';
import Sidebar from './Sidebar';
import ArticlesList from "./ArticlesList";
import Footer from './Footer';

function App() {

  
  return (
    <body className="body">
      <Header />
      <div className="content">
        <Sidebar />
        <ArticlesList />
      </div >
      <Footer />
    </body >
  );
}

export default App;
