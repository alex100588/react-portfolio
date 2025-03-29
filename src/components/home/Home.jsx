import "./Home.css";
import eu from "../../assets/eu2.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/cv.pdf";

const Home = () => {
  return (
    <div id="home" className="hero">
      <img src={eu} alt="me" />
      <h1>
        Hello <br />
        <span>My name is Alex, frontend web developer</span>
      </h1>
      <p>
        I am a Frontend Developer with a solid foundation in HTML, CSS, and
        JavaScript, paired with expertise in React and Typescript for building
        dynamic user interfaces.
      </p>
      <div className="hero-action">
        <AnchorLink className="anchor-link" href="#contact">
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>

        <a href={resume} download="resume" className="hero-resume">
          Download resume
        </a>
        </div>
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/ionasc-alexandru-328a2532b/"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/alex100588" target="_blank">
            <i className="bi bi-github"></i>
          </a>
      </div>
    </div>
  );
};

export default Home;
