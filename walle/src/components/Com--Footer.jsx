//------------------------------ import libraries
import React from "react";

//------------------------------ import components
import SocialGarden from "../globalComponents/SocialGarden";

//------------------------------ import styles and images
import "../assets/components-style/Footer.scss";
import Logo from "../assets/images/logo-walle.png";

//------------------------------------ COMPONENT ------------------------------------//
const Footer = () => {
  return (
    <footer className="Footer">
      <SocialGarden />
      <img className="Footer__brand" src={Logo} alt="Logo de Walle" />
    </footer>
  );
};

export default Footer;
