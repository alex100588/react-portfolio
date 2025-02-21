import "./Education.css";

const Services = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h1>My Education</h1>
        <img src="" alt="" />
      </div>
      <div className="service-container">
        <h3>Certifications</h3>
        <img src="" alt="" />
      </div>
      <div className="skills">
        <div className="about-skill">
          <p>HTML & CSS</p>
          <hr style={{ width: "80%" }} />
        </div>
        <div className="about-skill">
          <p>Javascript</p>
          <hr style={{ width: "70%" }} />
        </div>
        <div className="about-skill">
          <p>React Js</p>
          <hr style={{ width: "60%" }} />
        </div>
        <div className="about-skill">
          <p>Typescript</p>
          <hr style={{ width: "50%" }} />
        </div>
      </div>
    </div>
  );
};

export default Services;
