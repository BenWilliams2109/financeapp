import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="foot">
      <div className="footer-container">
        <ul className="footer-left">
          <li className="foot-item">Email: ben.williams21@outlook.com</li>
          <li className="foot-item">Mobile: +44 7977 344 517</li>
          <li className="foot-item">
            <a href={"https://www.linkedin.com/in/ben-w-257585157/"}>
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
