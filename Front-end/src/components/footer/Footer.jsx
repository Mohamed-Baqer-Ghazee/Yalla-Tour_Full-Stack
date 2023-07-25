import React from "react";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <div className="upper-container">
        <div className="logo-container">
          <h1>logo</h1>
          <p>Travel Company</p>
        </div>
        <div className="info-container">
          {/* Replace <p> with <a> */}
          <p>WEEBLY THEMES</p>
          <p>PRE-SALE FAOS</p>
          <p>SUBMIT A TICKET</p>
        </div>
        <div className="info-container">
          {/* Replace <p> with <a> */}
          <p>WEEBLY THEMES</p>
          <p>PRE-SALE FAOS</p>
          <p>SUBMIT A TICKET</p>
        </div>
        <div className="info-container">
          {/* Replace <p> with <a> */}
          <p>WEEBLY THEMES</p>
          <p>PRE-SALE FAOS</p>
          <p>SUBMIT A TICKET</p>
        </div>
        <div className="info-container">
          {/* Replace <p> with <a> */}
          <p>WEEBLY THEMES</p>
          <p>PRE-SALE FAOS</p>
          <p>SUBMIT A TICKET</p>
        </div>
      </div>
      <hr />
      <div className="lower-container">
        <div className="social">
          <a href="#">
            <img src={facebook} alt="social" />
          </a>
          <a href="#">
            <img src={twitter} alt="social" />
          </a>
          <a href="#">
            <img src={instagram} alt="social" />
          </a>
        </div>
        <h6 className="copyright">
          &#169;Copyright.All right not reserved yet
        </h6>
      </div>
    </div>
  );
}

export default Footer;
