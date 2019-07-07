import React from "react";
import "./Header.css";
import logoSiteBlindado from "../../assets/imgs/site-blindado-logo.png";
import logoMarvel from "../../assets/imgs/MarvelLogo.svg";
import { Link } from "react-router-dom";
export const Header: React.FC = props => {
  return (
    <header>
      <Link className="logo-site-blindado" to="/">
        <img src={logoSiteBlindado} alt="LOGO SITE BLINDADO" />
      </Link>
      <div className="heroes">heroes</div>
      <div className="logo-marvel">
        <img src={logoMarvel} alt="LOGO MARVEL" />
      </div>
    </header>
  );
};
