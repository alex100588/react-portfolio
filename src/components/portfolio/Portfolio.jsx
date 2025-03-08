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
            src="https://www.loom.com/embed/67af80e1e48d41a89c97b295a9e7db57?sid=5516f5c1-948f-4cda-9bcc-ed79520abb76"
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
            src="https://www.loom.com/embed/9c5586116952440fa8ee6f040b9593ad?sid=09122f1d-7928-4e22-85bb-bff86ed65f25"
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
