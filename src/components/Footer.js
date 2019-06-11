import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Footer = props => (
  <footer>
    <div className="footer__box">
      <div className="footer__content">
        <NavLink className="footer__link" to="/">
          Zdravá strava
        </NavLink>
        <a className="footer__link" href="mailto:andrewtomanek@gmail.com">
          Kontakt
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
