import React, { useState, useEffect } from "react";
import "./style.css";


function Footer({ articlesCount }) {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer>
      <p>Wyświetlono  artykułów: {articlesCount} | Aktualna godzina: {currentTime}</p>
    </footer>
  );
}

export default Footer;