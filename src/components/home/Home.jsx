import "./Home.css";
import me from "../../assets/me.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Home = () => {
  return (
    <div id="home" className="hero">
      <img src={me} alt="me" />
      <h1>
        <span>I am Ionasc Alex</span>, frontend developer
      </h1>
      <p>
        I am a Frontend Developer with a solid foundation in HTML, CSS, and
        JavaScript, paired with expertise in React for building dynamic user
        interfaces.
      </p>
      <div className="hero-action">
        <AnchorLink className="anchor-link" href="#contact">
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>

        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Home;
