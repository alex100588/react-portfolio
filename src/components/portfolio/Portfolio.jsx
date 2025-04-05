import React from "react";
import "./Portfolio.css";
import Iframe from "react-iframe";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        {/* <div className="video">
          <h3>Presentation </h3>
          
         <Iframe
            width="1000"
            height="450"
            src="https://www.loom.com/embed/60ebf3cf08854692baed424c74e651af?sid=315a1d4f-cd34-4afd-9c21-5445a11825c8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            
            allowfullscreen
          ></Iframe>
        </div> */}
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
            src="https://www.loom.com/embed/4064361bea1144808b1ab736fa14e3db?sid=f08b0cce-48a2-492d-82e9-65bdf6e179e06"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            
            allowfullscreen
          ></Iframe>
        </div>
        <div className="video">
          <h3>MERN CRUD full stack app</h3>
          <Iframe
            width="1000"
            height="450"
            src="https://www.loom.com/embed/5eafb461e0004c5c890b4a3773e013ad?sid=eb2d7ea3-78b4-4686-a627-078fda8371c4"
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
