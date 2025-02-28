import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <AnchorLink className="anchor-link" href="#home">
            <img src={footer_logo} alt="" />
          </AnchorLink>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, eius!
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">2025 Ionasc Alex</p>
        <div className="footer-bottom-right">
          <p>Terms of services</p>
          <p>Connect</p>
          <p>Connect 2</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
