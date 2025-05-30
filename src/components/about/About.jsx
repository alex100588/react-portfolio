import "./About.css";
import me from "../../assets/eu2.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={me} alt="me" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hy, I am Alex, I live in Bacau,Romania, I studied Informatics at
              Vasile Alecsandri University, I am passionate about aquariums,
              tropical fish in general, my other passions are computers,
              technology, games and programming. In my spare time I like to
              create apps.
            </p>
            <p> Some of my skills are:</p>
          </div>
          <div className="about-skills">
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
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Node.js</p>
              <hr style={{ width: "20%" }} />
            </div>
            <div className="about-skill">
              <p>Express</p>
              <hr style={{ width: "20%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "20%" }} />
            </div>

            {/* <div className="about-skill">
              <p>Networking</p>
              <hr style={{ width: "40%" }} />
            </div> */}
          </div>
        </div>
      </div>
      <div className="icons">
        <i className="bi bi-filetype-html"></i>
        <i className="bi bi-filetype-css"></i>
        <i className="bi bi-filetype-js"></i>
      </div>
      <div className="icons2">
        <i className="bi bi-filetype-jsx"></i>
        <i className="bi bi-filetype-tsx"></i>
        <i className="bi bi-bootstrap"></i>
        <i className="bi bi-filetype-sql"></i>
      </div>
    </div>
  );
};

export default About;
