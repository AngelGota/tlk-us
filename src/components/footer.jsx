import React from "react";
import Logo from "../assets/svgs/logo.svg";
import "../styles/footer.css";

const footer = () => {
  return (
    <div className="footer-container">
      <a href="/">
        <img src={Logo} alt="logo" />
      </a>
    </div>
  );
};

export default footer;
