import React from "react";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import github from "../../assets/icons/github.svg"
import linkedin from '../../assets/icons/linkedin.svg'
import instagram from "../../assets/icons/instagram.svg";
import logo from '../../assets/Yalla-Tour-Logo.png'
import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <div className="upper-container">
        <div className="logo-container">
          <img src={logo} alt="" className="footer-logo" />
        </div>
        <div className="lower-container">
        <div className="social">
          <a href="https://www.linkedin.com/in/mohamed-baqer-ghazee/" target="blank">
            <img src={linkedin} alt="social" />
          </a>
          <a href="https://github.com/Mohamed-Baqer-Ghazee" target="blank">
            <img src={github} alt="social" />
          </a>
          <a href="https://www.facebook.com/FUB32" target="blank">
            <img src={facebook} alt="social" />
          </a>
          <a href="https://www.instagram.com/m.b.932" target="blank">
            <img src={instagram} alt="social" />
          </a>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Footer;
