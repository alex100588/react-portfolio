import React from "react";
import "./Portfolio.css";
import Iframe from "react-iframe";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        <div className="video">
          <h3>Presentation </h3>
          <Iframe
            width="1000"
            height="450"
            src="https://www.youtube.com/embed/wxjV7pnhpLs?si=f3Jel8WC5edUs4m6"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            
            allowfullscreen
          ></Iframe>
        </div>
        <div className="video">
          <h3>React Photo App </h3>
          <Iframe
            width="1000"
            height="450"
            src="https://www.youtube.com/embed/wxjV7pnhpLs?si=f3Jel8WC5edUs4m6"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         
            allowfullscreen
          ></Iframe>
        </div>
        <div className="video">
          <h3>React E-commerce</h3>
          <Iframe
            width="1000"
            height="450"
            src="https://www.youtube.com/embed/wxjV7pnhpLs?si=f3Jel8WC5edUs4m6"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            
            allowfullscreen
          ></Iframe>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
