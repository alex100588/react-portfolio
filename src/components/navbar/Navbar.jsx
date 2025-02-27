import "./Navbar.css";
import logo from "../../assets/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="#home">
            Home
          </AnchorLink>{" "}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#about">
            About me{" "}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#education">
            Education
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#projects">
            Projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#contact">
            Contact
          </AnchorLink>
        </li>
      </ul>
      <AnchorLink className="anchor-link" href="#contact">
        <div className="hero-connect">Connect with me</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
