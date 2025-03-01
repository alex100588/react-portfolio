import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <AnchorLink className="anchor-link" href="#home">
            <img src={footer_logo} alt="" />
          </AnchorLink>{" "}
          <p>Made with passion for design and programming.</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">2025 Ionasc Alex</p>
        <div className="footer-bottom-right">
          <a
            href="https://www.linkedin.com/in/ionasc-alexandru-328a2532b/"
            target="_blank"
          >
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/alex100588" target="_blank">
            <i class="bi bi-github"></i>
          </a>
          <a href="https://www.facebook.com/ionasc.gabriel" target="_blank">
          <i class="bi bi-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
